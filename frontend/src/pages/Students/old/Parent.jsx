import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"

const Parent = () => {
      const { formData, handleChange } = useOutletContext();
      const navigate = useNavigate();
      const [errors, setErrors] = useState({});

      const validate = () => {
            const nextErrors = {};
            if (!formData.parent_name.trim()) nextErrors.parent_name = "Full name is required";
            if (!formData.parent_phone.trim()) {
                  nextErrors.parent_phone = "Phone number is required";
            } else if (!formData.occupation.trim()) {
                  nextErrors.occupation = "Occupation is required";
            } else if (!formData.address.trim()) {
                  nextErrors.address = "Address is required";
            } 
            else if (!/^[\d+\s-]{7,15}$/.test(formData.parent_phone.trim())) {
                  nextErrors.parent_phone = "Enter a valid phone number";
            }
            if (formData.parent_email.trim() && !/^\S+@\S+\.\S+$/.test(formData.parent_email.trim())) {
                  nextErrors.parent_email = "Enter a valid email address";
            }
            setErrors(nextErrors);
            return Object.keys(nextErrors).length === 0;
      };

      const handleNext = (e) => {
            e.preventDefault();
            if (validate()) navigate("../academic");
      };

      return (
            <>
                  <h1 className="text-2xl font-medium text-slate-800">Parent / Guardian Information</h1>
                  <hr className="border-gray-300 my-2" />

                  <form onSubmit={handleNext} className="my-4 grid grid-cols-3 gap-4">
                        <div className="flex flex-col gap-2">
                              <label htmlFor="parent_name" className="text-gray-500">Full Name<span className="text-red-600">*</span></label>
                              <input
                                    type="text"
                                    name="parent_name"
                                    id="parent_name"
                                    value={formData.parent_name}
                                    onChange={handleChange}
                                    className={`border rounded-md p-2 focus:outline-0 placeholder:text-gray-300 ${
                                          errors.parent_name ? "border-red-500" : "border-gray-300"
                                    }`}
                                    placeholder="Jane Doe"
                              />
                              {errors.parent_name && <span className="text-red-600 text-sm">{errors.parent_name}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                              <label htmlFor="relationship" className="text-gray-500">Relationship</label>
                              <select
                                    name="relationship"
                                    id="relationship"
                                    value={formData.relationship}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-0 placeholder:text-gray-300"
                              >
                                    <option value="">Select</option>
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Guardian">Guardian</option>
                              </select>
                        </div>

                        <div className="flex flex-col gap-2">
                              <label htmlFor="parent_phone" className="text-gray-500">Phone Number<span className="text-red-600">*</span></label>
                              <input
                                    type="tel"
                                    name="parent_phone"
                                    id="parent_phone"
                                    value={formData.parent_phone}
                                    onChange={handleChange}
                                    className={`border rounded-md p-2 focus:outline-0 placeholder:text-gray-300 ${
                                          errors.parent_phone ? "border-red-500" : "border-gray-300"
                                    }`}
                                    placeholder="080..."
                              />
                              {errors.parent_phone && <span className="text-red-600 text-sm">{errors.parent_phone}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                              <label htmlFor="parent_email" className="text-gray-500">Email</label>
                              <input
                                    type="email"
                                    name="parent_email"
                                    id="parent_email"
                                    value={formData.parent_email}
                                    onChange={handleChange}
                                    className={`border rounded-md p-2 focus:outline-0 placeholder:text-gray-300 ${
                                          errors.parent_email ? "border-red-500" : "border-gray-300"
                                    }`}
                                    placeholder="jane@example.com"
                              />
                              {errors.parent_email && <span className="text-red-600 text-sm">{errors.parent_email}</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                              <label htmlFor="occupation" className="text-gray-500">Occupation</label>
                              <input
                                    type="text"
                                    name="occupation"
                                    id="occupation"
                                    value={formData.occupation}
                                    onChange={handleChange}
                                    className={`border rounded-md p-2 focus:outline-0 placeholder:text-gray-300 ${
                                          errors.occupation ? "border-red-500" : "border-gray-300"
                                    }`}
                                    placeholder="Banker"
                              />
                              {errors.occupation && <span className="text-red-600 text-sm">{errors.occupation}</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                              <label htmlFor="address" className="text-gray-500">Address</label>
                              <input
                                    type="address"
                                    name="address"
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className={`border rounded-md p-2 focus:outline-0 placeholder:text-gray-300 ${
                                          errors.address ? "border-red-500" : "border-gray-300"
                                    }`}
                                    placeholder="14, Ifelodun street, Idimu..."
                              />
                              {errors.address && <span className="text-red-600 text-sm">{errors.address}</span>}
                        </div>

                        <div className="col-span-3 flex justify-between">
                              <button
                                    type="button"
                                    onClick={() => navigate("../personal")}
                                    className="bg-gray-200 text-gray-600 rounded-md px-4 py-2 font-medium"
                              >
                                    Back
                              </button>
                              <button
                                    type="submit"
                                    className="bg-blue-600 text-white rounded-md px-4 py-2 font-medium"
                              >
                                    Next: Academic
                              </button>
                        </div>
                  </form>
            </>
      )
}

export default Parent
