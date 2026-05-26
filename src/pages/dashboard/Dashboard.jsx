import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './Overview';
import MyProperties from './MyProperties';
import SavedListings from './SavedListings';
import Profile from './Profile';

const Dashboard = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      <Sidebar />
      <main className="flex-grow p-6 md:p-10 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <Routes>
            <Route index element={<Overview />} />
            <Route path="properties" element={<MyProperties />} />
            <Route path="saved" element={<SavedListings />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
