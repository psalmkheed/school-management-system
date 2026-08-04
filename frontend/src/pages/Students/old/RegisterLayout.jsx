import { NavLink, Outlet } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import { useEffect, useState } from "react"

const tabs = [
      { id: 1, text: "Personal", path: "personal" },
      { id: 2, text: "Parent", path: "parent" },
      { id: 3, text: "Academic", path: "academic" },
      { id: 4, text: "Subjects", path: "subjects" },
      { id: 5, text: "Review", path: "review" },
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
      // parent
      parent_name: "",
      parent_phone: "",
      parent_email: "",
      relationship: "",
      occupation: "",
      address: "",
      // academic
      admission_class: "",
      admission_date: "",
      previous_school: "",
      // subjects
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

      const [formData, setFormData] = useState(loadDraft);
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
                              {tabs.map(({ id, text, path }) => (
                                    <NavLink
                                          key={id}
                                          to={path}
                                          className={({ isActive }) =>
                                                `rounded-md p-2 text-center font-medium transition-colors ${isActive
                                                      ? "bg-blue-600 text-white"
                                                      : "bg-gray-200 text-gray-500 hover:bg-gray-300"
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
