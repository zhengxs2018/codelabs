import React, { FC } from 'react'

import { parse } from '../lib/react-sfc-compiler'
import useDebounce from '../hooks/use-debounce'

import Sandbox from './Sandbox'

import styles from './Preview.module.css'

export type PreviewProps = {
  value: string
  delay?: number
}

const Preview: FC<PreviewProps> = ({ value, delay }) => {
  const debounceValue = useDebounce(value, delay)

  return (
    <div className={styles.container}>
      <Sandbox html={debounceValue && toHTML(debounceValue)} />
    </div>
  )
}

Preview.defaultProps = {
  delay: 260,
}

export default Preview

function toHTML(code: string): string {
  return `<!DOCTYPE html>
  <html>
    <body>
    <div id="root"></div>
    <script type="module">
    ${parse(code)}
    </script>
    </body>
  </html>`
}
