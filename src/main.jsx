import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store.jsx'
import { MyRouts } from './MyRouts/MyRouts.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProviders from './Authentication/AuthProvider/AuthProviders.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <AuthProviders>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <RouterProvider router={MyRouts} />
        </AuthProviders>
      </React.StrictMode>
    </QueryClientProvider>
  </Provider>,
)
