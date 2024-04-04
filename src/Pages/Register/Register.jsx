// import React from 'react';

import { Link } from "react-router-dom";
import RegisterSideBanner from "./RegisterSideBanner";
import RegisterForm from "./RegisterForm";


const Register = () => {
    return (
        <div className="grid md:grid-cols-3 min-h-screen">
            <div className="col-span-1 hidden md:block  bg-secondary min-h-screen p-10 space-y-10">
                <RegisterSideBanner/>
            </div>
            <div className="col-span-2 h-full flex justify-center items-center p-14">
                <RegisterForm/>
            </div>
            <div className="fixed top-0 py-5 bg-white rounded px-5 right-0 flex gap-2 text-sm font-[600]">
                <h4>Already a member?</h4> <Link to={'/login'}><h4 className="text-[#443496] hover:text-blue-900 cursor-pointer hover:underline">Sign In</h4></Link>
            </div>
        </div>
    );
};

export default Register;