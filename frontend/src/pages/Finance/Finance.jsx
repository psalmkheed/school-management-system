import { Plus } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";


const Finance = () => {

  const addFeeCategory = ()=>{
    alert("Add fee category");
  }
  return (
    <div className="text-slate-700 min-h-screen px-4 py-2">
      <div className="">
        <Breadcrumb previousPage="Finance"/>
        <div className='mb-6 border p-4 rounded-md bg-slate-800 flex items-center justify-between'>
          <div>
            <h1 className='text-2xl text-white font-bold'>Finance</h1>
            <p className="text-sm text-gray-200">Record finance and generate bills</p>
          </div>
          <button className="bg-slate-100 rounded-md px-2 py-1 font-medium hover:bg-slate-300 transition duration-300 flex gap-1 text-sm items-center" onClick={() => { addFeeCategory() }}><Plus className="size-4" />Add Fee Category</button>
        </div>
      </div>
    </div>
  )
}

export default Finance