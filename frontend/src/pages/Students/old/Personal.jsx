import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from "react-router-dom"
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

const Personal = () => {
      const { formData, handleChange, studentPhoto, setStudentPhoto } = useOutletContext();
      const navigate = useNavigate();

      const [states, setStates] = useState([]);
      const [statesError, setStatesError] = useState(null);
      const [errors, setErrors] = useState({});

      useEffect(() => {
            axios.get(`${API_BASE_URL}/states`)
                  .then((response) => {
                        setStates(response.data);
                  })
                  .catch((error) => {
                        console.error("Failed to load states:", error);
                        setStatesError("Couldn't load states. Please refresh and try again.");
                  });
      }, []);

      const handlePhotoChange = (e) => {
            setStudentPhoto(e.target.files[0] ?? null);
      };

      const validate = () => {
            const nextErrors = {};
            if (!formData.student_id.trim()) nextErrors.student_id = "Student ID is required";
            if (!formData.surname.trim()) nextErrors.surname = "Surname is required";
            if (!formData.first_name.trim()) nextErrors.first_name = "First name is required";
            setErrors(nextErrors);
            return Object.keys(nextErrors).length === 0;
      };

      const handleNext = (e) => {
            e.preventDefault();
            if (validate()) navigate("./parent");
      };

      return (
            <>
                  <h1 className="text-2xl font-medium text-slate-800">Student's Information</h1>
                  <hr className="border-gray-300 my-2" />

                  {statesError && (
                        <p className="text-red-600 text-sm my-2">{statesError}</p>
                  )}

                  <form onSubmit={handleNext} className="my-4 grid grid-cols-3 gap-4">
                        {/* student photo */}
                        <div className="flex items-center col-span-3 border border-gray-300 rounded-md my-2 p-2">
                              <label htmlFor="student_photo" className="text-gray-500 cursor-pointer w-full h-full flex items-center">
                                    <input
                                          type="file"
                                          id="student_photo"
                                          name="student_photo"
                                          accept="image/*"
                                          onChange={handlePhotoChange}
                                    />
                              </label>
                        </div>

                        {/* student ID */}
                        <div className="flex flex-col gap-2">
                              <label htmlFor="student_id" className="text-gray-500">Student ID<span className="text-red-600">*</span></label>
                              <input
                                    type="text"
                                    name="student_id"
                                    id="student_id"
                                    value={formData.student_id}
                                    onChange={handleChange}
                                    className={`border rounded-md p-2 focus:outline-0 placeholder:text-gray-300 ${
                                          errors.student_id ? "border-red-500" : "border-gray-300"
                                    }`}
                                    placeholder="DIS/LA/26/001"
                              />
                              {errors.student_id && <span className="text-red-600 text-sm">{errors.student_id}</span>}
                        </div>

                        {/* student surname */}
                        <div className="flex flex-col gap-2">
                              <label htmlFor="surname" className="text-gray-500">Surname<span className="text-red-600">*</span></label>
                              <input
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    className={`border rounded-md p-2 focus:outline-0 placeholder:text-gray-300 ${
                                          errors.surname ? "border-red-500" : "border-gray-300"
                                    }`}
                                    placeholder="John"
                              />
                              {errors.surname && <span className="text-red-600 text-sm">{errors.surname}</span>}
                        </div>

                        {/* student first name */}
                        <div className="flex flex-col gap-2">
                              <label htmlFor="first_name" className="text-gray-500">First Name<span className="text-red-600">*</span></label>
                              <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    className={`border rounded-md p-2 focus:outline-0 placeholder:text-gray-300 ${
                                          errors.first_name ? "border-red-500" : "border-gray-300"
                                    }`}
                                    placeholder="Doe"
                              />
                              {errors.first_name && <span className="text-red-600 text-sm">{errors.first_name}</span>}
                        </div>

                        {/* student othername */}
                        <div className="flex flex-col gap-2">
                              <label htmlFor="other_name" className="text-gray-500">Other Name</label>
                              <input
                                    type="text"
                                    name="other_name"
                                    id="other_name"
                                    value={formData.other_name}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-0 placeholder:text-gray-300"
                                    placeholder="Mark"
                              />
                        </div>

                        {/* student gender */}
                        <div className="flex flex-col gap-2">
                              <label htmlFor="gender" className="text-gray-500">Gender</label>
                              <select
                                    name="gender"
                                    id="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-0 placeholder:text-gray-300"
                              >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                              </select>
                        </div>

                        {/* student date of birth */}
                        <div className="flex flex-col gap-2">
                              <label htmlFor="date_of_birth" className="text-gray-500">DOB</label>
                              <input
                                    type="date"
                                    name="date_of_birth"
                                    id="date_of_birth"
                                    value={formData.date_of_birth}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-0 placeholder:text-gray-300"
                              />
                        </div>

                        {/* student nationality */}
                        <div className="flex flex-col gap-2">
                              <label htmlFor="nationality" className="text-gray-500">Nationality</label>
                              <input
                                    type="text"
                                    name="nationality"
                                    id="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-0 placeholder:text-gray-300"
                                    placeholder="Nigerian"
                              />
                        </div>

                        {/* student state of origin */}
                        <div className="flex flex-col gap-2">
                              <label htmlFor="state_of_origin" className="text-gray-500">State of Origin</label>
                              <select
                                    name="state_of_origin"
                                    id="state_of_origin"
                                    value={formData.state_of_origin}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-0 placeholder:text-gray-300"
                              >
                                    <option value="">Select State</option>
                                    {states.map((state) => (
                                          <option value={state.name} key={state.id}>{state.name}
                                          </option>
                                    ))}
                              </select>
                        </div>

                        <div className="col-span-3 flex justify-end">
                              <button
                                    type="submit"
                                    className="bg-blue-600 text-white rounded-md px-4 py-2 font-medium"
                              >
                                    Next: Parent
                              </button>
                        </div>
                  </form>
            </>
      )
}

export default Personal
