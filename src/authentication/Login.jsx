import axios from "axios";
import React, { useState } from "react";
import bgLogin from "../assets/image/image-login.jpg";
import { login } from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const onSubmit = (e, data) => {
    e.preventDefault();
    login(data)
      .then((res) => {
        const token = res.data.token;
        console.log(token);
        localStorage.setItem("token", token);
        navigate("/");
        // window.location.reload();
        toast.success("Halo 👋, Selamat anda berhasil login");
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err.message);
        // alert(err);
      });
  };
  return (
    <div className="lg:flex lg:items-center sm:w-full">
      <div
        style={{ backgroundImage: `url(${bgLogin})` }}
        className="sm:hidden h-screen bg-cover bg-no-repeat bg-center w-[50%] lg:flex justify-center items-center"
      >
        <div className="bg-white/[.5] w-[400px] h-[400px] text-white flex flex-col justify-center px-10">
          <h1 className='text-5xl font-bold font-["Montserrat"]'>
            Digital <br /> platform <br /> for{" "}
            <span className="text-[#3D4A6C]">work.</span>
          </h1>
          <br />
          <p className="">
            you will never know everything. <br /> but you will know more
          </p>
        </div>
      </div>

      <div className="sm:py-24 sm:px-10 md:px-32 lg:flex lg:flex-col lg:justify-center lg:w-[50%] ">
        <h4 className="text-3xl font-bold text-[#3D4A6C]">Hey, hello 👋</h4>
        <p>Get your job information here</p>
        <form className="mt-5" onSubmit={(e) => onSubmit(e, data)}>
          <label for="fname">Email</label>
          <br />
          <input
            className="border border-[#838383] py-2 pl-3 rounded w-full"
            type="text"
            placeholder="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <br />
          <br />
          <label for="lname">Password</label>
          <br />
          <input
            className="border border-[#838383] py-2 pl-3 rounded w-full"
            type="password"
            placeholder="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <br />
          <br />
          <button
            type="submit"
            className="bg-[#3D4A6C] w-full py-2 text-white rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
