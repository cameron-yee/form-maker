const fs = require('fs')
const FormSnippets = require('./form-snippets')
const FormTemplates = require('./form-templates')
const FormBuilds = require('./form-builds')

// 1. Loop through each form build
Object.keys(FormBuilds).map(build => {
  fields = []

  // 2. Insert data into field snippet and add snippet to list of fields
  for (let field of FormBuilds[build].fields) {
    let filled_snippet_field = FormSnippets[field.form_snippet](field.form_snippet_data)
    fields.push(filled_snippet_field)
  }

  // 3. Insert fields in template
  let filled_template = FormTemplates[FormBuilds[build].form_template](fields, FormBuilds[build].form_template_replacements)

  // 5. Write form to save file
  const writeForms = () => {
    fs.writeFile(`./dest/${FormBuilds[build].save_name}`, filled_template, err => {
      if (err) throw err
      console.log('Forms have been saved in /dest directory.')
    })
  }

  // 4. Check if /dest directory exists and create it if not. Then, save form in dest directory.
  if (fs.existsSync('./dest')) {
    writeForms()
  } else {
    fs.mkdir('./dest', err => {
      if (err) throw err
      writeForms()
    })
  }
})