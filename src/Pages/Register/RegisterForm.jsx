// import React from 'react';

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import auth from "../../firebase/firebase.config";
import { updateProfile } from "@firebase/auth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const RegisterForm = () => {
    const { createUser } = useAuth()
    const axiosPublic = useAxiosPublic()
    const [isChecked, setIsChecked] = useState(false)
    const [registering, setRegistering] = useState(false)
    const [isUserNameError, setIsUserNameError] = useState(2)
    const [isExist, setIsExist] = useState(false)
    const [userName, setUserName] = useState('')
    const labelStyle = 'form-control w-full max-w-xs font-bold'
    const imgHostingKey = import.meta.env.VITE_IMG_HOSTING_KEY;
    const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`
    const navigate = useNavigate();
    const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm()

    const onSubmit = async (data) => {
        if (userName === '') {
            return setIsUserNameError(3)
        } else if (!isExist) {
            return setIsUserNameError(1)
        }
        setRegistering(true)
        if (!isChecked) {
            toast.error(isChecked)
            setRegistering(false)
            return
        }
        const name = data.name
        const email = data.email;
        const password = data.password;
        const allData = {
            name,
            email,
            password,
            userName
        }
        createUser(email, password)
            .then((res) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        axiosPublic.post("/addUser", allData)
                            .then((res) => {
                                toast.success('Successfully Registered')
                                reset()
                                setIsChecked(false)
                                setRegistering(false)
                                navigate('/createProfile')
                            });

                    })
                    .catch((err) => {
                        toast.error(err?.message);
                        setRegistering(false)
                    });
            })
            .catch(err => {
                toast.error(err.message)
                setRegistering(false)

            })
        console.log(data);
    }

    const handleUserName = (e) => {
        setIsUserNameError(2)
        e.preventDefault();
        const pattern = /^\s*[a-z0-9._]+\s*$/i;
        console.log(pattern.test(e.target.value));
        if (e.target.value === '') {
            setUserName(e.target.value)
            setIsUserNameError(2)
            return
        }
        else if (!pattern.test(e.target.value)) {
            return setIsUserNameError(2)
        } else {
            setUserName(e.target.value)
            axiosPublic.get(`/checkExistingUserName/${e.target.value}`)
                .then(res => {
                    if (res.data.isExist) {
                        setIsUserNameError(1)
                        setIsExist(false)
                    }
                    else {
                        setIsUserNameError(0)
                        setIsExist(true)
                    }
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }
    const handleCheckBox = (e) => {
        setIsChecked(e.target.checked)
    }
    return (
        <div className="w-full max-w-[500px] space-y-5">
            <div className="relative pb-7">
                <h2 className="text-3xl font-extrabold ">Sign up to Dribbble</h2>

                <ul className="text-primary  absolute bottom-0 left-5 text-sm font-semibold">
                    {
                        isUserNameError === 3 && <li className="list-disc">Please take a username.</li>
                    }
                    {
                        isUserNameError === 1 && <li className="list-disc">Username already has been taken</li>
                    }
                    {
                        isUserNameError === 0 && <li className=" text-green-500 list-disc">User name is available</li>
                    }
                </ul>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="flex gap-5">
                    <label className={`${labelStyle}`}>
                        <div className="label">
                            <span className={`${labelStyle}`}>Name</span>
                        </div>
                        <input
                            {...register("name", { required: true })}
                            type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className={`${labelStyle} relative`}>
                        <div className="label">
                            <span className={`${labelStyle}`}>User name</span>
                        </div>
                        <input
                            onChange={handleUserName}
                            value={userName}
                            required
                            type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                    </label>
                </div>
                <div className="flex gap-5">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className={`${labelStyle}`}>Email</span>
                        </div>
                        <input
                            {...register("email", { required: true })}
                            type="email" placeholder="example.email@example.com" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="flex gap-5">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className={`${labelStyle}`}>Password</span>
                        </div>
                        <input
                            {...register("password", {
                                required: true,
                                minLength: 8,
                                maxLength: 20,
                                pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
                            })}
                            type="password" placeholder="6+ characters" className="input input-bordered w-full" />
                        {errors?.password?.type === 'required' && <span className='text-red-500'>Password invalid</span>}
                        {errors?.password?.type === 'minLength' && <span className='text-red-500'>Password must be minimum 8 characters</span>}
                        {errors?.password?.type === 'maxLength' && <span className='text-red-500'>Password must be maximum 20 characters</span>}
                        {errors?.password?.type === 'pattern' && <span className='text-red-500'>Password must contain at least one digit, one lowercase letter, and one uppercase letter.</span>}
                    </label>
                </div>
                <div className="flex gap-5">
                    <input onChange={handleCheckBox} type="checkbox" className="checkbox checkbox-secondary" />
                    <span className="font-semibold">
                        Creating an account means you're okay with out <span className="text-[#443496]">Terms of Service, Privacy Policy,</span> and our default <span className="text-[#443496]">Notification Settings.</span>
                    </span>
                </div>
                <div className="flex gap-5">
                    {
                        registering ? <button className="btn bg-primary/90 text-white text-base w-[200px] hover:bg-primary"><span className="loading loading-spinner loading-sm"></span> Creating...</button> : <button disabled={!isChecked} className="btn bg-primary text-white text-base w-[200px] hover:bg-primary">Create Account</button>
                    }
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;