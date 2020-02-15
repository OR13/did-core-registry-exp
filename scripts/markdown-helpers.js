const contextHelper = require("./contextHelper");

const makeSpecHeader = () => {
  return `#### [View GitHub](https://github.com/OR13/did-core-registry-exp)`;
};

const makeSchemaTitle = ({ schema, level, parent }) => {
  const header = () => {
    return `<h${level} id="${parent}"><a href="#${parent}">${parent}</a></h${level}>`;
  };

  const description = () => {
    return schema.description || "This property is defined using JSON-LD.";
  };

  const getJsonLdContextLineNumber = () => {
    // assume some poorly documented jsonld, try and build a link
    if (!schema.title && !schema.description) {
      const value = contextHelper.find(parent);
      return `[View JSON-LD Context](${value})`;
    } else {
      const jsonContextLine = contextHelper.getContextLineNumber(
        "didr:" + parent
      );
      if (jsonContextLine.split("#").pop() !== "L0") {
        return `[View JSON-LD Context](${jsonContextLine})`;
      }
      return "";
    }
  };

  const titleSection = `

${header()}

${description()}

${getJsonLdContextLineNumber()}

    `;
  return titleSection;
};

const makePropertiesTitle = ({ parent }) => {
  return `${parent} properties`;
};

const buildExamples = ({ schema }) => {
  return schema.example
    .map(ex => {
      return (
        "Example: \n" + "```json\n" + JSON.stringify(ex, null, 2) + "\n```\n"
      );
    })
    .join("\n");
};

module.exports = {
  makeSpecHeader,
  makeSchemaTitle,
  makePropertiesTitle,
  buildExamples
};
