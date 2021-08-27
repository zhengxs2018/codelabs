import { transform } from '@babel/standalone'

import skypack from './babel-plugin-transform-imports-skypack'

export function parse(code: string): string {
  const result = transform(code, {
    presets: ['es2015-no-commonjs', 'react'],
    plugins: [skypack],
  })
  return result.code || ''
}
