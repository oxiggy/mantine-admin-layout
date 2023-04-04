import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
//styles
import { MantineProvider } from '@mantine/core'
import { theme } from 'theme'
import './index.css'
//components
import Layout from '@/layouts/Layout/Layout'

const router = createHashRouter([
  {
    path: '/*',
    element: <Layout />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
