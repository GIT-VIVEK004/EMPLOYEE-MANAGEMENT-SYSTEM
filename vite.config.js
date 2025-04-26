import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  theme:{
    extend:{
      primary:"#4263eb",
      secondary:"#63e6be"
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:"3rem",
      }
    }
  },
  plugins: [ tailwindcss(),
    react()],
})
