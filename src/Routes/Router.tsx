import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root'
import App from '../App'
// import MainLayout from '../layouts/MainLayout'
// import AdminLayout from '../layouts/AdminLayout'

const AdminLayout = React.lazy(() => import('../layouts/AdminLayout'))
const MainLayout = React.lazy(() => import('../layouts/MainLayout'))

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />} >
        <Route path="" element={<MainLayout />} >
            <Route path="" element={<App/>} />
        </Route>

        <Route path="/admin" element={<AdminLayout />} >
            <Route path="" element={<div>Admin</div>} />
        </Route>

    </Route>
))

