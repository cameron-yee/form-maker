# Form Maker

## Installation
1. Make sure Node.js is installed.
2. Clone GitHub repo: `git clone https://github.com/cameron-yee/form-maker.git`

## Usage

1. Create a build file for each form in the form-builds directory.
2. Add form templates in the form-templates directory. The template function requires three arguments: build, fields and state.
  * build: the full json data for the build
  * fields: the field snippets to insert into the form template.
  * state: a list of fields to use for state in React. If not needed, set template function parameter to an empty array.
4. Add each created form template to the exports in form-templates/index.js.
5. Add form field snippets to the form-snippets directory. Any data that needs to be passed into the snippet will come through the function data parameter as an object. All replacements can be referenced to as keys of the data object (ex. data.id).
6. Add each created form snippet to the exports in form-snippets/index.js.
7. Add a form-build file for each form in the form-builds directory. Fields have a data key to pass data to the corresponding form snippet.
8. Run `$ node main.js` to build the forms. They will save to the dest directory.
9. The indentation formatting isn't perfect, but can be fixed in VSCode really easily by executing the formatting shortcut:
  * Windows: Shift + Alt + F
  * MacOS: Shift + Option + F
  * Ubuntu: Ctrl + Shift + I (maybe other Linux???)

## TODO

1. Add tests. Probably with Ava.

## Philosophy

1. Highly decoupled from both frontend and backend.
    - Can be dropped into any frontend project with customizable form templates
        - Copy & Paste into existing projects
    - Data sent to backend with list of additional functions to call on the backend
        - Doesn't care about the backend's implementation of the functions

2. Forms should be simple. Collect data and send it.
    - Updating a forms should be done in as few places as possible.

3. Form implementation should be consistent within projects.
    - Only pieces that vary by form should be replaced within a template