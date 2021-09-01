const path = require('path')

module.exports = {
  title: '通用表单设计器',
  description: '',
  configureWebpack: {
    resolve: {
      alias: {
        'vue-form-making': path.join(__dirname, '../../src'),
      },
    },
  }
}
