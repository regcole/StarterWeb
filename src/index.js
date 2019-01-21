import JSONEditor from '@json-editor/json-editor';

JSONEditor.defaults.options.theme = 'bootstrap4';
JSONEditor.defaults.options.iconlib = "materialicons";
function initFirstTree() {
    let element = document.getElementById("tree");
    let schema = {
        type: "object",
        properties: {
            name: {
                type: "string"
            }
        }
    };
    let editor = new JSONEditor(element,{schema: schema});
    editor.setValue({name: "John Smith"});
}

window.onload = () => {
    initFirstTree();
};


