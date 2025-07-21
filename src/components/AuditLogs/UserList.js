import React, { useEffect, useState } from "react";
import api from "../../services/api.js";
import { DataGrid } from "@mui/x-data-grid";
import toast from "react-hot-toast";
import { Blocks } from "react-loader-spinner";
import Errors from "../Errors.js";
import moment from "moment";
import { Link } from "react-router-dom";
import { MdOutlineEmail, MdDateRange } from "react-icons/md";

// Columns for MUI DataGrid
export const userListsColumns = [
  {
    field: "username",
    headerName: "UserName",
    minWidth: 200,
    headerAlign: "center",
    disableColumnMenu: true,
    align: "center",
    editable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: () => <span className="text-center">UserName</span>,
  },
  {
    field: "email",
    headerName: "Email",
    width: 260,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader: () => <span>Email</span>,
    renderCell: (params) => (
      <div className="flex items-center justify-center gap-1">
        <MdOutlineEmail className="text-slate-700 text-lg" />
        <span>{params?.row?.email}</span>
      </div>
    ),
  },
  {
    field: "created",
    headerName: "Created At",
    headerAlign: "center",
    width: 220,
    align: "center",
    disableColumnMenu: true,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: () => <span>Created At</span>,
    renderCell: (params) => (
      <div className="flex justify-center items-center gap-1">
        <MdDateRange className="text-slate-700 text-lg" />
        <span>{params?.row?.created}</span>
      </div>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    headerAlign: "center",
    align: "center",
    width: 200,
    disableColumnMenu: true,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: () => <span className="ps-10">Status</span>,
  },
  {
    field: "action",
    headerName: "Action",
    headerAlign: "center",
    sortable: false,
    width: 200,
    headerClassName: "text-black font-semibold",
    cellClassName: "text-slate-700 font-normal",
    renderHeader: () => <span>Action</span>,
    renderCell: (params) => (
      <Link
        to={`/admin/users/${params.id}`}
        className="h-full flex items-center justify-center"
      >
        <button className="bg-btnColor text-white px-4 flex justify-center items-center h-9 rounded-md">
          View
        </button>
      </Link>
    ),
  },
];

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await api.get("/admin/getusers");
        const usersData = Array.isArray(response.data) ? response.data : [];
        setUsers(usersData);
      } catch (err) {
        setError(err?.response?.data?.message);
        toast.error("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const rows = users.map((item) => {
    const formattedDate = moment(item.createdDate).format("MMMM DD, YYYY, hh:mm A");
    return {
      id: item.userId,
      username: item.userName,
      email: item.email,
      created: formattedDate,
      status: item.enabled ? "Active" : "Inactive",
    };
  });

  if (error) {
    return <Errors message={error} />;
  }

  return (
    <div className="p-4">
      <div className="py-4">
        <h1 className="text-center text-2xl font-bold text-slate-800 uppercase">
          All Users
        </h1>
      </div>
      <div className="overflow-x-auto w-full mx-auto">
        {loading ? (
          <div className="flex flex-col justify-center items-center h-72">
            <Blocks height="70" width="70" color="#4fa94d" ariaLabel="blocks-loading" visible />
            <span>Please wait...</span>
          </div>
        ) : (
          <DataGrid
            className="w-fit mx-auto"
            rows={rows}
            columns={userListsColumns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 6,
                },
              },
            }}
            disableRowSelectionOnClick
            pageSizeOptions={[6]}
            disableColumnResize
          />
        )}
      </div>
    </div>
  );
};

export default UserList;
