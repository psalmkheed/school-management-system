import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from "react-router-dom"
import axios from "axios";
import { Calendar } from "@/components/ui/calendar";
import {
      Popover,
      PopoverContent,
      PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

const Academic = () => {
      const { formData, handleChange } = useOutletContext();
      const navigate = useNavigate();
      const [errors, setErrors] = useState({});

      const [sessions, setSessions] = useState([]);
      const [terms, setTerms] = useState([]);
      const [classes, setClasses] = useState([]);
      const [departments, setDepartments] = useState([]);
      const [loadError, setLoadError] = useState(null);

      useEffect(() => {
            Promise.all([
                  axios.get(`${API_BASE_URL}/sessions`),
                  axios.get(`${API_BASE_URL}/terms`),
                  axios.get(`${API_BASE_URL}/school-classes`),
                  axios.get(`${API_BASE_URL}/departments`),
            ])
                  .then(([sessionsRes, termsRes, classesRes, departmentsRes]) => {
                        setSessions(sessionsRes.data);
                        setTerms(termsRes.data);
                        setClasses(classesRes.data);
                        setDepartments(departmentsRes.data);
                  })
                  .catch((error) => {
                        console.error("Failed to load academic reference data:", error);
                        setLoadError("Couldn't load one or more dropdowns. Please refresh and try again.");
                  });
      }, []);

      const validate = () => {
            const nextErrors = {};
            if (!formData.academic_session_id) nextErrors.academic_session_id = "Academic session is required";
            if (!formData.term_id) nextErrors.term_id = "Term is required";
            if (!formData.school_class_id) nextErrors.school_class_id = "Class is required";
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

                  {loadError && <p className="text-red-600 text-sm my-2">{loadError}</p>}

                  <form onSubmit={handleNext} className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-2">
                              <label htmlFor="academic_session_id" className="text-gray-500">Academic Session<span className="text-red-600">*</span></label>
                              <select
                                    name="academic_session_id"
                                    id="academic_session_id"
                                    value={formData.academic_session_id}
                                    onChange={handleChange}
                                    className={`border rounded-md p-2 focus:outline-0 ${errors.academic_session_id ? "border-red-500" : "border-gray-300"}`}
                              >
                                    <option value="">Select Session</option>
                                    {sessions.map((session) => (
                                          session.is_current === 1 && (
                                                <option value={session.id} key={session.id} selected>{session.academic_session_name}</option>
                                          )
                                    ))}
                              </select>
                              {errors.academic_session_id && <span className="text-red-600 text-sm">{errors.academic_session_id}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                              <label htmlFor="term_id" className="text-gray-500">Term<span className="text-red-600">*</span></label>
                              <select
                                    name="term_id"
                                    id="term_id"
                                    value={formData.term_id}
                                    onChange={handleChange}
                                    className={`border rounded-md p-2 focus:outline-0 ${errors.term_id ? "border-red-500" : "border-gray-300"}`}
                              >
                                    <option value="">Select Term</option>
                                    {terms.map((term) => (
                                          <option value={term.id} key={term.id}>{term.term_name}</option>
                                    ))}
                              </select>
                              {errors.term_id && <span className="text-red-600 text-sm">{errors.term_id}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                              <label htmlFor="school_class_id" className="text-gray-500">Class<span className="text-red-600">*</span></label>
                              <select
                                    name="school_class_id"
                                    id="school_class_id"
                                    value={formData.school_class_id}
                                    onChange={handleChange}
                                    className={`border rounded-md p-2 focus:outline-0 ${errors.school_class_id ? "border-red-500" : "border-gray-300"}`}
                              >
                                    <option value="">Select Class</option>
                                    {classes.map((cls) => (
                                          <option value={cls.id} key={cls.id}>{cls.class_name}</option>
                                    ))}
                              </select>
                              {errors.school_class_id && <span className="text-red-600 text-sm">{errors.school_class_id}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                              <label htmlFor="department_id" className="text-gray-500">Department</label>
                              <select
                                    name="department_id"
                                    id="department_id"
                                    value={formData.department_id}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-0"
                              >
                                    <option value="">Select Department</option>
                                    {departments.map((dept) => (
                                          <option value={dept.id} key={dept.id}>{dept.department_name}</option>
                                    ))}
                              </select>
                        </div>

                        <div className="flex flex-col gap-2">
                              <label htmlFor="status" className="text-gray-500">Status</label>
                              <select
                                    name="status"
                                    id="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-0"
                              >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Graduated">Graduated</option>
                                    <option value="Withdrawn">Withdrawn</option>
                              </select>
                        </div>

                        <div className="flex flex-col gap-2">
                              <label htmlFor="admission_date" className="text-gray-500">Admission Date</label>
                              <Popover>
                                    <PopoverTrigger asChild>
                                          <Button
                                                type="button"
                                                variant="outline"
                                                size="default"
                                                className="w-full justify-start text-left font-normal"
                                          >
                                                <CalendarIcon className="mr-2 h-4 w-4" />

                                                {formData.admission_date
                                                      ? new Date(formData.admission_date).toLocaleDateString()
                                                      : "Select date of birth"}
                                          </Button>
                                    </PopoverTrigger>

                                    <PopoverContent className="w-auto p-0">
                                          <Calendar
                                                mode="single"
                                                captionLayout="dropdown"
                                                selected={
                                                      formData.admission_date
                                                            ? new Date(formData.admission_date)
                                                            : undefined
                                                }
                                                onSelect={(date) => {
                                                      handleChange({
                                                            target: {
                                                                  name: "admission_date",
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

                        <div className="md:col-span-3 flex justify-between">
                              <button
                                    type="button"
                                    onClick={() => navigate("../parent")}
                                    className="bg-gray-200 text-gray-600 rounded-md px-4 py-2 font-medium"
                              >
                                    Back
                              </button>
                              <button
                                    type="submit"
                                    className="bg-slate-900 text-white rounded-md px-4 py-2 font-medium"
                              >
                                    Next: Subjects
                              </button>
                        </div>
                  </form>
            </>
      )
}

export default Academic
