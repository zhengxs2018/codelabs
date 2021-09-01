import { noop } from 'lodash'

const availableModes = {
  design: {
    title: '设计模式',
    activate: noop,
    deactivate: noop,
  },
  preview: {
    title: '预览模式',
    activate: noop,
    deactivate: noop,
  },
}

/**
 * 注册模式
 *
 * @param {String} name 名称
 * @param {Object} api  接口
 * @returns {void}
 */
export function registerMode(name, api) {
  availableModes[name] = api
}

/**
 * 获取模式
 *
 * @param {String} name 名称
 * @returns {Object} 模式
 * @returns {null} 如果未找到返回 null
 */
export function getMode(name) {
  return name in availableModes ? availableModes[name] : null
}

export default {
  data() {
    return {
      mode: 'design',
    }
  },
  methods: {
    setMode(name) {
      if (this.mode === name) return

      const nextMode = getMode(name)
      if (!nextMode) throw new TypeError(`[designable] 未知模式: ${name}`)

      nextMode.activate(this)

      const activeMode = getMode(this.mode)
      if (activeMode) {
        activeMode.deactivate(this)
      }

      // 是否将编辑器设置为只读
      // if (nextMode.editorReadonly) {
      //   this.setDisabled()
      // } else {
      //   this.setEnabled()
      // }

      this.mode = name
      this.$emit('mode-change', name)
    },
  },
}
