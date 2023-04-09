import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        // AWS Amplify needs this to work
        // By default, Vite doesn't include shims for NodeJS necessary for segment analytics lib to work
        // GitHub Issue: https://github.com/aws/aws-sdk-js/issues/3673
        global: {}
    },
    plugins: [
        react()
    ],
    resolve: {
        alias: {
            // AWS Amplify needs this to work
            // Error: "request" is not exported by "__vite-browser-external", imported by "node_modules/@aws-sdk/credential-provider-imds/dist/es/remoteProvider/httpRequest.js"
            // GitHub Issue: https://github.com/aws/aws-sdk-js/issues/3673
            './runtimeConfig': './runtimeConfig.browser'
        }
    }
})
