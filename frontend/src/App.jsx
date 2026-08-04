
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login'
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Students from "./pages/Students/Students";
import Staff from "./pages/Staff/Staff";
import Inventory from "./pages/Inventory/Inventory";
import Finance from "./pages/Finance/Finance";
import DashboardElement from "./pages/Dashboard/DashboardElement";
import SchoolSettings from "./pages/SchoolSettings/SchoolSettings";
import Academics from "./pages/Academic/Academic";

import RegisterLayout from "./pages/Students/RegisterLayout"
import Personal from "./pages/Students/Personal"
import Parent from "./pages/Students/Parent"
import Academic from "./pages/Students/Academic"
import Subjects from "./pages/Students/Subjects"
import Review from "./pages/Students/Review"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardElement />} />
          <Route path="students" element={<Students />} />
          <Route path="students/register/" element={<RegisterLayout />}>
            <Route index element={<Personal />} />
            <Route path="personal" element={<Personal />} />
            <Route path="parent" element={<Parent />} />
            <Route path="academic" element={<Academic />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="staff" element={<Staff />} />
          <Route path="finance" element={<Finance />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="academic" element={<Academics/>} />
          <Route path="school-settings" element={<SchoolSettings />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
