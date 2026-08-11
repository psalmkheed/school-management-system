import {  ChevronLeft, ChevronRight, House } from 'lucide-react'

import { Link } from 'react-router-dom'

const Breadcrumb = ({ previousPage = "", currentPage = "" }) => {
      return (
            <div className="flex gap-4 flex-col items-start justify-between mb-4">
                  <div className="flex gap-4 items-center text-gray-500 text-sm">
                        <div className="">
                              <Link to="/dashboard" className="flex items-center gap-1 hover:text-gray-400"><House className="size-4" /> Dashboard</Link>
                        </div>
                        <ChevronRight className="size-6" />
                        <div className={`${currentPage ? 'text-gray-500' :'text-gray-400'}`}>
                              {currentPage ?
                                    (<Link to={`../${previousPage.toLocaleLowerCase()}`} className="hover:text-gray-400">
                                                {previousPage}
                                    </Link>) : previousPage  
                              }                                                
                        </div>
                        {currentPage && (<>
                              <ChevronRight className="size-6" />
                              <div className="text-gray-400">
                                    {currentPage}
                              </div>
                        </>
                        )}

                  </div>
                  <button className="hidden md:flex items-center bg-red-500 text-white py-1 px-2 rounded-md font-medium hover:bg-red-600 transition-all duration-300 text-sm" onClick={() => { window.history.back() }}><span><ChevronLeft className="size-6" /></span>Go Back</button>
            </div>
      )
}

export default Breadcrumb