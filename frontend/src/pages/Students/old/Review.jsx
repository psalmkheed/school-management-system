import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

const fieldLabels = {
      student_id: "Student ID",
      surname: "Surname",
      first_name: "First Name",
      other_name: "Other Name",
      gender: "Gender",
      date_of_birth: "Date of Birth",
      nationality: "Nationality",
      state_of_origin: "State of Origin",
      parent_name: "Parent/Guardian",
      relationship: "Relationship",
      parent_phone: "Parent Phone",
      parent_email: "Parent Email",
      admission_class: "Class",
      admission_date: "Admission Date",
      previous_school: "Previous School",
}

const Review = () => {
      const { formData, studentPhoto } = useOutletContext();
      const navigate = useNavigate();
      const [submitting, setSubmitting] = useState(false);
      const [submitError, setSubmitError] = useState(null);

      const handleSubmit = async () => {
            setSubmitError(null);

            const payload = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                  if (Array.isArray(value)) {
                        value.forEach((item) => payload.append(`${key}[]`, item));
                  } else {
                        payload.append(key, value);
                  }
            });
            if (studentPhoto) {
                  payload.append("student_photo", studentPhoto);
            }

            setSubmitting(true);
            try {
                  await axios.post(`${API_BASE_URL}/students`, payload, {
                        headers: { "Content-Type": "multipart/form-data" },
                  });
                  sessionStorage.removeItem("student-register-draft");
                  navigate("/dashboard/students");
            } catch (error) {
                  console.error("Failed to register student:", error);
                  setSubmitError("Something went wrong while saving. Please try again.");
            } finally {
                  setSubmitting(false);
            }
      };

      return (
            <>
                  <h1 className="text-2xl font-medium text-slate-800">Review & Submit</h1>
                  <hr className="border-gray-300 my-2" />

                  {submitError && (
                        <p className="text-red-600 text-sm my-2">{submitError}</p>
                  )}

                  <div className="grid grid-cols-3 gap-4 my-4">
                        {Object.entries(fieldLabels).map(([key, label]) => (
                              <div key={key} className="flex flex-col gap-1">
                                    <span className="text-gray-400 text-sm">{label}</span>
                                    <span className="text-slate-800 font-medium">{formData[key] || "—"}</span>
                              </div>
                        ))}
                        <div className="flex flex-col gap-1 col-span-3">
                              <span className="text-gray-400 text-sm">Subjects</span>
                              <span className="text-slate-800 font-medium">
                                    {formData.subjects.length ? formData.subjects.join(", ") : "—"}
                              </span>
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
                              className="bg-blue-600 disabled:opacity-50 text-white rounded-md px-4 py-2 font-medium"
                        >
                              {submitting ? "Saving..." : "Submit Registration"}
                        </button>
                  </div>
            </>
      )
}

export default Review
