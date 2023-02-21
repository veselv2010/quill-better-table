import QuillBetterTable from 'src/quill-better-table.js'
// import better-table styles file
import 'src/assets/quill-better-table.scss'

Quill.register({
  'modules/better-table': QuillBetterTable
}, true)

window.onload = () => {
  const quill = new Quill('#editor-wrapper', {
    theme: 'better-table-snow',
    modules: {
      'better-table': [],
      "toolbar": [
        ["clean"],
        ["bold", "italic", "underline", "strike", {
          "script": "super"
        }, {
            "script": "sub"
          }],
        ["link", {
          "better-table": []
        }]
      ],
      keyboard: {
        bindings: QuillBetterTable.keyboardBindings
      },
    }
  })

  let tableModule = quill.getModule('better-table')
  document.body.querySelector('#insert-table')
    .onclick = () => {
      tableModule.insertTable(3, 3)
    }

  document.body.querySelector('#get-table')
    .onclick = () => {
      console.log(tableModule.getTable())
    }

  document.body.querySelector('#get-contents')
    .onclick = () => {
      console.log(quill.getContents())
    }
}
