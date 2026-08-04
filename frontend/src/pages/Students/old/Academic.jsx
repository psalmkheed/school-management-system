import { useEffect, useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";
const Academic = () => {
      const [classes, setClasses] = useState([]);
      const [classesError, setClassesError] = useState(null);
      const { formData, handleChange } = useOutletContext();
      const navigate = useNavigate();
      const [errors, setErrors] = useState({});

      useEffect(() => {
            axios.get(`${API_BASE_URL}/school-classes`)
                  .then((response) => {
                        setClasses(response.data);
                  })
                  .catch((error) => {
                        console.error("Failed to load classes:", error);
                        setClassesError("Couldn't load classes. Please refresh and try again.");
                  });
      }, []);

      const validate = () => {
            const nextErrors = {};
            if (!formData.school_class_id.trim()) nextErrors.school_class_id = "Class is required";
            setErrors(nextErrors);
            return Object.keys(nextErrors).length === 0;
      };

      const handleNext = (e) => {
            e.preventDefault();
            if (validate()) navigate("../subjects");
      };

      return (
            <>
                  <h1 className="text-2xl font-medium text-slate-800">Academic Information</h1>
                  <hr className="border-gray-300 my-2" />

                  {classesError && (
                        <p className="text-red-600 text-sm my-2">{classesError}</p>
                  )}

                  <form onSubmit={handleNext} className="my-4 grid grid-cols-3 gap-4">
                        <div className="flex flex-col gap-2">
                              <label htmlFor="school_class_id" className="text-gray-500">Class<span className="text-red-600">*</span></label>
                              <select
                                    name="school_class_id"
                                    id="school_class_id"
                                    value={formData.school_class_id}
                                    onChange={handleChange}
                                    className={`border rounded-md p-2 focus:outline-0 placeholder:text-gray-300 ${errors.admission_class ? "border-red-500" : "border-gray-300"
                                          }`}
                                    placeholder="JSS 1"
                              >
                                    <option value="">Select Class</option>
                                    {classes.map((student_class) => (
                                          <option value={student_class.name} key={student_class.id}>{student_class.class_name}
                                          </option>
                                    ))}
                                    
                              </select>
                              {errors.admission_class && <span className="text-red-600 text-sm">{errors.admission_class}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                              <label htmlFor="admission_date" className="text-gray-500">Admission Date</label>
                              <input
                                    type="date"
                                    name="admission_date"
                                    id="admission_date"
                                    value={formData.admission_date}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-0 placeholder:text-gray-300"
                              />
                        </div>

                        <div className="flex flex-col gap-2">
                              <label htmlFor="previous_school" className="text-gray-500">Previous School</label>
                              <input
                                    type="text"
                                    name="previous_school"
                                    id="previous_school"
                                    value={formData.previous_school}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-0 placeholder:text-gray-300"
                                    placeholder="Optional"
                              />
                        </div>

                        <div className="col-span-3 flex justify-between">
                              <button
                                    type="button"
                                    onClick={() => navigate("../parent")}
                                    className="bg-gray-200 text-gray-600 rounded-md px-4 py-2 font-medium"
                              >
                                    Back
                              </button>
                              <button
                                    type="submit"
                                    className="bg-blue-600 text-white rounded-md px-4 py-2 font-medium"
                              >
                                    Next: Subjects
                              </button>
                        </div>
                  </form>
            </>
      )
}

export default Academic
