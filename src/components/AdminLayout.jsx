import { Outlet } from "react-router-dom";


const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            <div className="bg-green-500 w-1/2 ">
                <h1>Sidebar</h1>
            </div>
            <div className="bg-red-500 w-1/2 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminLayout;