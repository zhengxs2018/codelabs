import React, { FC, useEffect } from 'react'

import MonacoEditor from '@monaco-editor/react'

import styles from './Editor.module.css'

export type EditorProps = {
  value: string
  onChange: (value: string) => void
}

const Editor: FC<EditorProps> = ({ value, onChange }) => {
  return (
    <div className={styles.editor}>
      <MonacoEditor
        defaultLanguage="javascript"
        value={value}
        options={{ minimap: { enabled: false } }}
        onChange={value => onChange(value || '')}
      />
    </div>
  )
}

export default Editor
