import { FC } from 'react'
import { Outlet } from '@tanstack/react-router'
import Header from '@shared/components/Header.tsx'

const App: FC = () => {
    return (
        <div className="app-container">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default App
