import React, { useState, ChangeEvent } from 'react'

import Editor from './components/Editor'
import Preview from './components/Preview'

import styles from './App.module.css'

const { files, templates, defaultFilename, defaultCode } = getExamples()

function App() {
  const [css, setCss] = useState('h1 {\n color: red; \n}')
  const [code, setCode] = useState(defaultCode)
  const [head, setHead] = useState('')
  const [selected, setSelected] = useState(defaultFilename)

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const filename = event.target.value

    setSelected(filename)
    setCode(templates[filename])
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div style={{ width: '50%' }}>
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
        </div>
        <div style={{ width: '50%' }}>
          <textarea
            value={head}
            placeholder="动态插入预览页 head 的内容"
            style={{ width: '100%' }}
            onChange={event => setHead(event.target.value)}
          />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.editorContainer}>
          <div className={styles.splitView}>
            <div>javascript</div>
            <div style={{ height: '100%' }}>
              <Editor value={code} onChange={setCode} />
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
            <Preview head={head} script={code} css={css} />
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
