// 容器
import Designer from './containers/Designer.vue'
import Viewport from './containers/Viewport.vue'
import Simulator from './containers/Simulator.vue'

// 小工具
import DesignToolbar from './widgets/DesignToolbar.vue'

// 模拟器
import MobileSimulator from './simulator/MobileSimulator.vue'
import PCSimulator from './simulator/PCSimulator.vue'

// 设计元素
import RootElement from './elements/RootElement.vue'
import RecursionElement from './elements/RecursionElement.vue'
import SchemaElement from './elements/SchemaElement.vue'

// API
import {
  registerDragSource,
  getDragSource,
  getDragSourceTitle,
} from './mixins/SourceManager'
import { registerMode, getMode } from './mixins/ModeManager'
import {
  registerSimulator,
  getSimulator,
  getSimulatorComponent,
} from './mixins/SimulatorManager'

export {
  // 组件
  Designer,
  DesignToolbar,
  Viewport,
  PCSimulator,
  MobileSimulator,
  RootElement,
  RecursionElement,
  SchemaElement,
  // 开放 API
  registerMode,
  getMode,
  registerSimulator,
  getSimulator,
  getSimulatorComponent,
  registerDragSource,
  getDragSource,
  getDragSourceTitle,
}

function install(Vue) {
  // 容器
  Vue.component(Designer.name, Designer)
  Vue.component(Viewport.name, Viewport)
  Vue.component(Simulator.name, Simulator)

  // 小工具
  Vue.component(DesignToolbar.name, DesignToolbar)

  // 模拟器
  Vue.component(PCSimulator.name, PCSimulator)
  Vue.component(MobileSimulator.name, MobileSimulator)

  // 设计元素
  Vue.component(RootElement.name, RootElement)
  Vue.component(SchemaElement.name, SchemaElement)
  Vue.component(RecursionElement.name, RecursionElement)
}

export default {
  install,
}
