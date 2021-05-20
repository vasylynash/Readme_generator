// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseSelection(license) {
  if (license !== "None") {
    switch (license) {
      case "MIT":
        return `https://opensource.org/licenses/MIT`;
      case "APACHE 2.0":
        return `https://opensource.org/licenses/Apache-2.0`;
      case "GPL 3.0":
        return `https://www.gnu.org/licenses/gpl-3.0`;
      case "BSD 3":
        return `https://opensource.org/licenses/BSD-3-Clause`;
    }
  }
}

function renderLicenseBadge(license) {
  if (license !== "None") {
    switch (license) {
      case "MIT":
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      case "APACHE 2.0":
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      case "GPL 3.0":
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      case "BSD 3":
        return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    }
  } else {
    return "";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license) `;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
  This project is licensed under the terms of the [!${license}](${renderLicenseSelection(license)}) license.`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)  
  [Usage](#usage)  
  ${renderLicenseLink(data.license)} 
  [Contributing](#contributing)  
  [Tests](#tests)  
  [Questions](#questions)  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ${renderLicenseSection(data.license)}

  ## Tests
  \`\`\`${data.tests}\`\`\`

  ## Questions
  https://github.com/${data.username}  
  For questions and suggestions, contact me at ${data.email}.
`;
}

module.exports =
{
  generateMarkdown,
}
