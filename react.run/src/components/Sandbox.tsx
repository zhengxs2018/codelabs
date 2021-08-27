import React, { FC, useRef, useEffect } from 'react'

import styles from './Sandbox.module.css'

export type SandboxProps = {
  html: string
  'allow-modals'?: boolean
  'allow-forms'?: boolean
  'allow-pointer-lock'?: boolean
  'allow-popups'?: boolean
  'allow-same-origin'?: boolean
  'allow-scripts'?: boolean
}

const Sandbox: FC<SandboxProps> = props => {
  const html = props.html
  const ref = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    const iframe = ref.current!
    const win = iframe.contentWindow!
    const doc = win.document

    doc.open()
    doc.write(html)
    doc.close()
  }, [ref, html])

  return (
    <iframe
      className={styles.container}
      sandbox={toSandboxAttrValue(props)}
      scrolling="yes"
      ref={ref}
    />
  )
}

Sandbox.defaultProps = {
  'allow-modals': true,
  'allow-forms': true,
  'allow-pointer-lock': true,
  'allow-popups': true,
  'allow-same-origin': true,
  'allow-scripts': true,
}

export default Sandbox

function toSandboxAttrValue(props: SandboxProps): string {
  const keys = Object.keys(props) as (keyof SandboxProps)[]
  return keys.reduce((acc, key) => {
    if (key.startsWith('allow') && props[key]) {
      return acc + ' ' + key
    }
    return acc
  }, '')
}
