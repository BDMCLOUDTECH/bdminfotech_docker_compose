import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {config} from "dotenv"
config()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:'0.0.0.0',
    port:5173,
  },
  define:{
    "process.env":{
      VITE_DOCKER_REACT:process.env.VITE_DOCKER_REACT,
      LOVE_FROM_DOCKER:process.env.LOVE_FROM_DOCKER
    }
  }
})
