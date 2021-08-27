import React, { FC, useEffect } from 'react'

import MonacoEditor from '@monaco-editor/react'

import styles from './Editor.module.css'

export type EditorProps = {
  value: string
  onChange: (value: string) => void
}

const Editor: FC<EditorProps> = ({ value, onChange }) => {
  // loading
  return (
    <div className={styles.editor}>
      <MonacoEditor
        defaultLanguage="javascript"
        value={value}
        onChange={value => onChange(value || '')}
      />
    </div>
  )
}

export default Editor
