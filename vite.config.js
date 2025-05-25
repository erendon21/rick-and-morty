import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "https://erendon21.github.io/rick-and-morty/",
  plugins: [react()],
})
