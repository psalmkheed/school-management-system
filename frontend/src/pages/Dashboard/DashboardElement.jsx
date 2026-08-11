import { CalendarArrowDown, CalendarArrowUp, User, UserCircle } from "lucide-react"

const DashboardElement = () => {

      const gridCards = [
            { id: 1, title: "Total Students", icon: User, count: 14, color: "blue" },
            { id: 2, title: "Total Staff", icon: UserCircle, count: 12, color: "violet" },
            { id: 3, title: "Present", icon: CalendarArrowDown, count: 24, color: "green" },
            { id: 4, title: "Absent", icon: CalendarArrowUp, count: 10, color: "red" },

      ]

      const borderColors = {
            red: "border-t-red-600 bg-red-50",
            violet: "border-t-violet-600 bg-violet-50",
            green: "border-t-green-600 bg-green-50",
            blue: "border-t-blue-600 bg-blue-50",
      };
      const textColors = {
            red: "text-red-600",
            violet: "text-violet-600",
            green: "text-green-600",
            blue: "text-blue-600",
      };
      const iconBgColors = {
            red: "bg-red-600 border border-red-200",
            violet: "bg-violet-600 border border-violet-200",
            green: "bg-green-600 border border-green-200",
            blue: "bg-blue-600 border border-blue-200",
      };
      return (
            <div className="text-slate-700 min-h-screen px-4 py-2 dark:text-gray-300">
                  <div className="flex flex-col gap-1">
                        <h1 className="text-xl font-bold">Dashboard Overview</h1>
                        <p className="text-sm">
                              Monitor hostel attendance and student activities.
                        </p>
                        {/* cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-4">
                              {gridCards.map(({ id, title, icon: Icon, count, color }) => {
                                    const borderClass = borderColors[color] || "border-t-gray-500";
                                    const textClass = textColors[color] || "border-t-gray-500";
                                    const iconBgClass = iconBgColors[color] || "bg-gray-200";
                                    return (
                                          <div className={`p-4 flex justify-between rounded-md shadow-sm  gap-3 border-t-2 h-36 items-center ${borderClass}`} key={id}>
                                                <div className="text-start">
                                                      <h2 className="font-bold">{title}</h2>
                                                      <p className={`${textClass} font-bold text-4xl`}>{count}</p>
                                                </div>
                                                <div className={`rounded-full ${iconBgClass} p-2`}>
                                                      <Icon className={`size-6 text-white`} />
                                                </div>

                                          </div>
                                    )

                              })}

                        </div>
                  </div>
                  <div className="">
                        <h1 className="text-xl font-bold">Recent Activities</h1>
                        <div className="h-48 rounded-md shadow-sm my-4 bg-gray-100 border border-gray-200 p-4"> </div>
                  </div>
            </div>
      )
}

export default DashboardElement