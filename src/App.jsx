import {Amplify} from 'aws-amplify'
import awsExports from './aws-exports'

// Material UI is designed to use the Roboto font by default.
// Fontsource can be configured to load specific subsets, weights and styles.
// Material UI's default typography configuration relies only on the 300, 400, 500, and 700 font weights.
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

Amplify.configure(awsExports)

export const App = () => {
    return (
        <h1>App</h1>
    )
}
