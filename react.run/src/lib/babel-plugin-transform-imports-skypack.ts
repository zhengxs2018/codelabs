import parsePackageName from 'parse-package-name'
import { declare } from '@babel/helper-plugin-utils'

export default declare(() => {
  return {
    name: 'transform-imports-skypack',
    visitor: {
      ImportDeclaration: {
        enter(path) {
          const moduleId = path.node.source.value
          if (moduleId) {
            if (isURL(moduleId)) return

            const pkg = parsePackageName(moduleId)
            const version = pkg.version || 'latest'
            const subPath = pkg.path ? `/${pkg.path}` : ''

            path.node.source.value = `https://cdn.skypack.dev/${pkg.name}@${version}${subPath}`
          }
        },
      },
    },
  }
})

function isURL(value: string): boolean {
  return /^https?:/.test(value)
}
