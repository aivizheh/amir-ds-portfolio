import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Since you are deploying to https://aivizheh.github.io/amir-ds-portfolio/
  // The base must be set exactly to the repository name:
  base: '/amir-ds-portfolio/',
})
