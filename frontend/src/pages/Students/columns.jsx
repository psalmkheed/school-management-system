import { Eye, UserCircle } from "lucide-react";
import { BiEdit } from "react-icons/bi";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

export const getColumns = (editStudent, viewStudent) => [
      {
            id: "number",
            header: "#",
            enableSorting: false,
            cell: ({ row, table }) => {
                  const { pageIndex, pageSize } = table.getState().pagination;
                  return pageIndex * pageSize + row.index + 1;
            },
      },

      {
            accessorKey: "full_name",
            header: "Student Name",
            enableSorting: true,

            cell: ({ row }) => {
                  const student = row.original;

                  const formatName = (student) => {
                        const parts = [
                              student.first_name,
                              student.other_name,
                              student.surname,
                        ].filter(Boolean);

                        if (parts.length === 0) return "—";

                        return parts
                              .map(
                                    (part) =>
                                          part.charAt(0).toUpperCase() + part.slice(1)
                              )
                              .join(" ");
                  };

                  return (
                        <div className="flex items-center gap-2">
                              {student.photo ? (
                                    <img
                                          src={`${API_BASE_URL.replace("/api", "")}/storage/${student.photo}`}
                                          alt={formatName(student)}
                                          className="size-8 rounded-full object-cover"
                                    />
                              ) : (
                                    <div className="size-8 rounded-full flex items-center justify-center">
                                          <UserCircle className="size-8 text-gray-300" />
                                    </div>
                              )}

                              <span>{formatName(student)}</span>
                        </div>
                  );
            },
      },

      {
            accessorKey: "student_id",
            header: "Student ID",
            enableSorting: true,
            cell: ({ row }) => row.original.student_id ?? "—",
      },

      {
            accessorKey: "gender",
            header: "Gender",
            enableSorting: true,
            cell: ({ row }) => row.original.gender ?? "—",
      },

      {
            accessorKey: "date_of_birth",
            header: "DOB",
            cell: ({ row }) => row.original.date_of_birth ?? "—",
      },

      {
            accessorKey: "state_of_origin",
            header: "State of Origin",
            enableSorting: true,
            cell: ({ row }) => row.original.state_of_origin ?? "—",
      },
      {
            accessorKey: "class",
            header: "Class",
            enableSorting: true,
            cell: ({ row }) => row.original.enrollments?.[0]?.school_class?.class_name ?? "N/A"
      },

      {
            accessorKey: "status",
            header: "Status",
            enableSorting: true,
            cell: ({ row }) => row.original.status ?? "—",
      },

      {
            id: "actions",
            header: "Actions",
            enableSorting: false,

            cell: ({ row }) => {
                  const student = row.original;

                  return (
                        <div className="flex gap-4 items-center">
                              <BiEdit
                                    className="size-4 text-blue-600 cursor-pointer"
                                    onClick={() => {
                                          editStudent(student);
                                    }}
                              />

                              <Eye
                                    className="size-4 text-orange-600 cursor-pointer"
                                    onClick={() => {
                                          viewStudent(student);
                                    }}
                              />
                        </div>
                  );
            },
      },
];