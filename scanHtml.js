const fs = require("fs");
const path = require("path");

// Directories to ignore
const ignoreDirs = ["node_modules", "dist", "build", ".git"];

// Function to recursively scan files
const scanFiles = (dir) => {
  if (ignoreDirs.some((ignore) => dir.includes(ignore))) return; // Skip ignored directories

  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      scanFiles(filePath); // Recursively scan subdirectories
    } else if (filePath.match(/\.(js|jsx|tsx|html)$/)) {
      checkFileForErrors(filePath);
    }
  });
};

// Function to check for <h1> inside <p> and incorrect class attribute
const checkFileForErrors = (filePath) => {
  const content = fs.readFileSync(filePath, "utf8");

  // Regex to find <h1> inside <p>
  const h1InsideP = /<p[^>]*>\s*<h1[^>]*>/g;
  
  // Regex to find `class=` instead of `className=`
  const invalidClass = /\bclass\s*=/g;

  let issues = [];

  if (h1InsideP.test(content)) {
    issues.push("⚠️ Found <h1> inside <p>");
  }

  if (invalidClass.test(content)) {
    issues.push("⚠️ Found 'class=' instead of 'className=' (React issue)");
  }

  if (issues.length > 0) {
    console.log(`\n📂 File: ${filePath}`);
    issues.forEach((issue) => console.log(issue));
  }
};

// Start scanning only from `src/`
console.log("🔍 Scanning project for invalid HTML & JSX...");
scanFiles("./src"); // Change to the correct folder
console.log("\n✅ Scan complete!");
