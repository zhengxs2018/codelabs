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
  try {
    return `<!DOCTYPE html>
  <html>
    <body>
    <div id="root"></div>
    <script>
    window.onerror = function (msg, url, lineNo, columnNo, error) {
      const rootEl = document.querySelector('#root')
      rootEl.innerHTML = \`<div style="color:red"><pre><code>\${error.stack}</code></pre></div>\`
      return false;
    };
    </script>
    <script type="module">
    ${parse(code)}
    </script>
    </body>
  </html>`
  } catch (err) {
    return `<!DOCTYPE html>
    <html>
      <body>
      <div style="color:red">
        <pre><code>${encode((err as Error).stack!)}</code></pre>
      </div>
      </body>
    </html>`
  }
}

function encode(str: string): string {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') ;
}
