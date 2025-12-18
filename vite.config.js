// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
    // 서버 설정 - 환경변수 로드 확인
    server: {
        // .env 파일을 명시적으로 로드하도록 설정
    },
});
