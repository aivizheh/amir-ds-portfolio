import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/
  // you MUST set the base to '/<REPO_NAME>/' here. 
  // For example, if your repo is named 'portfolio', uncomment the line below:
  // base: '/portfolio/',
  
  // If your repo is named '<USERNAME>.github.io', leave it commented out!
})
