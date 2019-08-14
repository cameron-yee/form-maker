exports.TestTemplate = (fields, replacements) => {
  let filled_template =
`import React from 'react'

<React.Fragment>
  <div>
    ${fields}
  </div>
  <div>
    <p>${replacements[0]}</p>
    <p>${replacements[1]}</p>
  </div>
</React.Fragment>`

  return filled_template
}