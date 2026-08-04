import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from "react-router-dom"
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

const Subjects = () => {
      const { formData, setFormData } = useOutletContext();
      const navigate = useNavigate();

      const [classSubjects, setClassSubjects] = useState([]);
      const [loading, setLoading] = useState(false);
      const [loadError, setLoadError] = useState(null);
      const [submitError, setSubmitError] = useState(null);

      useEffect(() => {
            if (!formData.school_class_id) {
                  setClassSubjects([]);
                  return;
            }

            setLoading(true);
            setLoadError(null);

            axios.get(`${API_BASE_URL}/class-subjects`, {
                  params: {
                        school_class_id: formData.school_class_id,
                        department_id: formData.department_id || undefined,
                  },
            })
                  .then((response) => {
                        const data = response.data.filter((cs) => cs.subject);
                        if (data.length !== response.data.length) {
                              console.warn("Some class-subject rows were missing their subject relation and were skipped.");
                        }
                        setClassSubjects(data);

                        // Compulsory subjects are always included; reset selection to
                        // exactly the compulsory set whenever the class/department changes,
                        // since a previous class's optional picks no longer apply.
                        const compulsorySubjects = data
                              .filter((cs) => cs.is_compulsory)
                              .map((cs) => ({ subject_id: cs.subject_id, subject_name: cs.subject.subject_name }));

                        setFormData((prev) => ({ ...prev, subjects: compulsorySubjects }));
                  })
                  .catch((error) => {
                        console.error("Failed to load class subjects:", error);
                        setLoadError("Couldn't load subjects for this class/department.");
                  })
                  .finally(() => setLoading(false));
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [formData.school_class_id, formData.department_id]);

      const toggleOptional = (subject) => {
            const isSelected = formData.subjects.some((s) => s.subject_id === subject.subject_id);
            setFormData({
                  ...formData,
                  subjects: isSelected
                        ? formData.subjects.filter((s) => s.subject_id !== subject.subject_id)
                        : [...formData.subjects, { subject_id: subject.subject_id, subject_name: subject.subject.subject_name }],
            });
      };

      const handleNext = (e) => {
            e.preventDefault();
            if (formData.subjects.length === 0) {
                  setSubmitError("Select at least one subject before continuing.");
                  return;
            }
            navigate("../review");
      };

      const compulsory = classSubjects.filter((cs) => cs.is_compulsory);
      const optional = classSubjects.filter((cs) => !cs.is_compulsory);

      return (
            <>
                  <h1 className="text-2xl font-medium text-slate-800">Select Subjects</h1>
                  <hr className="border-gray-300 my-2" />

                  {!formData.school_class_id && (
                        <p className="text-gray-500 my-4">Select a class on the Academic tab first.</p>
                  )}
                  {loadError && <p className="text-red-600 text-sm my-2">{loadError}</p>}
                  {submitError && <p className="text-red-600 text-sm my-2">{submitError}</p>}
                  {loading && <p className="text-gray-400 my-2">Loading subjects...</p>}

                  {!loading && classSubjects.length > 0 && (
                        <form onSubmit={handleNext} className="my-4">
                              {compulsory.length > 0 && (
                                    <div className="mb-4">
                                          <h2 className="text-gray-500 text-sm mb-2">Compulsory</h2>
                                          <div className="grid grid-cols-3 gap-2">
                                                {compulsory.map((cs) => (
                                                      <label key={cs.subject_id} className="flex items-center gap-2 text-slate-800">
                                                            <input type="checkbox" checked disabled />
                                                            {cs.subject.subject_name}
                                                      </label>
                                                ))}
                                          </div>
                                    </div>
                              )}

                              {optional.length > 0 && (
                                    <div className="mb-4">
                                          <h2 className="text-gray-500 text-sm mb-2">Optional</h2>
                                          <div className="grid grid-cols-3 gap-2">
                                                {optional.map((cs) => (
                                                      <label key={cs.subject_id} className="flex items-center gap-2 text-gray-600">
                                                            <input
                                                                  type="checkbox"
                                                                  checked={formData.subjects.some((s) => s.subject_id === cs.subject_id)}
                                                                  onChange={() => toggleOptional(cs)}
                                                            />
                                                            {cs.subject.subject_name}
                                                      </label>
                                                ))}
                                          </div>
                                    </div>
                              )}

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
                                          className="bg-blue-600 text-white rounded-md px-4 py-2 font-medium"
                                    >
                                          Next: Review
                                    </button>
                              </div>
                        </form>
                  )}

                  {!loading && formData.school_class_id && classSubjects.length === 0 && !loadError && (
                        <p className="text-gray-500 my-4">
                              No subjects are assigned to this class/department combination yet.
                        </p>
                  )}
            </>
      )
}

export default Subjects
