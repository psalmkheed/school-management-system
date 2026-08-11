import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from "react-router-dom"
import axios from "axios";
import { FaUser } from 'react-icons/fa6';
import { FaAddressCard } from 'react-icons/fa';
import { Calendar } from "@/components/ui/calendar";
import {
      Popover,
      PopoverContent,
      PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

const Personal = () => {
      const { formData, handleChange, studentPhoto, setStudentPhoto } = useOutletContext();

      const [studentExists, setStudentExists] = useState(false);
      const [checkingStudent, setCheckingStudent] = useState(false);

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
            if (validate()) navigate("/dashboard/students/register/parent");
      };

      useEffect(() => {
            const studentId = formData.student_id.trim();

            // Don't check empty or very short IDs
            if (!studentId || studentId.length < 3) {
                  // Defer state update to avoid synchronous setState within effect
                  Promise.resolve().then(() => setStudentExists(false));
                  return;
            }

            const timer = setTimeout(async () => {
                  try {
                        setCheckingStudent(true);

                        const response = await axios.get(
                              `${API_BASE_URL}/students/check`,
                              {
                                    params: {
                                          student_id: studentId,
                                    },
                              }
                        );

                        setStudentExists(response.data.exists);

                  } catch (error) {
                        console.error("Error checking student:", error);
                  } finally {
                        setCheckingStudent(false);
                  }
            }, 500);

            return () => clearTimeout(timer);

      }, [formData.student_id]);

      return (
            <>
                  <h1 className="text-lg md:text-2xl font-medium text-slate-800">Student's Information</h1>
                  <hr className="border-gray-300 my-2" />

                  {statesError && (
                        <p className="text-red-600 text-sm my-2">{statesError}</p>
                  )}

                  <form onSubmit={handleNext} className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* student photo */}
                        <div className="md:col-span-2 xl:col-span-3 flex items-center border border-gray-300 rounded-md my-2 p-2">
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
                        <div className="flex flex-col gap-2 min-w-0">

                              <label
                                    htmlFor="student_id"
                                    className="text-gray-500"
                              >
                                    Student ID
                                    <span className="text-red-600">*</span>
                              </label>

                              <div className="relative">

                                    <input
                                          type="text"
                                          name="student_id"
                                          id="student_id"
                                          value={formData.student_id}
                                          onChange={handleChange}
                                          className={`border rounded-md p-2 focus:outline-0 placeholder:text-gray-300 w-full ${errors.student_id || studentExists
                                                ? "border-red-500"
                                                : "border-gray-300"
                                                }`}
                                          placeholder="DIS/LA/26/001"
                                    />

                                    <FaAddressCard
                                          className="absolute top-1/2 -translate-y-1/2 right-0 pr-3 text-gray-300 size-8"
                                    />

                              </div>

                              {checkingStudent && (
                                    <span className="text-gray-500 text-sm">
                                          Checking student ID...
                                    </span>
                              )}

                              {studentExists && (
                                    <span className="text-red-600 text-sm">
                                          Student ID already exists.
                                    </span>
                              )}

                              {!studentExists &&
                                    !checkingStudent &&
                                    formData.student_id && (
                                          <span className="text-green-600 text-sm">
                                                Student ID is available.
                                          </span>
                                    )}

                              {errors.student_id && (
                                    <span className="text-red-600 text-sm">
                                          {errors.student_id}
                                    </span>
                              )}

                        </div>

                        {/* student surname */}
                        <div className="flex flex-col gap-2">
                              <label htmlFor="surname" className="text-gray-500">Surname<span className="text-red-600">*</span></label>
                              <div className="relative">
                                    <input
                                          type="text"
                                          name="surname"
                                          id="surname"
                                          value={formData.surname}
                                          onChange={handleChange}
                                          className={`border rounded-md p-2 w-full focus:outline-0 placeholder:text-gray-300 ${errors.surname ? "border-red-500" : "border-gray-300"
                                                }`}
                                          placeholder="John"
                                    />
                                    <FaUser className="absolute top-1/2 -translate-y-1/2 right-0 pr-3 text-gray-200 size-7" />
                              </div>
                              {errors.surname && <span className="text-red-600 text-sm">{errors.surname}</span>}
                        </div>

                        {/* student first name */}
                        <div className="flex flex-col gap-2">
                              <label htmlFor="first_name" className="text-gray-500">First Name<span className="text-red-600">*</span></label>
                              <div className="relative">
                                    <input
                                          type="text"
                                          name="first_name"
                                          id="first_name"
                                          value={formData.first_name}
                                          onChange={handleChange}
                                          className={`border rounded-md p-2 w-full focus:outline-0 placeholder:text-gray-300 ${errors.first_name ? "border-red-500" : "border-gray-300"
                                                }`}
                                          placeholder="Doe"
                                    />
                                    <FaUser className="absolute top-1/2 -translate-y-1/2 right-0 pr-3 text-gray-200 size-7" />
                              </div>
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
                              <label htmlFor="date_of_birth" className="text-gray-500">
                                    DOB
                              </label>

                              <Popover>
                                    <PopoverTrigger asChild>
                                          <Button
                                                type="button"
                                                variant="outline"
                                                size="default"
                                                className="w-full justify-start text-left font-normal"
                                          >
                                                <CalendarIcon className="mr-2 h-4 w-4" />

                                                {formData.date_of_birth
                                                      ? new Date(formData.date_of_birth).toLocaleDateString()
                                                      : "Select date of birth"}
                                          </Button>
                                    </PopoverTrigger>

                                    <PopoverContent className="w-auto p-0">
                                          <Calendar
                                                mode="single"
                                                captionLayout="dropdown"
                                                selected={
                                                      formData.date_of_birth
                                                            ? new Date(formData.date_of_birth)
                                                            : undefined
                                                }
                                                onSelect={(date) => {
                                                      handleChange({
                                                            target: {
                                                                  name: "date_of_birth",
                                                                  value: date
                                                                        ? `${date.getFullYear()}-${String(
                                                                              date.getMonth() + 1
                                                                        ).padStart(2, "0")}-${String(
                                                                              date.getDate()
                                                                        ).padStart(2, "0")}`
                                                                        : "",
                                                            },
                                                      });
                                                }}
                                                initialFocus
                                          />
                                    </PopoverContent>
                              </Popover>
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

                        {/* address */}
                        <div className="flex flex-col gap-2 md:col-span-2 xl:col-span-3">
                              <label htmlFor="address" className="text-gray-500">Address</label>
                              <textarea
                                    name="address"
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    rows={2}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-0 placeholder:text-gray-300"
                                    placeholder="Street, city"
                              />
                        </div>

                        <div className="md:col-span-3 flex justify-end">
                              <button
                                    type="submit"
                                    className="bg-slate-900 text-white rounded-md px-4 py-2 font-medium"
                              >
                                    Next: Parent
                              </button>
                        </div>
                  </form>
            </>
      )
}

export default Personal
