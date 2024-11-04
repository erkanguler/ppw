import { Outlet } from "react-router-dom"
import Nav from '../Nav.jsx'

export default function Layout() {
    return (
        <div>
            <div className='nav_c'>
                <Nav />
            </div>
            <div className='active_tab'>
                <Outlet />
            </div>
        </div>
    )
}
