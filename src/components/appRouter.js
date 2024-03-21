import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { AppContext } from '../index'
export const AppRouter = () => {
    const {user} = useContext(AppContext)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, component }) =>
                <Route key={path} path={path} element={component} />)}
            {publicRoutes.map(({ path, component }) =>
                <Route key={path} path={path} element={component} />)}
        </Routes>
    )
}