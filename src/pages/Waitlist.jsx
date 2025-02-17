import React, { useState } from 'react';
import { 
  Menu, 
  Home,
  Calendar,
  Clock,
  BarChart2,
  Users,
  Settings,
  LogOut
} from 'lucide-react';

const queueData = [
    { id: 1, name: 'JohnDoe1', waitingTime: '16m 17s', staffMemberRequested: 'Jane Doe1' },
    { id: 2, name: 'JohnDoe2', waitingTime: '13m 56s', staffMemberRequested: 'Jane Doe2' },
    { id: 3, name: 'JohnDoe3', waitingTime: '13m 13s', staffMemberRequested: 'Jane Doe3' },
    { id: 4, name: 'JohnDoe4', waitingTime: '11m 58s', staffMemberRequested: 'Jane Doe4' },
    { id: 5, name: 'JohnDoe5', waitingTime: '11m 16s', staffMemberRequested: 'Jane Doe5' },
];

function Sidebar({ isOpen }) {
    const navItems = [
        { icon: <Home className="w-5 h-5" />, label: 'Waitlist', isActive: true },
        { icon: <Calendar className="w-5 h-5" />, label: 'Reservations' },
        { icon: <Clock className="w-5 h-5" />, label: 'Recent' },
        { icon: <BarChart2 className="w-5 h-5" />, label: 'Analytics' },
        { icon: <Users className="w-5 h-5" />, label: 'Customers' },
        { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
        { icon: <LogOut className="w-5 h-5" />, label: 'Logout' }
    ];

    return (
        <div className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${isOpen ? 'w-48' : 'w-16'}`}>
            {/* Logo Section */}
            <div className="p-3 border-b border-gray-200">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">W</span>
                </div>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 py-4">
                <ul className="space-y-4">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href="#" className={`flex items-center px-3 py-2 ${item.isActive ? 'text-orange-500' : 'text-gray-500 hover:text-orange-500'}`}>
                                <span className="flex items-center justify-center w-10">
                                    {item.icon}
                                </span>
                                <span className={`ml-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    {item.label}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

function HeaderTab({ toggleSidebar }) {
    return (
        <header className="bg-orange-500 p-4 flex justify-between items-center">
            <button onClick={toggleSidebar} className="text-white">
                <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-white text-lg font-semibold">Company Name</h1>
            <div className="flex gap-4">
                <div className="text-white w-6 h-6" />
                <div className="text-white w-6 h-6" />
            </div>
        </header>
    );
}

function QueueList() {
    return (
        <div className="bg-white rounded-lg shadow mx-4 mt-4">
            <div className="bg-gray-700 text-white p-3 grid grid-cols-4">
                <div>Name</div>
                <div>Arrival Time</div>
                <div>Waiting Time</div>
                <div>Actions</div>
            </div>

            <div className="divide-y divide-gray-200">
                {queueData.map((customer) => (
                    <div key={customer.id} className="p-3 grid grid-cols-4 items-center text-black">
                        <div>{customer.name}</div>
                        <div>{customer.arrivalTime}</div>
                        <div>{customer.waitingTime}</div>
                        <div>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded">
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Waitlist() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar isOpen={isSidebarOpen} />
            <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-48' : 'ml-16'}`}>
                <HeaderTab toggleSidebar={toggleSidebar} />
                <QueueList />
            </div>
        </div>
    );
}