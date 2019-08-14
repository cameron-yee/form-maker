exports.TestTemplate = (fields, replacements, state) => {
  let filled_template =
`import React, { Component } from 'react'

const Form = class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ${state}

      template_state_var: true
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          ${fields}
        </div>
        <div>
          <p>${replacements[0]}</p>
          <p>${replacements[1]}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default Form
`

  return filled_template
}