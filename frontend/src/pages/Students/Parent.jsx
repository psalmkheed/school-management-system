import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

const Parent = () => {
      const { formData, setFormData } = useOutletContext();
      const navigate = useNavigate();

      const [mode, setMode] = useState(formData.parent_guardian_id ? "selected" : "search");
      const [query, setQuery] = useState("");
      const [results, setResults] = useState([]);
      const [searching, setSearching] = useState(false);
      const [searchError, setSearchError] = useState(null);

      const [newParent, setNewParent] = useState({
            full_name: "",
            phone: "",
            email: "",
            occupation: "",
            address: "",
      });
      const [errors, setErrors] = useState({});
      const [saving, setSaving] = useState(false);

      const handleSearch = async (e) => {
            e.preventDefault();
            if (!query.trim()) return;
            setSearching(true);
            setSearchError(null);
            try {
                  const response = await axios.get(`${API_BASE_URL}/parent-guardians`, {
                        params: { search: query.trim() },
                  });
                  setResults(response.data);
            } catch (error) {
                  console.error("Failed to search parents:", error);
                  setSearchError(error.response?.data?.message);
            } finally {
                  setSearching(false);
            }
      };

      const selectParent = (parent) => {
            setFormData({
                  ...formData,
                  parent_guardian_id: parent.id,
                  parent_guardian_name: parent.full_name,
            });
            setMode("selected");
      };

      const clearSelection = () => {
            setFormData({ ...formData, parent_guardian_id: "", parent_guardian_name: "" });
            setResults([]);
            setQuery("");
            setMode("search");
      };

      const handleNewParentChange = (e) => {
            setNewParent({ ...newParent, [e.target.name]: e.target.value });
      };

      const validateNewParent = () => {
            const nextErrors = {};
            if (!newParent.full_name.trim()) nextErrors.full_name = "Full name is required";
            if (!newParent.phone.trim()) {
                  nextErrors.phone = "Phone number is required";
            } else if (!/^[\d+\s-]{7,15}$/.test(newParent.phone.trim())) {
                  nextErrors.phone = "Enter a valid phone number";
            }
            if (newParent.email.trim() && !/^\S+@\S+\.\S+$/.test(newParent.email.trim())) {
                  nextErrors.email = "Enter a valid email address";
            }
            setErrors(nextErrors);
            return Object.keys(nextErrors).length === 0;
      };

      const handleCreateParent = async (e) => {
            e.preventDefault();
            if (!validateNewParent()) return;

            setSaving(true);
            try {
                  const response = await axios.post(`${API_BASE_URL}/parent-guardians`, newParent);
                  selectParent(response.data);
            } catch (error) {
                  console.error("Failed to create parent:", error);
                  setErrors({ form: error.response?.data?.message || "Failed to create parent. Please try again." });
            } finally {
                  setSaving(false);
            }
      };

      const handleNext = (e) => {
            e.preventDefault();
            if (!formData.parent_guardian_id) {
                  setSearchError("Select or add a parent/guardian before continuing.");
                  return;
            }
            navigate("../academic");
      };

      return (
            <>
                  <h1 className="text-2xl font-medium text-slate-800">Parent / Guardian</h1>
                  <hr className="border-gray-300 my-2" />

                  {mode === "selected" && (
                        <div className="my-4 flex items-center justify-between border border-gray-300 rounded-md p-3">
                              <span className="text-slate-800 font-medium">{formData.parent_guardian_name}</span>
                              <button
                                    type="button"
                                    onClick={clearSelection}
                                    className="text-blue-600 text-sm font-medium"
                              >
                                    Change
                              </button>
                        </div>
                  )}

                  {mode === "search" && (
                        <div className="my-4">
                              <form onSubmit={handleSearch} className="flex gap-2">
                                    <input
                                          type="text"
                                          value={query}
                                          onChange={(e) => setQuery(e.target.value)}
                                          className="border border-gray-300 rounded-md p-2 flex-1 focus:outline-0"
                                          placeholder="Search by phone or name"
                                    />
                                    <button
                                          type="submit"
                                          disabled={searching}
                                          className="bg-blue-600 disabled:opacity-50 text-white rounded-md px-4 py-2 font-medium"
                                    >
                                          {searching ? "Searching..." : "Search"}
                                    </button>
                              </form>

                              {searchError && <p className="text-red-600 text-sm mt-2">{searchError}</p>}

                              {results.length > 0 && (
                                    <ul className="mt-3 divide-y divide-gray-200 border border-gray-300 rounded-md">
                                          {results.map((parent) => (
                                                <li key={parent.id} className="flex items-center justify-between p-3">
                                                      <div>
                                                            <p className="text-slate-800 font-medium">{parent.full_name}</p>
                                                            <p className="text-gray-400 text-sm">{parent.phone}</p>
                                                      </div>
                                                      <button
                                                            type="button"
                                                            onClick={() => selectParent(parent)}
                                                            className="bg-blue-600 text-white rounded-md px-3 py-1 text-sm font-medium"
                                                      >
                                                            Select
                                                      </button>
                                                </li>
                                          ))}
                                    </ul>
                              )}

                              <div className="text-center text-gray-400 my-4">— OR —</div>

                              <h2 className="text-slate-800 font-medium mb-2">Add New Parent</h2>
                              {errors.form && <p className="text-red-600 text-sm mb-2">{errors.form}</p>}

                              <form onSubmit={handleCreateParent} className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                          <label htmlFor="full_name" className="text-gray-500">Full Name<span className="text-red-600">*</span></label>
                                          <input
                                                type="text"
                                                name="full_name"
                                                id="full_name"
                                                value={newParent.full_name}
                                                onChange={handleNewParentChange}
                                                className={`border rounded-md p-2 focus:outline-0 ${errors.full_name ? "border-red-500" : "border-gray-300"}`}
                                          />
                                          {errors.full_name && <span className="text-red-600 text-sm">{errors.full_name}</span>}
                                    </div>

                                    <div className="flex flex-col gap-2">
                                          <label htmlFor="phone" className="text-gray-500">Phone Number<span className="text-red-600">*</span></label>
                                          <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                value={newParent.phone}
                                                onChange={handleNewParentChange}
                                                className={`border rounded-md p-2 focus:outline-0 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                                          />
                                          {errors.phone && <span className="text-red-600 text-sm">{errors.phone}</span>}
                                    </div>

                                    <div className="flex flex-col gap-2">
                                          <label htmlFor="email" className="text-gray-500">Email</label>
                                          <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={newParent.email}
                                                onChange={handleNewParentChange}
                                                className={`border rounded-md p-2 focus:outline-0 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                                          />
                                          {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
                                    </div>

                                    <div className="flex flex-col gap-2">
                                          <label htmlFor="occupation" className="text-gray-500">Occupation</label>
                                          <input
                                                type="text"
                                                name="occupation"
                                                id="occupation"
                                                value={newParent.occupation}
                                                onChange={handleNewParentChange}
                                                className="border border-gray-300 rounded-md p-2 focus:outline-0"
                                          />
                                    </div>

                                    <div className="flex flex-col gap-2 col-span-2">
                                          <label htmlFor="address" className="text-gray-500">Address</label>
                                          <textarea
                                                name="address"
                                                id="address"
                                                value={newParent.address}
                                                onChange={handleNewParentChange}
                                                rows={2}
                                                className="border border-gray-300 rounded-md p-2 focus:outline-0"
                                          />
                                    </div>

                                    <div className="col-span-2 flex justify-end">
                                          <button
                                                type="submit"
                                                disabled={saving}
                                                className="bg-blue-600 disabled:opacity-50 text-white rounded-md px-4 py-2 font-medium"
                                          >
                                                {saving ? "Saving..." : "+ Add New Parent"}
                                          </button>
                                    </div>
                              </form>
                        </div>
                  )}

                  <div className="flex justify-between mt-6">
                        <button
                              type="button"
                              onClick={() => navigate("../personal")}
                              className="bg-gray-200 text-gray-600 rounded-md px-4 py-2 font-medium"
                        >
                              Back
                        </button>
                        <button
                              type="button"
                              onClick={handleNext}
                              className="bg-blue-600 text-white rounded-md px-4 py-2 font-medium"
                        >
                              Next: Academic
                        </button>
                  </div>
            </>
      )
}

export default Parent
