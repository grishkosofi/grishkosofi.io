import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL || 'https://grishkosofi.github.io/grishkosofi.io/'

  return {
    base: env.VITE_BASE_PATH || '/grishkosofi.io/',
    plugins: [
      react(),
      {
        name: 'portfolio-site-url',
        transformIndexHtml(html) {
          return html.replaceAll('__SITE_URL__', siteUrl)
        },
      },
    ],
  }
})
