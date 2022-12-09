import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postPosition } from "../../../api";

const AddPosition = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const onSubmit = (e, data) => {
    e.preventDefault();
    postPosition(data);
    navigate("/");
    toast.success("Create data success");
  };
  return (
    <div>
      <div className="sm:px-5 sm:pt-5 md:px-[50px] lg:pr-5 lg:pl-[300px]">
        <div className="border-b-2 border-black sm:w-[50%] md:w-[30%] lg:w-[25%] border-[#3D4A6C]">
          <h3 className="sm:text-xl lg:text-3xl font-bold text-[#3D4A6C]">
            Add Position
          </h3>
        </div>
        <div>
          <form onSubmit={(e) => onSubmit(e, data)} className="mt-5">
            <label>Code</label>
            <br />
            <input
              className="border border-[#838383] py-2 pl-3 rounded w-full outline-none"
              type="text"
              placeholder="code..."
              onChange={(e) => setData({ ...data, code: e.target.value })}
            />
            <br />
            <br />
            <label>Position</label>
            <br />
            <input
              className="border border-[#838383] py-2 pl-3 rounded w-full outline-none"
              type="text"
              placeholder="position..."
              onChange={(e) => setData({ ...data, name: e.target.value })}
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

export default AddPosition;
