import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { useParams} from "react-router-dom";

const ViewStudent = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <div className="text-slate-700 min-h-screen px-4 py-2">
      <Breadcrumb />

    </div>
  )
}

export default ViewStudent