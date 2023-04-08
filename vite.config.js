import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // Fix AWS Amplify issue where incorrect entry point is used
    // Error: 'request' is not exported by __vite-browser-external, imported by node_modules/@aws-sdk/credential-provider-imds/dist/es/remoteProvider/httpRequest.js
    // Github Issue: https://github.com/aws/aws-sdk-js/issues/3673
    resolve: {
        alias: {
            './runtimeConfig': './runtimeConfig.browser'
        }
    }
})
