import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import VueFormMaking, { registerDragSource } from 'vue-form-making'
import 'vue-form-making/style/index.scss'

import Grid from './fields/Grid.vue'
import Form from './fields/Form.vue'
import Field from './fields/Field.vue'


registerDragSource('grid', {
  title: '网格',
  onAdd({ generateKey }) {
    return {
      columns: [
        {
          span: 8,
          children: [],
          key: generateKey(),
        },
        {
          span: 8,
          children: [],
          key: generateKey(),
        },
        {
          span: 8,
          children: [],
          key: generateKey(),
        },
      ],
    }
  },
  onClone({ columns, ...schema }, { generateKey }) {
    return {
      ...schema,
      columns: columns.map(column => {
        const newColumn = omit(column, 'children')
        newColumn.key = generateKey()
        newColumn.children = []
        return newColumn
      }),
    }
  },
  component: Grid,
})

registerDragSource('form', {
  title: '表单',
  schema: {
    labelWidth: '100px'
  },
  component: Form,
})

registerDragSource('field', {
  title: '表单文本',
  schema: {
    label: '标签',
    placeholder: '请输入',
  },
  component: Field,
})

registerDragSource('input', {
  title: '输入框',
  schema: {
    placeholder: '请输入',
  },
  component: 'el-input',
})

registerDragSource('button', {
  title: '按钮',
  schema: {},
  component: {
    render(h) {
      return h('el-button', {
        props: this.$attrs
      }, '按钮')
    }
  }
})

export default ({ Vue }) => {
  Vue.use(ElementUI)
  Vue.use(VueFormMaking)
}
