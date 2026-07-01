

import { createBrowserRouter } from 'react-router'
import RootLayout from '../layouts/RootLayout'
import Home from '../components/HomeLayout/Home'
import CategoryNews from '../pages/CategoryNews'
import RootAuth from "../layouts/RootAuth"
import Login from '../pages/Login'
import Register from '../pages/register'
import NewsDetails from '../pages/NewsDetails'
import PrivateRoute from '../provider/PrivateRoute'
import { ScaleLoader } from 'react-spinners'


export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout></RootLayout>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json"),
                    hydrateFallbackElement: <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
                        <ScaleLoader color="#ffffff" />
                    </div>
                }
            ]

        },
        {
            path: "/auth",
            element: <RootAuth></RootAuth>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                }
            ]
        },
        {
            path: "/news-details/:id",
            element: <PrivateRoute> <NewsDetails></NewsDetails> </PrivateRoute>,
            loader: () => fetch("/news.json"),
            hydrateFallbackElement: <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
                <ScaleLoader color="#ffffff" />
            </div>
        },
        {
            path: "/*",
            element: <h1>Error</h1>
        }
    ]
)