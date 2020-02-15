const fs = require("fs");
const path = require("path");

const helpers = require("./helpers");

const loadSchema = name => {
  return JSON.parse(
    fs
      .readFileSync(path.resolve(__dirname, `../schemas/${name}.json`))
      .toString()
  );
};

const didDocSchema = loadSchema("didDoc");

let lines = [];

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
        const refSchema = loadSchema(v.split("did-core.").pop());
        documentSchema(refSchema, level, parent);
      }
      // console.log(item)
      // documentSchema(schema.properties[item], level + 1)
    });
  }
};

documentSchema(didDocSchema, 1, "didDocument");

fs.writeFileSync(path.resolve(__dirname, "../docs/index.md"), lines.join("\n"));
