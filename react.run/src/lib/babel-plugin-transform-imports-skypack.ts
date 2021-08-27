import { declare } from '@babel/helper-plugin-utils'

export default declare(() => {
  return {
    name: 'transform-imports-skypack',
    visitor: {
      ImportDeclaration: {
        enter(path) {
          const moduleId = path.node.source.value
          if (moduleId && !isURL(moduleId)) {
            path.node.source.value = `https://cdn.skypack.dev/${moduleId}`
          }
        },
      },
    },
  }
})

function isURL(value: string): boolean {
  return /^https?:/.test(value)
}
