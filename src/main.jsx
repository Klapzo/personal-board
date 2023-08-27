import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Dashboard from './routes/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NextUIProvider>
            <RouterProvider router={router} />
        </NextUIProvider>
    </React.StrictMode>
)
