import React, { useState, ChangeEvent } from 'react'

import SplitPane, { Pane } from 'react-split-pane'

import Editor from './components/Editor'
import Preview from './components/Preview'

import styles from './App.module.css'

const { files, templates, defaultFilename, defaultCode } = getExamples()

function App() {
  const [head, setHead] = useState('<script src="//cdn.jsdelivr.net/npm/eruda"></script>\n<script>eruda.init()</script>')
  const [code, setCode] = useState(defaultCode)
  const [css, setCss] = useState('h1 {\n color: red; \n}')
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
        <SplitPane split="vertical" minSize="60%">
          <SplitPane split="horizontal" minSize="50%">
            <div className={styles.splitView}>
              <div className={styles.splitTitle}>javascript</div>
              <div style={{ height: '100%' }}>
                <Editor value={code} onChange={setCode} />
              </div>
            </div>

            <SplitPane split="horizontal" minSize="50%">
              <div className={styles.splitView}>
                <div className={styles.splitTitle}>css</div>
                <div style={{ height: '100%' }}>
                  <Editor value={css} language="css" onChange={setCss} />
                </div>
              </div>
              <div className={styles.splitView}>
                <div className={styles.splitTitle}>
                  动态插入脚本或样式
                </div>
                <div style={{ height: '100%' }}>
                  <Editor value={head} language="html" onChange={setHead} />
                </div>
              </div>
            </SplitPane>
          </SplitPane>

          <div className={styles.splitView}>
            <div className={styles.splitTitle}>预览</div>
            <div style={{ height: '100%' }}>
              <Preview head={head} script={code} css={css} />
            </div>
          </div>
        </SplitPane>
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
