import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Home, 
  Heart, 
  MessageSquare, 
  User, 
  LogOut,
  Bell
} from 'lucide-react';
import { cn } from '../../../utils/cn';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
    { icon: Home, label: 'My Properties', path: '/dashboard/properties' },
    { icon: Heart, label: 'Saved Items', path: '/dashboard/saved' },
    { icon: MessageSquare, label: 'Messages', path: '/dashboard/messages' },
    { icon: Bell, label: 'Notifications', path: '/dashboard/notifications' },
    { icon: User, label: 'Profile', path: '/dashboard/profile' },
  ];

  return (
    <aside className="w-full lg:w-72 bg-white border-r border-slate-200 shrink-0">
      <div className="p-8 hidden lg:block">
        <h2 className="text-xl font-bold text-slate-900">Dashboard</h2>
        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Welcome back, Alex</p>
      </div>

      <nav className="p-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all",
              isActive 
                ? "bg-secondary/10 text-secondary" 
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <item.icon size={20} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto p-4 border-t border-slate-100 hidden lg:block">
        <button className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
