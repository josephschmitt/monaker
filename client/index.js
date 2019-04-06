import * as monaco from 'monaco-editor'
import './styles.css';

monaco.editor.create(document.getElementById('container'), {
  theme: 'vs-dark',
});
