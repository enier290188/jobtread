import {Amplify} from 'aws-amplify'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app/App'
import awsExports from './aws-exports'

Amplify.configure(awsExports)

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
