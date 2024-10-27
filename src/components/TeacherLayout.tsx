import React, { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { UserGroupIcon, CalendarIcon, ClockIcon, ChartBarIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

type SidebarItem = {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
};

const sidebarItems: SidebarItem[] = [
  { name: 'Student Requests', href: '/teacher/student-requests', icon: UserGroupIcon },
  { name: 'Upcoming Lessons', href: '/teacher/upcoming-lessons', icon: CalendarIcon },
  { name: 'Previous Sessions', href: '/teacher/previous-sessions', icon: ClockIcon },
  { name: 'Statistics', href: '/teacher/statistics', icon: ChartBarIcon },
];
type TeacherLayoutProps = {
  children: ReactNode;
};

export default function TeacherLayout({ children }: TeacherLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const Header = () => (
    <header className="bg-blue-300 dark:bg-gray-800 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Teacher Dashboard</h1>
        <DarkModeToggle />
      </div>
    </header>
  );

  const DarkModeToggle = () => (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );

  const Sidebar = () => (
    <>
      {/* Sidebar for mobile (drops down from top) */}
      <div className={`lg:hidden fixed inset-x-0 top-[57px] bottom-0 z-20 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)}></div>
        <div className={`bg-blue-600 text-white w-full py-6 px-4 transition-transform duration-300 ease-in-out transform ${sidebarOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <SidebarContent />
        </div>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden lg:block bg-blue-600 text-white w-64 space-y-6 py-7 px-2 h-screen fixed left-0 top-0 overflow-y-auto">
        <SidebarContent />
      </div>
    </>
  );

  const SidebarContent = () => (
    <nav className="space-y-2">
      {sidebarItems.map((item) => (
        <Link key={item.name} href={item.href} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
          <item.icon className="inline-block w-6 h-6 mr-2 -mt-1" />
          {item.name}
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}