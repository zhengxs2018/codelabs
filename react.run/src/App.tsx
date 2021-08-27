import React, { useState, ChangeEvent } from 'react'

import Editor from './components/Editor'
import Preview from './components/Preview'

import styles from './App.module.css'

const { files, templates, defaultFilename, defaultCode } = getExamples()

function App() {
  const [code, setCode] = useState(defaultCode)
  const [selected, setSelected] = useState(defaultFilename)

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const filename = event.target.value

    setSelected(filename)
    setCode(templates[filename])
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
          <Editor value={code} onChange={setCode} />
        </div>
        <div className={styles.previewContainer}>
          <Preview value={code} />
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
