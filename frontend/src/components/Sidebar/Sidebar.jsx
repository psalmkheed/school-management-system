// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import {User, LayoutDashboard, Landmark, ShelvingUnit, Menu, Cog, Book} from "lucide-react"
import { useState } from 'react';
import { BsDatabaseFillAdd } from 'react-icons/bs';
const Sidebar = () => {

      const [openMenu, setMenu] = useState(false);

      const sidebarItems = [
            { id: 1, label: 'Dashboard', link: "/", icon: LayoutDashboard },
            { id: 2, label: "Students", link: "/students", icon: BsDatabaseFillAdd },
            { id: 3, label: "Staff", link: "/staff", icon: User },
            { id: 4, label: "Academics", link: "/academic", icon: Book },
            { id: 5, label: "Finance", link: "/finance", icon:  Landmark },
            { id: 6, label: "Inventory", link: "/inventory", icon:  ShelvingUnit },
            { id: 7, label: "School Settings", link: "/school-settings", icon:  Cog },
      ]

      return (
            <div className={`md:min-h-screen flex flex-col justify-center md:justify-start bg-slate-900 px-4 fixed top-0 w-full md:w-[250px] left-0 z-10 md:py-0 md:mb-0 ${openMenu ? "pb-4": "pb-0"}`}>
                  {/* Brand name / icon */}
                  <div className="flex justify-between items-center">
                  <div className="text-lg font-bold my-4 flex gap-2 items-center">
                        <div className="">
                              {/* <img src={ReactLogo} className="size-10" /> */}
                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 49 40"
                                    fill="none"
                                    className="inline-block w-10"
                              >
                                    <path
                                          d="M37.3947 40C43.8275 39.8689 49 34.6073 49 28.1389C49 24.9931 47.7512 21.9762 45.5282 19.7518L25.7895 0V12.2771C25.7895 14.3303 26.6046 16.2995 28.0556 17.7514L32.6795 22.3784L32.6921 22.3907L40.4452 30.149C40.697 30.4009 40.697 30.8094 40.4452 31.0613C40.1935 31.3133 39.7852 31.3133 39.5335 31.0613L36.861 28.3871H12.139L9.46655 31.0613C9.21476 31.3133 8.80654 31.3133 8.55476 31.0613C8.30297 30.8094 8.30297 30.4009 8.55475 30.149L16.3079 22.3907L16.3205 22.3784L20.9444 17.7514C22.3954 16.2995 23.2105 14.3303 23.2105 12.2771V0L3.47175 19.7518C1.24882 21.9762 0 24.9931 0 28.1389C0 34.6073 5.17252 39.8689 11.6053 40H37.3947Z"
                                          fill="skyblue"
                                    ></path>
                              </svg>
                        </div>
                        <div className="flex flex-col gap-0">
                              <h2 className="text-slate-200">
                                    Student Management
                              </h2>
                              <span className="text-[10px] text-stone-200 italic">
                                    We Design SYSTEMS that work
                              </span>
                        </div>
                  </div>

                  <Menu className={`text-white size-8 md:hidden cursor-pointer`} onClick={()=>{setMenu(!openMenu)}}/>

                  </div>

                  <hr className='mb-4 border-slate-700 hidden md:flex'/>
                  {/* list items */}
                  <ul className={`flex flex-col gap-4 ${openMenu ? "flex":"hidden"} md:flex`}>
                        {sidebarItems.map(({ id, label, link, icon: Icon }) => (
                              <li
                                    key={id}
                                    className="w-full " onClick={() => { { setMenu(!openMenu) } }}
                              >
                                    <NavLink to={`/dashboard${link}`}
                                          className="w-full px-4 py-2 text-stone-200 hover:bg-slate-900 hover:text-green-200 transition-all duration-200 flex items-center gap-2 border border-slate-700 bg-slate-800 rounded-md text-sm">
                                    
                                          <Icon className="w-5 h-5 text-stone-200" />
                                          {label}
                              
                                    </NavLink>

                                    
                              </li>
                        ))}
                  </ul>
            </div>
      )
}

export default Sidebar