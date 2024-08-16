import { boot } from 'quasar/wrappers'
import axios from 'axios'

const server = axios.create({ baseURL: 'http://localhost:8878' })
server.defaults.withCredentials = true
server.defaults.withXSRFToken = true

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$server = server
})

export { server }
