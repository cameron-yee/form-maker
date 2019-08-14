exports.NonEmptyTextField = (data) => {
  let filled_snippet =
    `<NonEmptyTextField
      id="${data.id}"
      invalid_message="${data.invalid_message}"
      label="${data.label}"
      setField={(value) => this.setState({${data.state_name}: value})}
    />`

  return filled_snippet
}