
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
                {/* Sidebar content here */}
                <NavLink className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn btn-ghost '} to={'/about'}>About</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn btn-ghost '} to={'/contact'}>Contact</NavLink>

                <NavLink className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn btn-ghost'} to={'/login'}>Login</NavLink>
            </ul>
        </div>
    );
};

export default Sidebar;