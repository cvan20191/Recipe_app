import React, { useState } from "react";
import {
    Menu,
    Home,
    Calendar,
    Clock,
    BarChart2,
    Settings,
    LogOut,
    Check,
    X,
    MessageSquare,
    Phone,
    Edit,
    Share,
} from "lucide-react";

const queueData = [
    {
        id: 1,
        name: "Kate",
        phone: "(888) 555-1212",
        position: 2,
        Sign_In_Time: "9:01 AM",
        waitTime: "21 min",
        notifyTime: "(5 min)",
        service: "Manicure",
    },
    {
        id: 2,
        name: "Mike",
        phone: "(855) 898-7243",
        position: 4,
        Sign_In_Time: "9:04 AM",
        waitTime: "18 min",
        notifyTime: "(3 min)",
        service: "Pedicure",
    },
    {
        id: 3,
        name: "Jane",
        phone: "(800) 555-1212",
        position: 3,
        Sign_In_Time: "9:08 AM",
        waitTime: "14 min",
        notifyTime: "(0 min)",
        service: "Manicure",
    },
    {
        id: 4,
        name: "James",
        phone: "(888) 555-2121",
        position: 2,
        Sign_In_Time: "9:11 AM",
        waitTime: "11 min",
        notifyTime: "(3 min)",
        service: "Pedicure",
    },
    {
        id: 5,
        name: "Margaret",
        phone: "(888) 555-1234",
        position: 2,
        Sign_In_Time: "9:17 AM",
        waitTime: "10 min",
        notifyTime: "(9 min)",
        service: "Manicure",
    },
    {
        id: 6,
        name: "Margaret",
        phone: "(888) 555-1234",
        position: 2,
        Sign_In_Time: "9:17 AM",
        waitTime: "10 min",
        notifyTime: "(9 min)",
        service: "Manicure,Eyebrows,Toes,Lashes",
        staffRequested: "Jane",
    },
];

function ServiceCell({ service }) {
    const [expandService, setExpandService] = useState(false);
    const ref = React.useRef(null);

    const needsTruncation = service.length > 15;

    React.useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setExpandService(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (!needsTruncation) {
        return <div>{service}</div>;
    }

    return (
        <div className="relative space-y-2" ref={ref}>
            <div className="truncate max-w-[150px]">
                {service}
            </div>
            <button
                onClick={() => setExpandService(!expandService)}
                className="text-xs text-blue-500 hover:text-blue-600 transition-colors"
            >
                Show More
            </button>
            {expandService && (
                <div className="absolute z-10 bg-white shadow-lg rounded-lg p-2 mt-1 border min-w-[200px] left-0">
                    {service}
                </div>
            )}
        </div>
    );
}

function Sidebar({ isOpen }) {
    const navItems = [
        {
            icon: <Home className="w-6 h-6" />,
            label: "Waitlist",
            isActive: true,
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            label: "Reservations",
        },
        {
            icon: <Clock className="w-6 h-6" />,
            label: "Recent",
        },
        {
            icon: <BarChart2 className="w-6 h-6" />,
            label: "Analytics",
        },
        {
            icon: <Settings className="w-6 h-6" />,
            label: "Settings",
        },
        {
            icon: <LogOut className="w-6 h-6" />,
            label: "Logout",
        },
    ];

    return (
        <div
            className={`fixed top-0 left-0 h-screen bg-slate-900 
                        transition-all duration-300 ease-in-out overflow-hidden
                        ${isOpen ? "w-48" : "w-0"
                }`}
        >
            <div className="w-48">
                <nav className="flex-1 py-4">
                    <ul className="space-y-2">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className={`flex items-center px-4 py-3 
                                   ${item.isActive
                                            ? "bg-slate-800 text-white"
                                            : "text-gray-400 hover:bg-slate-800 hover:text-white"
                                        }
                                   transition-colors duration-150`}
                                >
                                    <span className="flex items-center justify-center w-6">
                                        {item.icon}
                                    </span>
                                    <span
                                        className={`ml-3 whitespace-nowrap transition-opacity duration-300 ${isOpen
                                            ? "opacity-100"
                                            : "opacity-0"
                                            }`}
                                    >
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

function HeaderTab({ toggleSidebar }) {
    return (
        <header className="bg-slate-600 p-4 flex items-center gap-4 shadow-md">
            <button
                onClick={toggleSidebar}
                className="text-white hover:bg-slate-800 p-2 rounded-lg transition-colors"
            >
                <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-white text-xl font-semibold">
                Diva Nails Waitlist
            </h1>
            <span className="text-white bg-slate-800 px-3 py-1 rounded-full text-sm">
                10
            </span>
            <div className="ml-auto">
                <input
                    type="text"
                    placeholder="Search Name"
                    className="px-4 py-2 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </header>
    );
}

function QueueList() {
    // Common cell className to avoid repetition
    const cellClass = "p-4";

    // Header cell with consistent styling
    const headerClass = `${cellClass} text-gray-500 font-medium text-sm`;

    return (
        <div className="bg-white mx-4 mt-4 w-full">
            {/* Header Row */}
            <div className="grid grid-cols-7 bg-white border-b">
                <div className={headerClass}>NAME</div>
                <div className={headerClass}>POSITION</div>
                <div className={headerClass}>SIGN-IN ▼</div>
                <div className={headerClass}>WAIT</div>
                <div className={headerClass}>NOTIFY</div>
                <div className={headerClass}>SERVICE</div>
                <div className={headerClass}>SEAT/CANCEL</div>
            </div>

            {/* Queue Items */}
            <div className="divide-y divide-gray-200">
                {queueData.map((customer, index) => (
                    <div
                        key={customer.id}
                        className={`grid grid-cols-7 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }`}
                    >
                        <div className={`${cellClass} flex flex-col justify-center min-h-[64px]`}>
                            <div className="font-medium">{customer.name}</div>
                            <div className="text-sm text-gray-400">{customer.phone}</div>
                            {customer.staffRequested && (
                                <div className="text-sm text-gray-400">Request: {customer.staffRequested}</div>
                            )}
                        </div>
                        <div className={`${cellClass} flex items-center`}>{customer.position}</div>
                        <div className={`${cellClass} flex items-center`}>{customer.Sign_In_Time}</div>
                        <div className={`${cellClass} flex items-center`}>{customer.waitTime}</div>
                        <div className={`${cellClass} flex items-center text-green-500`}>{customer.notifyTime}</div>
                        <div className={`${cellClass} flex items-center`}>
                            <ServiceCell service={customer.service} />
                        </div>
                        <div className={`${cellClass} flex items-center gap-2`}>
                            <button className="p-2 text-green-500 border border-green-500 rounded hover:bg-green-50 transition-colors">
                                <Check className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-500 border border-red-500 rounded hover:bg-red-50 transition-colors">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Waitlist() {
    const [isSidebarOpen, setIsSidebarOpen] =
        useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen bg-slate-100">
            <Sidebar isOpen={isSidebarOpen} />
            <div
                className={`transition-all duration-300 ${isSidebarOpen ? "ml-48" : "ml-0"
                    }`}
            >
                <HeaderTab
                    toggleSidebar={toggleSidebar}
                />
                <QueueList />
            </div>
        </div>
    );
}
