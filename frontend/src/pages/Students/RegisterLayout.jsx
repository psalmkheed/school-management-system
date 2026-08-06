import { NavLink, Outlet, useParams } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import { useEffect, useState } from "react"


const tabs = [
      { text: "Personal", path: "personal" },
      { text: "Parent", path: "parent" },
      { text: "Academic", path: "academic" },
      { text: "Subjects", path: "subjects" },
      { text: "Review", path: "review" },
]

const DRAFT_KEY = "student-register-draft";

const defaultFormData = {
      // personal
      student_id: "",
      surname: "",
      first_name: "",
      other_name: "",
      gender: "",
      date_of_birth: "",
      nationality: "",
      state_of_origin: "",
      address: "",
      // parent (parent_guardian_name is display-only, not sent to the backend)
      parent_guardian_id: "",
      parent_guardian_name: "",
      // academic / enrollment
      academic_session_id: "",
      term_id: "",
      school_class_id: "",
      department_id: "",
      status: "Active",
      admission_date: "",
      // subjects — array of subject IDs (compulsory + any selected optional)
      subjects: [],
}

const loadDraft = () => {
      try {
            const saved = sessionStorage.getItem(DRAFT_KEY);
            return saved ? { ...defaultFormData, ...JSON.parse(saved) } : defaultFormData;
      } catch (error) {
            console.error("Failed to read saved draft:", error);
            return defaultFormData;
      }
};

const RegisterLayout = () => {
      const { id } = useParams();

      const isEdit = Boolean(id);

      console.log(id);      // "3"
      console.log(isEdit);  // true
      // All wizard fields live in one object, shared across every tab via context.
      // Hydrated from sessionStorage so a refresh mid-way doesn't wipe progress.
      const [formData, setFormData] = useState(loadDraft);
      // studentPhoto is a File — can't be serialized to sessionStorage, so it
      // intentionally does NOT persist across a refresh; the user re-picks it if needed.
      const [studentPhoto, setStudentPhoto] = useState(null);

      useEffect(() => {
            try {
                  sessionStorage.setItem(DRAFT_KEY, JSON.stringify(formData));
            } catch (error) {
                  console.error("Failed to save draft:", error);
            }
      }, [formData]);

      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
            });
      };

      return (
            <div className="px-4 py-2">
                  <Breadcrumb previousPage="Students" currentPage="Register" />
                  <div className="dark:bg-gray-900 border min-h-screen rounded-md border-gray-300 p-4">
                        <div className="grid grid-cols-5 gap-5">
                              {tabs.map(({ text, path }) => (
                                    <NavLink
                                          key={path}
                                          to={path}
                                          className={({ isActive }) =>
                                                `rounded-md p-2 font-medium text-center ${
                                                      isActive
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-gray-200 text-gray-400"
                                                }`
                                          }
                                    >
                                          {text}
                                    </NavLink>
                              ))}
                        </div>

                        <div className="my-4">
                              <Outlet
                                    context={{
                                          formData,
                                          setFormData,
                                          handleChange,
                                          studentPhoto,
                                          setStudentPhoto,
                                    }}
                              />
                        </div>
                  </div>
            </div>
      )
}

export default RegisterLayout
