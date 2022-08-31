// Styles
import '@mdi/font/css/materialdesignicons.css'
// vuetify 参数设置
// import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { zhHans } from 'vuetify/locale'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

const opts = {
  theme: {
    dark: false
  },
  icons: {
    iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  // 设置 vuetify 语言
  lang: {
    locales: { zhHans },
    fallbackLocale: 'zhHans',
    current: 'zhHans'
  }
}

export default createVuetify(opts)
