// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
  ## Desription
          
  ${data.description}
  
  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
  
  ## Contributing
  ${data.contributors}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  
  For more information:
  Visit: [https://${data.gitHubUserName}.github.io](https://${data.gitHubUserName}.github.io)
  Email: ${data.email}
  `;
}

module.exports = { generateMarkdown };
