import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import LoginImg from '../../assets/login_img.jpg';
import { AuthContext } from '../../AuthContext';

import { showToast } from '@/components/Toaster/Toaster';

const Login = () => {

      const { setUser } = useContext(AuthContext);

      const navigate = useNavigate();

      const [isLogin, setIsLogin] = useState(true);

      const [formData, setFormData] = useState({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
      });
      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
            });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                  const endpoint = isLogin
                        ? "http://localhost:8000/api/login"
                        : "http://localhost:8000/api/register";

                  const response = await axios.post(endpoint, formData);

                  if (response.data.status === 'success') {

                        showToast("Success", response.data.message, "success");

                        setFormData({
                              name: "",
                              email: "",
                              password: "",
                              password_confirmation: "",
                        });

                        if (response.data.token) {
                              localStorage.setItem("token", response.data.token);
                              localStorage.setItem("user", JSON.stringify(response.data.user));

                              setUser(response.data.user);
                              navigate('/dashboard', { redirect: true });
                        } else if (!response.data.token) {
                              navigate('/', { replace: true });
                        }
                  } else if (response.data.status === 'error') {
                        showToast("Error", response.data.message, "error");
                        
                  }
            } catch (error) {
                  showToast("Error", error.response.data.message || "Something went wrong", "error");
            }
      };

      return (
            <div className="flex items-center justify-center min-h-screen p-8">
                  <div
                        className={`grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-xl bg-white dark:bg-slate-900 dark:text-white md:grid-cols-2 shadow-md shadow-slate-800/10`}
                  >
                        {/* Form */}
                        <div className="flex grow items-center px-6 py-10 sm:px-10 sm:py-14 relative">
                            
                              <div className="grow">
                                    <div className="text-center">
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 49 40"
                                                fill="none"
                                                className="mb-6 inline-block w-10 text-blue-800"
                                          >
                                                <path
                                                      d="M37.3947 40C43.8275 39.8689 49 34.6073 49 28.1389C49 24.9931 47.7512 21.9762 45.5282 19.7518L25.7895 0V12.2771C25.7895 14.3303 26.6046 16.2995 28.0556 17.7514L32.6795 22.3784L32.6921 22.3907L40.4452 30.149C40.697 30.4009 40.697 30.8094 40.4452 31.0613C40.1935 31.3133 39.7852 31.3133 39.5335 31.0613L36.861 28.3871H12.139L9.46655 31.0613C9.21476 31.3133 8.80654 31.3133 8.55476 31.0613C8.30297 30.8094 8.30297 30.4009 8.55475 30.149L16.3079 22.3907L16.3205 22.3784L20.9444 17.7514C22.3954 16.2995 23.2105 14.3303 23.2105 12.2771V0L3.47175 19.7518C1.24882 21.9762 0 24.9931 0 28.1389C0 34.6073 5.17252 39.8689 11.6053 40H37.3947Z"
                                                      fill="skyblue"
                                                ></path>
                                          </svg>
                                          <h1 className="text-2xl font-extrabold">Welcome to MyEduApp</h1>
                                          <h2 className="mt-1 text-sm leading-relaxed text-zinc-600">
                                                {isLogin ? "Login to your account" : "Create a new account"}
                                          </h2>
                                    </div>
                                    <form className="mt-5 flex flex-col gap-5" onSubmit={handleSubmit}>
                                          {!isLogin && (
                                                <div className="space-y-2">
                                                      <label htmlFor="name" className="inline-block text-sm font-medium"
                                                      >Name</label
                                                      >
                                                      <input
                                                            id="name"
                                                            type="text"
                                                            name="name"
                                                            required
                                                            className="block w-full rounded-lg border border-blue-200 bg-white px-4 py-2.5 text-sm/6 font-medium placeholder-blue-500 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/50 focus:outline-hidden"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                      />
                                                </div>)}
                                          <div className="space-y-2">
                                                <label htmlFor="email" className="inline-block text-sm font-medium"
                                                >Email
                                                </label
                                                >
                                                <input
                                                      id="email"
                                                      type="email"
                                                      name="email"
                                                      required
                                                      className="block w-full rounded-lg border border-blue-200 bg-white px-4 py-2.5 text-sm/6 font-medium placeholder-blue-500 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/50 focus:outline-hidden"
                                                      value={formData.email}
                                                      onChange={handleChange}
                                                />
                                          </div>
                                          <div className="space-y-2">
                                                <label htmlFor="password" className="inline-block text-sm font-medium"
                                                >Password</label
                                                >
                                                <input
                                                      id="password"
                                                      type="password"
                                                      required
                                                      name="password"
                                                      className="block w-full rounded-lg border border-blue-200 bg-white px-4 py-2.5 text-sm/6 font-medium placeholder-blue-500 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/50 focus:outline-hidden"
                                                      value={formData.password}
                                                      onChange={handleChange}
                                                />
                                          </div>
                                          {!isLogin && (
                                                <div className="space-y-2">
                                                      <label htmlFor="confirmPassword" className="inline-block text-sm font-medium"
                                                      >Confirm Password</label
                                                      >
                                                      <input
                                                            id="confirmPassword"
                                                            type="password"
                                                            name="password_confirmation"
                                                            required
                                                            className="block w-full rounded-lg border border-blue-200 bg-white px-4 py-2.5 text-sm/6 font-medium placeholder-blue-500 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/50 focus:outline-hidden"
                                                            value={formData.password_confirmation}
                                                            onChange={handleChange}
                                                      />
                                                </div>)}

                                          <button
                                                type="submit"
                                                className="flex w-full items-center justify-center gap-2 rounded-lg border border-blue-800 bg-blue-800 px-4 py-3 text-sm leading-5 font-medium text-white hover:border-blue-900 hover:bg-blue-900 hover:text-white focus:ring-2 focus:ring-blue-500/50 focus:outline-hidden active:border-blue-700 active:bg-blue-700"
                                          >
                                                {isLogin ? "Log in" : "Register"}
                                          </button>
                                          <div className="text-center text-xs font-medium text-blue-500">
                                                {isLogin ? "Don't have an account yet? " : "Already have an account? "}

                                                <button
                                                      type="button"
                                                      className="text-zinc-800 underline decoration-zinc-300 underline-offset-2 hover:text-zinc-900 dark:text-white" onClick={() => setIsLogin(!isLogin)}
                                                >{isLogin ? "Register now" : "Log in"}</button
                                                >
                                          </div>
                                    </form>
                              </div>
                        </div>
                        {/* END Form */}

                        {/* Promo Image  */}
                        <img
                              src={LoginImg}
                              alt="Login Image"
                              className="aspect-video h-full w-full object-cover md:aspect-auto hidden md:block"
                        />
                        {/* END Promo Image */}
                  </div>
            </div>
      )
};

export default Login