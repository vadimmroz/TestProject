import {
    createRootRoute,
    createRoute,
    createRouter,
    Navigate,
} from '@tanstack/react-router'
import Login from '@pages/Login/Login.tsx'
import Home from '@pages/Home/Home.tsx'
import App from './App.tsx'
import UserProfile from '@pages/UserProfile/UserProfile.tsx'

const rootRoute = createRootRoute({
    component: () => <App />,
})
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <Navigate to="/login" />,
})

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: () => <Login />,
})

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/home',
    component: () => <Home />,
})
const userProfilePage = createRoute({
    getParentRoute: () => rootRoute,
    path: '/user-profile',
    component: () => <UserProfile />,
})

const anyPage = createRoute({
    getParentRoute: () => rootRoute,
    path: '/*',
    component: () => <Navigate to="/login" />,
})

const routeTree = rootRoute.addChildren([
    loginRoute,
    homeRoute,
    anyPage,
    indexRoute,
    userProfilePage,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
