import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from '../App'
import Root from './Root'
import HomePage from '../pages/Home/HomePage'

const MainLayout = React.lazy(() => import('../layouts/MainLayout'))

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />} >
        <Route path="" element={<MainLayout />} >
            <Route path="" element={<HomePage/>} />
        </Route>


    </Route>
))

