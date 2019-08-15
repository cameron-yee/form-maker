exports.TestTemplate = (build, snippets, state) => {
  let filled_template =
`import React, { Component } from 'react'

const ${build.form_name} = class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ${(state.map(state_array => {
          return (
            `${state_array[0]}: ${state_array[1]},\n`
          )
        })).join('')
      }

      template_state_var: true
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          ${snippets}
        </div>
        <div>
          <p>${build.form_template_replacements[0]}</p>
          <p>${build.form_template_replacements[1]}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default ${build.form_name}
`

  return filled_template
}