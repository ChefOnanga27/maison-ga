"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBuilding, FaBars, FaCalendar } from "react-icons/fa";

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <div className={`bg-gray-800 text-white h-screen ${isOpen ? "w-64" : "w-20"} transition-all duration-300 flex flex-col`}>
            {/* Bouton pour ouvrir/fermer */}
            <div className="p-4 flex justify-between items-center border-b border-gray-700">
                <span className={`${isOpen ? "block" : "hidden"} text-xl font-bold`}>Admin</span>
                <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
                    <FaBars />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
                <ul className="space-y-4">
                    {/* Liens de la sidebar */}
                    <SidebarItem href="/admin/properties" icon={<FaHome />} text="Tableau de bord" isOpen={isOpen} />
                    <SidebarItem href="/admin/properties" icon={<FaBuilding />} text="Propriétés" isOpen={isOpen} />
                    <SidebarItem href="/admin/appointments" icon={<FaCalendar />} text="Rendez-vous" isOpen={isOpen} />
                </ul>
            </nav>

            {/* Déconnexion */}
            <div className="p-4 border-t border-gray-700">
                <button className="w-full flex items-center justify-center p-3 bg-blue-600 hover:bg-black rounded-md">
                    <FaSignOutAlt className="mr-2" />
                    {isOpen && "Déconnexion"}
                </button>
            </div>
        </div>
    );
};

// Composant réutilisable pour les liens
type SidebarItemProps = {
    href: string;
    icon: ReactNode;
    text: string;
    isOpen: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ href, icon, text, isOpen }) => {
    return (
        <li>
            <Link href={href} className="flex items-center p-3 hover:bg-gray-700 rounded-md">
                <span className="text-xl">{icon}</span>
                <span className={`ml-3 ${isOpen ? "block" : "hidden"}`}>{text}</span>
            </Link>
        </li>
    );
};

export default Sidebar;
