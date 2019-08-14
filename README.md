# Form Maker

## Usage

1. Create a build file for each form in the form-builds directory.
2. Add form templates in the form-templates directory. The template function requires two arguments: fields and replacements. If there are no replacements, add a default value to the function parameter of an empty array (ex. replacements=[]).
4. Add each created form template to the exports in form-templates/index.js.
5. Add form field snippets to the form-snippets directory. Any data that needs to be passed into the snippet will come through the function data parameter as an object. All replacements can be referenced to as keys of the data object (ex. data.id).
6. Add each created form snippet to the exports in form-snippets/index.js.
7. Add a form-build file for each form in the form-builds directory. Fields have a data key to pass data to the corresponding form snippet.
8. Run `$ node main.js` to build the forms. They will save to the dest directory.

## TODO

1. Add tests. Probably with Ava.