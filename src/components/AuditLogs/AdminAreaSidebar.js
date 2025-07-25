import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { LiaBlogSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { useMyContext } from "../../store/ContextApi";

const Sidebar = () => {
  const { openSidebar, setOpenSidebar } = useMyContext();
  const pathName = useLocation().pathname;

  return (
    <div
      className={`fixed p-2 top-[74px] min-h-[calc(100vh-74px)] max-h-[calc(100vh-74px)] z-20 left-0 bg-headerColor ${
        openSidebar ? "w-52" : "w-12"
      } transition-all duration-150`}
    >
      <div className="min-h-10 max-h-10 flex flex-end">
        {openSidebar ? (
          <button
            className="flex w-full text-white justify-end items-center gap-1"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <FaArrowLeft className="text-sm" />
            <span className="font-semibold">Close</span>
          </button>
        ) : (
          <Tooltip title="Click To Expand">
            <button
              className="flex w-full text-white justify-center items-center gap-1"
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              <FaArrowRight className="text-lg" />
            </button>
          </Tooltip>
        )}
      </div>

      <div className="flex flex-col gap-5 mt-4">
        <Tooltip title={`${openSidebar ? "" : "All Users"}`}>
          <Link
            to="/admin/users"
            className={`flex text-white items-center gap-2 ${
              pathName.startsWith("/admin/users")
                ? "bg-btnColor"
                : "bg-transparent"
            } min-h-10 max-h-10 py-2 px-2 rounded-md hover:bg-btnColor`}
          >
            <FaUser />
            <span
              className={`${
                !openSidebar ? "opacity-0" : ""
              } transition-all font-semibold duration-150 ease-in-out`}
            >
              All Users
            </span>
          </Link>
        </Tooltip>

        <Tooltip title={`${openSidebar ? "" : "Audit Logs"}`}>
          <Link
            to="/admin/audit-logs"
            className={`flex text-white items-center gap-2 ${
              pathName.startsWith("/admin/audit-logs")
                ? "bg-btnColor"
                : "bg-transparent"
            } min-h-10 max-h-10 py-2 px-2 rounded-md hover:bg-btnColor`}
          >
            <LiaBlogSolid className="text-xl" />
            <span
              className={`${
                !openSidebar ? "opacity-0" : ""
              } transition-all font-semibold duration-150 ease-in-out`}
            >
              Audit Logs
            </span>
          </Link>
        </Tooltip>

        <Tooltip title={`${openSidebar ? "" : "All Groups"}`}>
          <Link
            to="/admin/groups"
            className={`flex text-white items-center gap-2 ${
              pathName.startsWith("/admin/groups")
                ? "bg-btnColor"
                : "bg-transparent"
            } min-h-10 max-h-10 py-2 px-2 rounded-md hover:bg-btnColor`}
          >
            <span className="text-lg">👥</span>
            <span
              className={`${
                !openSidebar ? "opacity-0" : ""
              } transition-all font-semibold duration-150 ease-in-out`}
            >
              All Groups
            </span>
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
