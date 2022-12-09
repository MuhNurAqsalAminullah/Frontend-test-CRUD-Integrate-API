import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postSallarys, getEmployees } from "../../../api";

const AddSallarys = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    payday: new Date(),
  });
  const [employees, setEmployees] = useState([]);

  const onSubmit = (e, data) => {
    e.preventDefault();
    postSallarys(data);
    navigate("/sallarys");
    toast.success("Create data sallarys success");
  };

  useEffect(() => {
    getEmployees().then((res) => {
      setEmployees(res.data.results);
    });
  }, []);
  return (
    <div>
      <div className="sm:px-5 sm:pt-5 md:px-[50px] lg:pr-5 lg:pl-[300px]">
        <div className="border-b-2 border-black sm:w-[50%] md:w-[30%] lg:w-[25%] border-[#3D4A6C]">
          <h3 className="sm:text-xl lg:text-3xl font-bold text-[#3D4A6C]">
            Add Sallarys
          </h3>
        </div>
        <div>
          <form onSubmit={(e) => onSubmit(e, data)} className="mt-5">
            <label>Basic Sallary</label>
            <br />
            <input
              className="border border-[#838383] py-2 pl-3 rounded w-full outline-none mb-2 lg:text-sm"
              type="text"
              placeholder="Basic Sallary..."
              onChange={(e) =>
                setData({ ...data, basic_sallary: e.target.value })
              }
            />
            <label>Allowance</label>
            <br />
            <input
              className="border border-[#838383] py-2 pl-3 rounded w-full outline-none mb-2 lg:text-sm"
              type="text"
              placeholder="Allowance..."
              onChange={(e) => setData({ ...data, allowance: e.target.value })}
            />
            <label>Payday</label>
            <br />
            <DatePicker
              style={{ borderRadius: "4px" }}
              onChange={(value) => setData({ ...data, payday: value })}
              value={data.payday}
              className=" rounded sm:w-full md:w-1/2 outline-none mb-2 lg:text-sm"
            />
            <br />
            <label>Employees</label>
            <br />
            <select
              onChange={(e) =>
                setData({ ...data, employee_id: e.target.value })
              }
              className="border border-[#838383] py-2 pl-3 rounded sm:w-full md:w-1/2  outline-none mb-2 lg:text-sm"
            >
              <option className="sm:text-xs lg:text-base">
                - selected employees -
              </option>
              {employees.map((item) => (
                <option
                  key={item._id}
                  className="sm:text-xs lg:text-base"
                  value={item._id}
                >
                  {item.name}
                </option>
              ))}
            </select>
            <br />
            <label>Notes</label>
            <br />
            <textarea
              className="border border-[#838383] py-2 pl-3 rounded w-full outline-none mb-2 lg:text-sm"
              type="text"
              placeholder="Notes..."
              onChange={(e) => setData({ ...data, notes: e.target.value })}
            />
            <br />
            <br />
            <div className="md:flex md:justify-end">
              <button
                type="submit"
                className="bg-[#3D4A6C] sm:w-full md:w-1/2 lg:w-[20%] py-2 text-white rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSallarys;
