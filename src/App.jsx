
import Sidebar from "./components/layout/Sidebar/Sidebar"
import AppRouter from "./routes/AppRouter"

export default function App() {
    return (
        <>
            <main className="grid grid-cols-[0.5fr_3.5fr] grid-rows-2 h-screen">
                <Sidebar />
                <AppRouter />
            </main>
        </>
    )
}