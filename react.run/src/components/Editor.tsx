import React, { FC, useEffect } from 'react'

import MonacoEditor from '@monaco-editor/react'

import styles from './Editor.module.css'

export type EditorProps = {
  value: string
  language?: string
  onChange: (value: string) => void
}

const Editor: FC<EditorProps> = ({ language, value, onChange }) => {
  return (
    <div className={styles.editor}>
      <MonacoEditor
        language={language}
        value={value}
        options={{ minimap: { enabled: false } }}
        onChange={value => onChange(value || '')}
      />
    </div>
  )
}

Editor.defaultProps = {
  language: 'javascript'
}

export default Editor
