const fs = require("fs");
const path = require("path");

const helpers = require("./helpers");

const loadJsonSchema = name => {
  return JSON.parse(
    fs
      .readFileSync(path.resolve(__dirname, `../docs/schemas/${name}.json`))
      .toString()
  );
};

const didDocSchema = loadJsonSchema("didDoc");

let lines = [];

lines.push(helpers.makeSpecHeader());

const documentSchema = (schema, level, parent) => {
  if (
    lines[lines.length - 1] !==
    helpers.makeSchemaTitle({ schema, level, parent })
  ) {
    lines.push(helpers.makeSchemaTitle({ schema, level, parent }));
  }

  if (schema.example) {
    lines.push(helpers.buildExamples({ schema }));
  }

  if (schema.properties) {
    // lines.push(helpers.makePropertiesTitle({ parent }));
    Object.keys(schema.properties).forEach(prop => {
      documentSchema(schema.properties[prop], level + 1, prop);
    });
  }

  if (schema.items) {
    Object.keys(schema.items).forEach(k => {
      let v = schema.items[k];
      if (v.indexOf("did-core.") === 0) {
        lines.pop();
        const refSchema = loadJsonSchema(v.split("did-core.").pop());
        documentSchema(refSchema, level, parent);
      }
      // console.log(item)
      // documentSchema(schema.properties[item], level + 1)
    });
  }

  if (schema.enum) {
    schema.enum.forEach(k => {
      documentSchema(
        {
          // when no title or description are provided, assume a string property in context and build a link..
          // title: `https://github.com/OR13/did-core-registry-exp#${k}`,
          // description: `https://github.com/OR13/did-core-registry-exp#${k}`
        },
        level + 1,
        k
      );
    });
  }
};

documentSchema(didDocSchema, 1, "didDocument");

fs.writeFileSync(path.resolve(__dirname, "../docs/index.md"), lines.join("\n"));
