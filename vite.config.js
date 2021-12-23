import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
import { minifyHtml } from 'vite-plugin-html';
export default defineConfig({
    plugins: [WindiCSS(), minifyHtml()],
    server: {
        open: true,
    },
});
