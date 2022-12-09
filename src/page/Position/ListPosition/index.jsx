import React, { useEffect, useState } from "react";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { getPosition, deleteePosition } from "../../../api";

const Position = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState([]);

  useEffect(() => {
    getPosition().then((res) => {
      setPosition(res.data.results);
      // console.log(res.data.results);
    });
  }, []);

  const handleUpdate = (_id) => {
    navigate(`position/edit-position/${_id}`);
  };

  const handleDelete = (e, _id) => {
    deleteePosition(_id);
  };
  return (
    <div className="sm:px-5 sm:pt-5 sm:pb-10 md:px-[50px] lg:pr-5 lg:pl-[300px]">
      <div className="sm:flex sm:justify-between sm:items-center">
        <div className="w-[30%]">
          <div className="border-b-2 border-black sm:w-[100%] border-[#3D4A6C]">
            <h3 className="sm:text-xl lg:text-3xl font-bold text-[#3D4A6C]">
              Position
            </h3>
          </div>
        </div>
        <Link to={"position/add-position"}>
          <div className="bg-[#3D4A6C] text-white sm:py-3 sm:px-4 sm:flex sm:items-center sm:gap-x-2 rounded-lg">
            <p>Add</p>
            <MdIcons.MdAddCircleOutline size={25} />
          </div>
        </Link>
      </div>
      {position.map((item) => (
        <div
          key={item._id}
          className="sm:mt-5 sm:flex sm:justify-between px-3 py-1 h-[60px] rounded shadow-3xl"
        >
          <div>
            <p className="font-bold sm:text-lg text-[#3D4A6C]">{item.name}</p>
            <p className="sm:text-sm">Code : {item.code}</p>
          </div>
          <div className="sm:flex sm:items-center sm:gap-x-5">
            {/* <Link to={"position/edit-position"}> */}
            <BiIcons.BiEdit
              onClick={() => handleUpdate(item._id)}
              size={25}
              color="#5FC52E"
              className="cursor-pointer"
            />
            {/* </Link> */}
            <MdIcons.MdDelete
              onClick={(e) => handleDelete(item._id, e)}
              size={25}
              color="#E01F2D"
              className="cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Position;
