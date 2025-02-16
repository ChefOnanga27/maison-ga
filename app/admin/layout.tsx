import React from "react";
import Sidebar from "@/app/ui/admin/sidebar";
import { ReactNode } from "react";

type AdminLayoutProps = {
    children: ReactNode;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6">{children}</div>
        </div>
    );
};

export default AdminLayout;
