import { NavLink } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import { useEffect, useState } from 'react'
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

const Register = () => {
      const [states, setStates] = useState([]);
      const [statesError, setStatesError] = useState(null);
      const [submitting, setSubmitting] = useState(false);
      const [submitError, setSubmitError] = useState(null);

      const [formData, setFormData] = useState({
            student_id: "",
            surname: "",
            first_name: "",
            other_name: "",
            gender: "",
            date_of_birth: "",
            nationality: "",
            state_of_origin: "",
      });

      const [studentPhoto, setStudentPhoto] = useState(null);

      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
            });
      };

      const handlePhotoChange = (e) => {
            setStudentPhoto(e.target.files[0] ?? null);
      };

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

      const handleSubmit = async (e) => {
            e.preventDefault();
            setSubmitError(null);

            const payload = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                  payload.append(key, value);
            });
            if (studentPhoto) {
                  payload.append("student_photo", studentPhoto);
            }

            setSubmitting(true);
            try {
                  await axios.post(`${API_BASE_URL}/students`, payload, {
                        headers: { "Content-Type": "multipart/form-data" },
                  });
                  // TODO: navigate to the next tab (Parent) or show a success state
            } catch (error) {
                  console.error("Failed to register student:", error);
                  setSubmitError("Something went wrong while saving. Please try again.");
            } finally {
                  setSubmitting(false);
            }
      };

      const tabs = [
            { id: 1, text: "Personal", link: "personal" },
            { id: 2, text: "Parent", link: "parent" },
            { id: 3, text: "Academic", link: "academic" },
            { id: 4, text: "Subjects", link: "subjects" },
            { id: 5, text: "Review", link: "review" },
      ]

      return (
            <>
                  <div className="px-4 py-2 min-h-screen">
                        <Breadcrumb previousPage="Students" currentPage="Register" />
                        <div className="dark:bg-gray-900 border min-h-screen rounded-md border-gray-300 p-4">
                              <div className="grid grid-cols-5 gap-5">
                                    {tabs.map(({ id, text, link }) => {
                                          return (
                                                <NavLink
                                                      to={`/dashboard/students/register/${link}`}
                                                      key={id}
                                                      className={({ isActive }) =>
                                                            `rounded-md p-2 font-medium text-center ${isActive
                                                                  ? "bg-blue-600 text-white"
                                                                  : "bg-gray-200 text-gray-400"
                                                            }`
                                                      }
                                                >
                                                      {text}
                                                </NavLink>
                                          )

                                    })}

                              </div>

                              {/*  */}
                              <div className="my-4">
                                    <h1 className="text-2xl font-medium text-slate-800">Student's Information</h1>
                                    <hr className="border-gray-300 my-2" />

                                    {statesError && (
                                          <p className="text-red-600 text-sm my-2">{statesError}</p>
                                    )}
                                    {submitError && (
                                          <p className="text-red-600 text-sm my-2">{submitError}</p>
                                    )}

                                    <form onSubmit={handleSubmit} className="my-4 grid grid-cols-3 gap-4">
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
                                                      required
                                                      className="border border-gray-300 rounded-md p-2 focus:outline-0 placeholder:text-gray-300"
                                                      placeholder="DIS/LA/26/001"
                                                />
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
                                                      required
                                                      className="border border-gray-300 rounded-md p-2 focus:outline-0 placeholder:text-gray-300"
                                                      placeholder="John"
                                                />
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
                                                      required
                                                      className="border border-gray-300 rounded-md p-2 focus:outline-0 placeholder:text-gray-300"
                                                      placeholder="Doe"
                                                />
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
                                                      disabled={submitting}
                                                      className="bg-blue-600 disabled:opacity-50 text-white rounded-md px-4 py-2 font-medium"
                                                >
                                                      {submitting ? "Saving..." : "Save & Continue"}
                                                </button>
                                          </div>
                                    </form>
                              </div>

                        </div>
                  </div>
            </>
      )
}

export default Register
