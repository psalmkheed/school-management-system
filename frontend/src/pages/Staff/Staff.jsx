import axios from "axios";
import { Edit2, Eye, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const Staff = () => {

  const [staffs, setStaff] = useState([]);

  const addStaff = () => {
    alert("Add Staff");
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/staff")
      .then(res => setStaff(res.data));
  }, [])
  const deleteStaff = () => {
    alert("Staff Deleted Successfully");
  }
  const editStaff = () => {
    alert("Edit Staff");
  }
  const viewStaff = () => {
    alert("View Staff Profile");
  }

  return (
    <div className="text-slate-700 min-h-screen px-4 py-2">
      <div className="">
        <Breadcrumb previousPage="Staff"/>
        <div className='mb-6 border p-4 rounded-md bg-slate-800 flex items-center justify-between'>
          <div>
            <h1 className='text-2xl text-white font-bold'>Staff</h1>
            <p className="text-sm text-gray-200">View all Staff</p>
          </div>
          <button className="bg-slate-100 rounded-md px-2 py-1 font-medium hover:bg-slate-300 transition duration-300 flex gap-1 text-sm items-center" onClick={() => { addStaff() }}><Plus className="size-4" />Add Staff</button>
        </div>
        <table className="min-w-1/2 w-full overflow-x-auto">
          <thead>
            <tr className="text-left bg-gray-200">
              <td className="border-l-gray-200 p-2">#</td>
              <td className="border-l-gray-200 p-2">Name</td>
              <td className="border-l-gray-200 p-2">Email</td>
              <td className="border-l-gray-200 p-2">Actions</td>
            </tr>
          </thead>
          <tbody className="dark:text-gray-300">
            {staffs.map((staff, index) => (
              <tr className="border border-l-0 border-t-0 border-r-0 border-b-gray-300 dark:border-b-gray-800 hover:bg-gray-200 dark:hover:text-gray-500 cursor-pointer text-sm" key={staff.id}>
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{staff.name.charAt(0).toUpperCase() + staff.name.slice(1)}</td>
                <td className="p-2">{staff.email.charAt(0).toUpperCase() + staff.email.slice(1)}</td>
                <td className="flex gap-4 items-center p-2">
                  <Trash2 className="size-4 text-red-600" onClick={() => { deleteStaff() }} />
                  <Edit2 className="size-4 text-blue-600" onClick={() => { editStaff() }} />
                  <Eye className="size-4 text-orange-600" onClick={() => { viewStaff() }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Staff