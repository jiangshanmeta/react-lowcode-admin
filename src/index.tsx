import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'
import 'normalize.css'
import '@/assets/common.scss'

ReactDOM.render(
    <React.StrictMode>
        <React.Suspense fallback={null}>
            <App />
        </React.Suspense>
    </React.StrictMode>,
    document.getElementById('root')
)
