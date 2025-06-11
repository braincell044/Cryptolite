const fs = require("fs");
const path = require("path");

// Directory to scan (change if needed)
const directoryPath = "./"; // Scans the entire project folder

// Function to recursively scan files
const scanFiles = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    
    if (fs.statSync(filePath).isDirectory()) {
      scanFiles(filePath); // Recursively scan subdirectories
    } else if (filePath.endsWith(".js") || filePath.endsWith(".jsx") || filePath.endsWith(".tsx") || filePath.endsWith(".html")) {
      checkFileForErrors(filePath);
    }
  });
};

// Function to check for <h1> inside <p> and class instead of className
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

// Start scanning
console.log("🔍 Scanning project for invalid HTML & JSX...");
scanFiles(directoryPath);
console.log("\n✅ Scan complete!");
