import React, { useState, ChangeEvent } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'

import hello from './examples/hello.tpl'
import hook from './examples/hook.tpl'

import styles from './App.module.css'

const examples = {
  hello,
  hook,
}

function App() {
  const [code, setCode] = useState(hello)
  const [selected, setSelected] = useState('hello')

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value as keyof typeof examples
    setSelected(value)
    setCode(examples[value])
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <select value={selected} onChange={handleSelectChange}>
          <option value="hello">hello</option>
          <option value="hook">hook</option>
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
