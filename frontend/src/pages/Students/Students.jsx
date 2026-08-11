import { useEffect, useState } from 'react';
import axios from 'axios';
import { Plus } from 'lucide-react';

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import { showToast } from '@/components/Toaster/Toaster';

import { getColumns } from './columns';
import { StudentDataTable } from './StudentDataTable';

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

const Students = () => {
  const navigate = useNavigate()
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);


  // showToast notification



  const addStudent = () => {
    navigate("/dashboard/students/register");
  }

  useEffect(() => {
    setLoading(true);
    axios.get(`${API_BASE_URL}/students`)
      .then(res => setStudents(res.data))
      .catch((error) => {
        console.error("Failed to load students:", error);

        showToast("Error loading students",
          error?.res.data?.message || "Failed to load students.",
          "error"
        );
        setLoadError("Couldn't load students. Please refresh and try again.");
      })
      .finally(() => setLoading(false));
  }, [])

  const editStudent = (student) => {
    navigate(`/dashboard/students/register?student_id=${student.id}/edit`);
  }
  const viewStudent = (student) => {
    navigate(`/dashboard/students/view/${student.id}`)
  }

  const columns = getColumns(
    editStudent,
    viewStudent,
  );

  return (
    <div className="text-slate-700 min-h-screen px-4 py-2">
      <div className="">
        <Breadcrumb previousPage="Students" />
        <div className='mb-6 border p-4 rounded-md bg-slate-800 flex items-center justify-between'>
          <div>
            <h1 className='text-2xl text-white font-bold'>Students</h1>
            <p className="text-sm text-gray-200">View all Students</p>
          </div>
          <button className="bg-slate-100 rounded-md px-2 py-1 font-medium hover:bg-slate-300 transition duration-300 flex gap-1 text-sm items-center" onClick={() => { addStudent() }}><Plus className="size-4" />Enroll Student</button>
        </div>

        {loadError && <p className="text-red-600 text-sm mb-4">{loadError}</p>}
        {loading && <p className="text-gray-400 text-sm mb-4">Loading students...</p>}

        {!loading && !loadError && students.length === 0 && (

          showToast("Info", "No students registered yet.", "info")
          // <p className="text-gray-500 text-sm mb-4">No students registered yet.</p>
        )}

        {!loading && students.length > 0 && (<>
          <StudentDataTable
            columns={columns}
            data={students}
          />
        </>
        )}
      </div>
    </div>
  )
}

export default Students
