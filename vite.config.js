import vue from '@vitejs/plugin-vue'
import path from 'path'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  alias: {
    '/@': path.resolve(__dirname, './src'),
  },
  plugins: [vue()]
}
