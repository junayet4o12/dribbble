// import React from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SelectCriteria from './SelectCriteria';
const ProfilePhotoInput = () => {
    const labelStyle = 'form-control w-full max-w-xs font-bold'
    return (

        <div className='space-y-7 p-10 pt-16'>
            <h2 className='text-3xl font-bold'>Welcome! Let's create your profile</h2>
            <p className='text-gray-600'>Let others get to know you better! You can do these later</p>
            <div className="flex gap-5">
                <label className="form-control w-full">
                    <div className="label">
                        <span className={`${labelStyle}`}>Add an avatar</span>
                    </div>
                    <div className='flex flex-wrap gap-10 items-center'>
                        <div className=" w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-gray-500 border-dashed flex justify-center items-center text-2xl text-gray-500">
                            <FontAwesomeIcon icon={fas.faCamera} />
                            <img alt="" />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <button className='btn border border-black text-base bg-white w-max px-7'>Choose image</button>
                            <input type="file" className='hidden' />
                            <p className='text-gray-600 font-bold'> {`> Or choose one of our defaults`}</p>
                        </div>
                    </div>
                </label>
            </div>
            <div className="flex gap-5">
                <label className="form-control w-full">
                    <div className="label">
                        <span className={`${labelStyle}`}>Add your location</span>
                    </div>
                    <div>
                        <input className='input input-bordered w-full border-x-0 border-t-0 rounded-none' type="text" placeholder='Enter a location' />
                    </div>
                </label>
            </div>
            <div className="flex gap-5 pt-5">
                
            </div>
        </div>


    );
};

export default ProfilePhotoInput;