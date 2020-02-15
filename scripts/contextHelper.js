const fs = require("fs");
const path = require("path");

const didDocLatest = fs
  .readFileSync(path.resolve(__dirname, `../contexts/did-core-latest.jsonld`))
  .toString();

const didDocLatestJson = JSON.parse(didDocLatest, null, 2);

const getContextLineNumber = propertyName => {
  const lines = didDocLatest.split("\n");
  const defLine = lines.find(line => {
    return line.indexOf(propertyName) !== -1;
  });

  const lineNumber = lines.indexOf(defLine) + 1;
  return `https://github.com/OR13/did-core-registry-exp/blob/master/contexts/did-core-latest.jsonld#L${lineNumber}`;
};

const find = propertyName => {
  const lines = didDocLatest.split("\n");
  const defLine = lines.find(line => {
    // console.log("yolo", propertyName, line);
    return line.indexOf(propertyName) !== -1;
  });
  if (defLine) {
    const vocabPrefix = defLine
      .replace(`"${propertyName}": "`, "")
      .split(":")[0]
      .trim();

    const fullUrl = didDocLatestJson["@context"][vocabPrefix] + propertyName;
    return fullUrl;
  }
};
module.exports = { getContextLineNumber, find };
