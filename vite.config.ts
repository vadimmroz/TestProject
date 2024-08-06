/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import * as path from 'path'
import tailwindcss from 'tailwindcss'

export default defineConfig(() => ({
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, './src'),
            '@app': path.resolve(__dirname, './src/app'),
            '@core': path.resolve(__dirname, './src/core'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@shared': path.resolve(__dirname, './src/shared'),
        },
    },
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    test: {
        global: true,
        environment: 'jsdom',
    },
}))
