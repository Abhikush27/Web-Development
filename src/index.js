import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Context from './context/Context'
import {SpeechProvider} from '@speechly/react-client';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
 
    <SpeechProvider appId="900c188d-7f0f-4dfc-adae-7f6c6d9a37b2" language="en-US">
       <React.StrictMode>
    {/* this "context " fuction is called from context.js which allows "TrackerContext.Provider" to access the values to all the files that comes under "App.js"  */}
    <Context>
      <App />
    </Context>
  </React.StrictMode>
  </SpeechProvider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
