const makeSchemaTitle = ({ schema, level, parent }) => {
  const header = () => {
    if (schema.title && schema.title.indexOf("http") === 0) {
      return `${"#".repeat(level)} [${parent}](${schema.title})`;
    } else {
      return `${"#".repeat(level)} ${parent}`;
    }
  };

  const description = () => {
    return schema.description;
  };
  const titleSection = `

${header()}

${description()}

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
  makeSchemaTitle,
  makePropertiesTitle,
  buildExamples
};
