import {defineConfig} from 'vite'
import pages from 'vite-plugin-pages'
import tsconfigPaths from 'vite-tsconfig-paths'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pages(), tsconfigPaths()],
})
