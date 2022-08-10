import { defineConfig } from 'vite'
import solid from 'solid-start/vite'
import unocss from '@unocss/vite'

export default defineConfig({
  plugins: [
    solid(),
    unocss(),
    {
      name: 'fix-vitest-config',
      config(c) {
        c.test.setupFiles = []
        c.test.deps = {
          registerNodeLoader: true
        }
      }
    }
  ]
})
