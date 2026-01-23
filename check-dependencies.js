const fs = require("fs");
const path = require("path");

const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "package.json"), "utf8")
);

function checkNodeVersion() {
  const currentNode = process.version;
  const majorVersion = parseInt(currentNode.slice(1).split(".")[0], 10);
  const supportedVersions = [20, 22, 24];

  if (!supportedVersions.includes(majorVersion)) {
    console.error(
      `Error: Node.js version must be one of ${supportedVersions.join(
        ", "
      )}. Current version: ${currentNode}`
    );
    process.exit(1);
  }
  console.log(`Using Node.js ${currentNode}`);
}

function checkDependencies() {
  // Add any specific dependency version checks here
  // For now, we just check Node version
  checkNodeVersion();
}

checkDependencies();
console.log("All dependency checks passed!");
