import { NavLink } from "react-router-dom"

export default function Nav() {

    function style({ isActive }) {
        return isActive ? { color: 'black', fontWeight: 'bold' } : {}
    }

    return (
        <div className="nav center">
            <div className='display_ib px10 color_bg'><NavLink style={style} to="/">Home</NavLink></div>
            <div className='display_ib px10 color_bg'><NavLink style={style} to="work">Work</NavLink></div>
            <div className='display_ib px10 color_bg'><NavLink style={style} to="skills">Skills</NavLink></div>
            <div className='display_ib px10 color_bg'><NavLink style={style} to="contact">Contact</NavLink></div>
        </div>
    )
}
