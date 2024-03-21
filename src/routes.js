import { Navigate } from "react-router-dom"
import { Admin } from "./pages/admin"
import { Auth } from "./pages/auth"
import { BasketPage } from "./pages/basketPage"
import { DevicePage } from "./pages/devicePage"
import { Shop } from "./pages/shop"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/constants"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: <Admin />
    },
    {
        path: BASKET_ROUTE,
        component: <BasketPage />
    }
]
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        component: <Shop />
    },
    {
        path: DEVICE_ROUTE + '/:id',
        component: <DevicePage />
    },
    {
        path: LOGIN_ROUTE,
        component: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        component: <Auth />
    },
    {
        path: '*',
        component: <Navigate to={SHOP_ROUTE} />
    }
]