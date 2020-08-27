// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **[${data.title}](http://github.com/${data.username}/${data.title})**
  
  [![License: ${data.licence}](https://img.shields.io/badge/License-${data.licence}-blue.svg)](https://choosealicense.com/)

  ## Description

  ${data.description}

  ## Table of contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Tests](#Tests)
  - [Github](#Github)
  - [Questions](#Questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Licence

  ${data.licence} 
  Find licence info [here](https://choosealicense.com/)

  ## Contributoring

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Github

  My Github is [${data.username}](https://github.com/${data.username})

  ## Questions

  Questions can be emailed [here](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
