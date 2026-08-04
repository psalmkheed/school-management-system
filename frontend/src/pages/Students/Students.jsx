import { useEffect, useState } from 'react';
import { UserCircle } from "lucide-react"
import axios from 'axios';
import { Edit2, Eye, Plus, Trash2 } from 'lucide-react';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

const STORAGE_BASE_URL = (import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api").replace("/api", "");


const formatName = (student) => {
  const parts = [student.first_name, student.other_name, student.surname].filter(Boolean);
  if (parts.length === 0) return "—";
  return parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

const Students = () => {
  const navigate = useNavigate()
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  const addStudent = () => {
    navigate("/dashboard/students/register");
  }

  useEffect(() => {
    setLoading(true);
    axios.get(`${API_BASE_URL}/students`)
      .then(res => setStudents(res.data))
      .catch((error) => {
        console.error("Failed to load students:", error);
        setLoadError("Couldn't load students. Please refresh and try again.");
      })
      .finally(() => setLoading(false));
  }, [])

  const deleteStudent = (student) => {
    if (!window.confirm(`Delete ${formatName(student)}? This can't be undone.`)) return;
    // TODO: wire up DELETE /api/students/{id} once that endpoint exists
    alert("Student Deleted Successfully");
  }
  const editStudent = (student) => {
    // TODO: navigate(`/dashboard/students/${student.id}/edit`) once that route exists
    alert("Edit Student");
  }
  const viewStudent = (student) => {
    // TODO: navigate(`/dashboard/students/${student.id}`) once that route exists
    alert("View Student's Profile");
  }

  return (
    <div className="text-slate-700 min-h-screen px-4 py-2">
      <div className="">
        <Breadcrumb previousPage="Students"/>
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
          <p className="text-gray-500 text-sm mb-4">No students registered yet.</p>
        )}

        {!loading && students.length > 0 && (
          <table className="min-w-1/2 w-full">
            <thead>
              <tr className="text-left bg-gray-200">
                <td className="border-l-gray-200 p-2">#</td>
                <td className="border-l-gray-200 p-2">Student Photo</td>
                <td className="border-l-gray-200 p-2">Student ID</td>
                <td className="border-l-gray-200 p-2">Name</td>
                <td className="border-l-gray-200 p-2">Gender</td>
                <td className="border-l-gray-200 p-2">DOB</td>
                <td className="border-l-gray-200 p-2">Actions</td>
              </tr>
            </thead>
            <tbody className="dark:text-gray-300">
              {students.map((student, index) => (
                <tr className="border border-l-0 border-t-0 border-r-0 border-b-gray-300 dark:border-b-gray-800 hover:bg-gray-200 dark:hover:text-gray-500 cursor-pointer text-sm" key={student.id}>

                  <td className="p-2">{index + 1}</td>
                  <td className="p-2"><img
                    src={student.photo ? `${STORAGE_BASE_URL}/storage/${student.photo}` : (
                      <UserCircle className="size-8 text-gray-300" />
                    )}
                    alt={formatName(student)}
                    className="size-8 rounded-full object-cover"
                  /></td>
                  <td className="p-2">{student.student_id ?? "—"}</td>
                  <td className="p-2">{formatName(student)}</td>
                  <td className="p-2">{student.gender ?? "—"}</td>
                  <td className="p-2">{student.date_of_birth ?? "—"}</td>
                  <td className="flex gap-4 items-center p-2">
                    <Trash2 className="size-4 text-red-600" onClick={() => { deleteStudent(student) }} />
                    <Edit2 className="size-4 text-blue-600" onClick={() => { editStudent(student) }} />
                    <Eye className="size-4 text-orange-600" onClick={() => { viewStudent(student) }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Students
