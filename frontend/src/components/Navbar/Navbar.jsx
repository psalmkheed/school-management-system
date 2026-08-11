import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthContext'
import {
  LogOutIcon,
  Search,
  SettingsIcon,
  UserIcon,
} from "lucide-react"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import axios from 'axios';
import { Button } from '@base-ui/react';
import { showToast } from '../Toaster/Toaster';
import { AlertDialogue } from '../AlertDialogue';

const Navbar = () => {

  const { user, setUser } = useContext(AuthContext);

  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLogoutDialogOpen(false);
      const endpoint = "http://localhost:8000/api/logout";
      const response = await axios.post(endpoint, {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });

      if (response.headers) {
        localStorage.removeItem("token", response.data.token);
        localStorage.removeItem("user");
        setUser(null)
        showToast("Success", response.data.message, "success");
        navigate("/auth/login", { replace: true })
      }

    } catch (error) {
      showToast("Error", error.response?.data?.message || "Something went wrong", "error");
      console.error(error.response?.data);
    }

  }

  return (
    <nav className="bg-gray-100 text-slate-800 dark:bg-slate-900 dark:text-gray-300 max-h-17.5  p-4 w-full flex gap-5 items-center justify-between sticky inset-0 z-100">
      <div className="flex gap-3 items-center">
        <h2 className="text-xl font-bold">
          Welcome, {user?.role?.toLowerCase() === "admin"
            ? "Administrator"
            : (user?.name || "Guest")}
        </h2>
      </div>
      <div className="flex gap-5 items-center">
        <form className="gap-2 relative w-70 hidden md:flex">
          <input type="search" name="search_button" id="searchBtn" className="w-full border border-slate-300 rounded-2xl px-3 py-2 focus:shadow-md focus:outline-0 placeholder:font-medium placeholder:text-sm" placeholder="Search student..." />
          <Search className="absolute right-3 text-slate-500 size-4 -translate-y-1/2 top-1/2" />
        </form>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger render={
              <Button variant:outline="true" className="border border-gray-200 rounded-full p-2 size-12 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition duration-300 shadow-md">
                <UserIcon />
              </Button>
            } />
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer">
                <UserIcon />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/dashboard/school-settings")}>
                <SettingsIcon />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" className="cursor-pointer" onClick={() => setLogoutDialogOpen(true)}>
                <LogOutIcon />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialogue
            title="Confirm Logout"
            description="You will need to sign in again to access your account."
            actionFunction={handleLogout}
            actionText="Logout"
            open={logoutDialogOpen}
            onOpenChange={setLogoutDialogOpen}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar