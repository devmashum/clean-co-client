import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {


    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <Navbar></Navbar>
                    {/* Page content here */}
                    {children}
                </div>
                <Sidebar></Sidebar>

            </div>
            {/* <footer className="footer p-10 bg-neutral text-neutral-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer> */}
        </div>
    );
};
MainLayout.propTypes = {
    children: PropTypes.node
};
export default MainLayout;