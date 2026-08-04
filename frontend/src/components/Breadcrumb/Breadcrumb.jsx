import { ArrowLeft, ChevronRight, House } from 'lucide-react'

import { Link } from 'react-router-dom'

const Breadcrumb = ({ previousPage = "", currentPage = "" }) => {
      return (
            <>
                  <div className="flex gap-4 items-center text-gray-500 mb-4">
                        <div className="">
                              <Link to="/dashboard" className="flex items-center gap-1"><House className="size-5" /> Dashboard</Link>
                        </div>
                        <ChevronRight className="size-6" />
                        <div className={`${currentPage ? 'text-gray-500' :'text-gray-400'}`}>
                              {currentPage ?
                                          (<Link to={`../${previousPage.toLocaleLowerCase()}`}>
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
                  <button className="hidden md:flex bg-red-600 text-white py-2 px-4 rounded-md mb-4 font-bold hover:bg-red-700 transition-all duration-300 group" onClick={() => { window.history.back() }}><span><ArrowLeft className="mr-2 hidden group-hover:block" /></span>Back</button>
            </>
      )
}

export default Breadcrumb