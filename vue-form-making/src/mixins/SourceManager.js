const dragSources = {}

/**
 * 注册拖拽源
 *
 * @param {String} name 名称
 * @param {Object} dragSource 拖拽源
 * @returns {void}
 */
export function registerDragSource(name, dragSource) {
  dragSources[name] = {
    name,
    ...dragSource,
  }
}

/**
 * 获取拖拽源
 *
 * @param {String} name 名称
 * @returns {Element|null} 拖拽源对象
 */
export function getDragSource(name) {
  return name in dragSources ? dragSources[name] : null
}

/**
 * 获取拖拽源名称
 *
 * @param {String} name 名称
 * @returns {String} 名称
 */
export function getDragSourceTitle(name) {
  const element = getDragSource(name)
  return element ? element.title : name
}

/**
 * 获取拖拽源
 *
 * @param {String} name 名称
 * @returns {String} 组件
 */
export function getDragSourceComponent(name) {
  const element = getDragSource(name)
  return element ? element.component : name
}

export default {
  methods: {
    getDragSource,
    getDragSourceTitle,
    getDragSourceComponent,
  },
}
