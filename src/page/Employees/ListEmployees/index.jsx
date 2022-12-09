import React, { useEffect, useState } from "react";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { getEmployees, deleteeEmployees } from "../../../api";

const Employees = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then((res) => {
      setEmployees(res.data.results);
    });
  }, []);

  const handleUpdate = (_id) => {
    navigate(`/employees/edit-employees/${_id}`);
  };

  const handleDelete = (e, _id) => {
    deleteeEmployees(_id);
  };
  return (
    <div className="sm:px-5 sm:pt-5 sm:pb-10 md:px-[50px] lg:pr-5 lg:pl-[300px]">
      <div className="sm:flex sm:justify-between sm:items-center">
        <div className="w-[30%]">
          <div className="border-b-2 border-black sm:w-[100%] border-[#3D4A6C]">
            <h3 className="sm:text-xl lg:text-3xl font-bold text-[#3D4A6C]">
              Employees
            </h3>
          </div>
        </div>
        <Link to={"add-employees"}>
          <div className="bg-[#3D4A6C] text-white sm:py-3 sm:px-4 sm:flex sm:items-center sm:gap-x-2 rounded-lg">
            <p>Add</p>
            <MdIcons.MdAddCircleOutline size={25} />
          </div>
        </Link>
      </div>
      <div className="md:flex md:justify-between md:flex-wrap">
        {employees.map((item) => (
          <div
            key={item._id}
            className="sm:mt-5 sm:border-t-2 md:w-[300px] border-[#3D4A6C] px-5 py-5 rounded shadow-3xl"
          >
            <div>
              <p className="font-bold sm:text-lg text-[#3D4A6C]">{item.name}</p>
              <p className="sm:text-sm">{item.nik}</p>
              {/* <p className="sm:text-sm font-bold text-[#3D4A6C]">
                {item.position_id.nama}
              </p> */}
              <p className="sm:text-sm">{item.address}</p>
              <p className="sm:text-sm">{item.phone}</p>
              <p className="sm:text-sm">{item.email}</p>
            </div>
            <div className="sm:flex sm:justify-between sm:mt-5">
              <button
                onClick={() => handleUpdate(item._id)}
                className="border border-[#5FC52E] hover:bg-[#5FC52E] w-[48%] text-[#5FC52E] hover:text-[white] rounded py-1 sm:ease-in sm:duration-200"
              >
                Edit
              </button>
              <button
                onClick={(e) => handleDelete(item._id, e)}
                className="border border-[#E01F2D] hover:bg-[#E01F2D] w-[48%] text-[#E01F2D] hover:text-[white] rounded py-1 sm:ease-in sm:duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
