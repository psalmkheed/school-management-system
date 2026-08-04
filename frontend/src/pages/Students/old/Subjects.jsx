import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

const Subjects = () => {

      

      const [subjects, setSubjects] = useState([])

      useEffect(() => {
            axios.get(`${API_BASE_URL}/subjects`)
                  .then((response) => {
                        setSubjects(response.data);
                  }
                  )
                  .catch((error) => {
                        console.error("Failed to load subjects:", error);
                  });
      }, [])

      const { formData, setFormData } = useOutletContext();
      const navigate = useNavigate();

      const toggleSubject = (subjectId) => {
            setFormData((prev) => ({
                  ...prev,
                  subjects: prev.subjects.includes(subjectId)
                        ? prev.subjects.filter((id) => id !== subjectId)
                        : [...prev.subjects, subjectId],
            }));
      };

      const handleNext = (e) => {
            e.preventDefault();
            navigate("../review");
      };

      return (
            <>
                  <h1 className="text-2xl font-medium text-slate-800">Subjects</h1>
                  <hr className="border-gray-300 my-2" />

                  <form onSubmit={handleNext} className="my-4">
                        <div className="grid grid-cols-3 gap-4">
                              {subjects.map((subject) => (
                                    <label key={subject.id} className="flex items-center gap-2 text-gray-600">
                                          <input
                                                type="checkbox"
                                                checked={formData.subjects.includes(subject.id)}
                                                onChange={() => toggleSubject(subject.id)}
                                          />
                                          {subject.subject_name}
                                    </label>
                              ))}
                        </div>

                        <div className="flex justify-between mt-6">
                              <button
                                    type="button"
                                    onClick={() => navigate("../academic")}
                                    className="bg-gray-200 text-gray-600 rounded-md px-4 py-2 font-medium"
                              >
                                    Back
                              </button>
                              <button
                                    type="submit"
                                    disabled={formData.subjects.length === 0}
                                    className={`rounded-md px-4 py-2 font-medium ${formData.subjects.length === 0
                                                ? "bg-gray-400 cursor-not-allowed"
                                                : "bg-blue-600 text-white"
                                          }`}
                              >
                                    Next: Review
                              </button>
                        </div>
                  </form>
            </>
      )
}

export default Subjects
