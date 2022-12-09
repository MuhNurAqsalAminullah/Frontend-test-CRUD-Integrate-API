import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updateEmployees, getPosition } from "../../../api";

const EditEmployees = () => {
  const [data, setData] = useState({});
  const [position, setPosition] = useState([]);

  const { _id } = useParams();
  // console.log(_id);

  const onSubmit = (e, _id) => {
    e.preventDefault();
    updateEmployees(_id)
      .then(() => {
        toast.success("Edit data berhasil");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    getPosition().then((res) => {
      setPosition(res.data.results);
      // console.log(res.data.results);
    });
  }, []);
  return (
    <div>
      <div className="sm:px-5 sm:pt-5 md:px-[50px] lg:pr-5 lg:pl-[300px]">
        <div className="border-b-2 border-black sm:w-[50%] md:w-[30%] lg:w-[25%] border-[#3D4A6C]">
          <h3 className="sm:text-xl lg:text-3xl font-bold text-[#3D4A6C]">
            Edit Employees
          </h3>
        </div>
        <div>
          <form onSubmit={(e) => onSubmit(e, _id)} className="mt-5">
            <label>Name</label>
            <br />
            <input
              className="border border-[#838383] py-2 pl-3 rounded w-full outline-none mb-2 lg:text-sm"
              type="text"
              placeholder="Name..."
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <label>Nik</label>
            <br />
            <input
              className="border border-[#838383] py-2 pl-3 rounded w-full outline-none mb-2 lg:text-sm"
              type="text"
              placeholder="Nik..."
              onChange={(e) => setData({ ...data, nik: e.target.value })}
            />
            <label>Position</label>
            <br />
            <select
              className="border border-[#838383] py-2 pl-3 rounded sm:w-full md:w-1/2 lg:w-1/4 outline-none mb-2 lg:text-sm"
              onChange={(e) =>
                setData({ ...data, position_id: e.target.value })
              }
            >
              <option className="sm:text-xs lg:text-base" selected>
                - Selected Position -
              </option>
              {position.map((item) => (
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
            <label>Address</label>
            <br />
            <input
              className="border border-[#838383] py-2 pl-3 rounded w-full outline-none mb-2 lg:text-sm"
              type="text"
              placeholder="Address"
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
            <br />
            <label>Phone Number</label>
            <br />
            <input
              className="border border-[#838383] py-2 pl-3 rounded w-full outline-none mb-2 lg:text-sm"
              type="text"
              placeholder="Phone number..."
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
            <br />
            <label>Email</label>
            <br />
            <input
              className="border border-[#838383] py-2 pl-3 rounded w-full outline-none"
              type="email"
              placeholder="Email..."
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <br />
            <br />
            <div className="md:flex md:justify-end">
              <button
                type="submit"
                className="bg-[#3D4A6C] sm:w-full md:w-1/2 lg:w-[20%] py-2 text-white rounded"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmployees;
