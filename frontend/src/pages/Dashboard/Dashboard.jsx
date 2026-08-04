import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
// import DashboardElement from './DashboardElement'

const Dashboard = () => {

  return (
    <div className="md:flex dark:bg-slate-950 bg-gray-100 dark:text-gray-300 md:pt-0 pt-[80px] min-h-screen">
      <Sidebar />
      <div className='md:ml-[250px] w-full mb-12'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard