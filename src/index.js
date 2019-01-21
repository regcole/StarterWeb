import JSONEditor from '@json-editor/json-editor';
import schema from '../lib/courseSchema';
JSONEditor.defaults.options.theme = 'bootstrap4';
// JSONEditor.defaults.options.iconlib = "materialicons";
function initFirstTree() {
    let element = document.getElementById("tree");
    let editor = new JSONEditor(element,{schema: schema});
    editor.setValue({name: "John Smith"});
}

window.onload = () => {
    initFirstTree();
};


