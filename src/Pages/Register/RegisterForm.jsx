// import React from 'react';

const RegisterForm = () => {
    const labelStyle = 'form-control w-full max-w-xs font-bold'
    return (
        <div className="w-full max-w-[500px] space-y-5">
            <h2 className="text-3xl font-extrabold ">Sign up to Dribbble</h2>
            <ul className="text-primary ml-5">
                <li className="list-disc">User name has already been taken</li>
            </ul>
            <form className="space-y-5">
                <div className="flex gap-5">
                    <label className={`${labelStyle}`}>
                        <div className="label">
                            <span className={`${labelStyle}`}>Name</span>
                        </div>
                        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className={`${labelStyle}`}>
                        <div className="label">
                            <span className={`${labelStyle}`}>User name</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div className="flex gap-5">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className={`${labelStyle}`}>Email</span>
                        </div>
                        <input type="text" placeholder="example.email@example.com" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="flex gap-5">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className={`${labelStyle}`}>Password</span>
                        </div>
                        <input type="text" placeholder="6+ characters" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="flex gap-5">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
                    <span className="font-semibold">
                        Creating an account means you're okay with out <span className="text-[#443496]">Terms of Service, Privacy Policy,</span> and our default <span className="text-[#443496]">Notification Settings.</span>
                    </span>
                </div>
                <div className="flex gap-5">
                    <button className="btn bg-primary text-white text-base w-[200px] hover:bg-primary">Create Account</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;