import Vue from 'vue'
// 按需导入，所需组件
import { Button, Input,InputNumber,Table,TableColumn } from 'element-ui'
Vue.config.productionTip = false
//在Vue中进行全局注册
Vue.use(Button)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Table)
Vue.use(TableColumn)