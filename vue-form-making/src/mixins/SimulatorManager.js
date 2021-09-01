import { noop } from 'lodash'

import PCSimulator from '../simulator/PCSimulator.vue'
import MobileSimulator from '../simulator/MobileSimulator.vue'

const availableSimulators = {
  pc: {
    activate: noop,
    deactivate: noop,
    component: PCSimulator,
  },
  mobile: {
    activate: noop,
    deactivate: noop,
    component: MobileSimulator,
  },
}

/**
 * 注册模拟器
 *
 * @param {String} name 名称
 * @param {Object} api
 */
export function registerSimulator(name, api) {
  availableSimulators[name] = api
}

/**
 * 获取模式
 *
 * @param {String}  mode 模式
 * @returns {Object} 模式
 * @returns {null} 如果未找到返回 null
 */
export function getSimulator(mode) {
  return mode in availableSimulators ? availableSimulators[mode] : null
}

export function getSimulatorComponent(name) {
  const api = getSimulator(name)
  return api ? api.component : null
}

export default {
  data() {
    return {
      simulator: 'pc',
    }
  },
  computed: {
    SimulatorComponent({ simulator }) {
      return getSimulatorComponent(simulator)
    },
  },
  methods: {
    setSimulator(name) {
      if (this.simulator === name) return

      const nextSimulator = getSimulator(name)
      if (!nextSimulator)
        throw new TypeError(`[designable] 未知模拟器: ${name}`)

      nextSimulator.activate(this)

      const activeSimulator = getSimulator(this.simulator)
      if (activeSimulator) {
        activeSimulator.deactivate(this)
      }

      this.simulator = name
      this.$emit('simulator-change', name)
    },
  },
}
