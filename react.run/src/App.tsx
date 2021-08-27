import React, { useState, ChangeEvent } from 'react'

import Editor from './components/Editor'
import Preview from './components/Preview'

import styles from './App.module.css'

const { files, templates, defaultFilename, defaultCode } = getExamples()

function App() {
  const [css, setCss] = useState('#root {\n color: red; \n}')
  const [script, setScript] = useState(defaultCode)
  const [selected, setSelected] = useState(defaultFilename)

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const filename = event.target.value

    setSelected(filename)
    setScript(templates[filename])
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <span>选择文件：</span>
        <select value={selected} onChange={handleSelectChange}>
          {files.map(filename => {
            return (
              <option value={filename} key={filename}>
                {filename}
              </option>
            )
          })}
        </select>
      </header>
      <main className={styles.main}>
        <div className={styles.editorContainer}>
          <div className={styles.splitView}>
            <div>javascript</div>
            <div style={{ height: '100%' }}>
              <Editor value={script} onChange={setScript} />
            </div>
          </div>
          <div className={styles.splitView}>
            <div>css</div>
            <div style={{ height: '100%' }}>
              <Editor value={css} language="css" onChange={setCss} />
            </div>
          </div>
        </div>
        <div className={styles.previewContainer}>
          <div>预览</div>
          <div style={{ height: '100%' }}>
            <Preview css={css} script={script} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

function getExamples() {
  const modules = import.meta.globEager('./examples/**/*.react')
  const files = Object.keys(modules)
  const templates = files.reduce((templates, filename) => {
    const mod = modules[filename]
    templates[filename] = mod.default
    return templates
  }, {} as Record<string, string>)

  const defaultFilename = files[0]
  const defaultCode = templates[defaultFilename]

  return { files, templates, defaultFilename, defaultCode }
}
