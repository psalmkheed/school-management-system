import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import axios from "axios";
import { showToast } from '@/components/Toaster/Toaster'

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

// Only these keys are accepted by StoreStudentRequest — anything else
// (like parent_guardian_name, which is display-only) is left out of the payload.
const submittableFields = [
      "student_id", "surname", "first_name", "other_name", "gender",
      "date_of_birth", "nationality", "state_of_origin", "address",
      "parent_guardian_id",
      "school_class_id", "department_id", "academic_session_id",
      "term_id", "status", "admission_date",
]

const Review = () => {
      const { formData, studentPhoto } = useOutletContext();
      const navigate = useNavigate();
      const [submitting, setSubmitting] = useState(false);
      const [submitError, setSubmitError] = useState(null);

      const handleSubmit = async () => {
            setSubmitError(null);

            const payload = new FormData();
            submittableFields.forEach((key) => {
                  if (formData[key] !== "" && formData[key] !== null && formData[key] !== undefined) {
                        payload.append(key, formData[key]);
                  }
            });
            formData.subjects.forEach((subject) => {
                  payload.append("subjects[]", subject.subject_id);
            });
            if (studentPhoto) {
                  payload.append("photo", studentPhoto);
            }

            setSubmitting(true);
            try {
                  await axios.post(`${API_BASE_URL}/students`, payload, {
                        headers: { "Content-Type": "multipart/form-data" },
                  });
                  sessionStorage.removeItem("student-register-draft");
                  // toast notification
                  showToast("Success", "Student registered successfully!", "success");

                  navigate("/dashboard/students");
            } catch (error) {
                  console.error("Failed to register student:", error);
                  if (error.response?.data?.errors) {
                        const messages = Object.values(error.response.data.errors).flat().join(" ");

                        setSubmitError(messages);
                  } else {

                        showToast("Error", "Something went wrong while saving. Please try again.", "error");
                        setSubmitError("Something went wrong while saving. Please try again.");
                  }
            } finally {
                  setSubmitting(false);
            }
      };

      return (
            <>
                  <h1 className="text-2xl font-medium text-slate-800">Review Student</h1>
                  <hr className="border-gray-300 my-2" />

                  {submitError && (
                        <p className="text-red-600 text-sm my-2">{submitError}</p>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                        <div className="flex flex-col gap-1">
                              <span className="text-gray-400 text-sm">Student ID</span>
                              <span className="text-slate-800 font-medium">{formData.student_id || "—"}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                              <span className="text-gray-400 text-sm">Name</span>
                              <span className="text-slate-800 font-medium">
                                    {[formData.first_name, formData.other_name, formData.surname].filter(Boolean).join(" ") || "—"}
                              </span>
                        </div>
                        <div className="flex flex-col gap-1">
                              <span className="text-gray-400 text-sm">Gender</span>
                              <span className="text-slate-800 font-medium">{formData.gender || "—"}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                              <span className="text-gray-400 text-sm">Parent/Guardian</span>
                              <span className="text-slate-800 font-medium">{formData.parent_guardian_name || "—"}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                              <span className="text-gray-400 text-sm">Status</span>
                              <span className="text-slate-800 font-medium">{formData.status || "—"}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                              <span className="text-gray-400 text-sm">Admission Date</span>
                              <span className="text-slate-800 font-medium">{formData.admission_date || "—"}</span>
                        </div>
                        <div className="flex flex-col gap-1 md:col-span-3">
                              <span className="text-gray-400 text-sm">Subjects</span>
                              <ul className="text-slate-800 font-medium">
                                    {formData.subjects.length
                                          ? formData.subjects.map((s) => (
                                                  <li key={s.subject_id}>✔ {s.subject_name}</li>
                                            ))
                                          : <li>—</li>}
                              </ul>
                        </div>
                  </div>

                  <div className="flex justify-between mt-6">
                        <button
                              type="button"
                              onClick={() => navigate("../subjects")}
                              className="bg-gray-200 text-gray-600 rounded-md px-4 py-2 font-medium"
                        >
                              Back
                        </button>
                        <button
                              type="button"
                              disabled={submitting}
                              onClick={handleSubmit}
                              className="bg-slate-900 disabled:opacity-50 text-white rounded-md px-4 py-2 font-medium"
                        >
                              {submitting ? "Saving..." : "Save Student"}
                        </button>
                  </div>
            </>
      )
}

export default Review
