import vue from '@vitejs/plugin-vue'
import { loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

const plugins = (mode) => {
    const env = loadEnv(mode, process.cwd())
    return [
        vue(),
        createHtmlPlugin({
            inject: {
                data: env
            }
        }),
        AutoImport({
            imports: ['vue', 'vue-router', 'pinia'], // 自动导入vue和vue-router相关函数
            eslintrc: {
                enabled: true, // Default `false`
                filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
                globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
            }
        }),
        Components({
            resolvers: [VantResolver()],
            dirs: ['./library/components']
        })
    ]
}

export default plugins
