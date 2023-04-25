import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >

    </Route>
))

