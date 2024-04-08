/* eslint-disable react/prop-types */
// import React from 'react';
import { useRef, useState } from 'react';

const ProfilePhotoInput = ({allImgData}) => {
    const {ProfilePhotoPlaceholder, setProfilePhotoPlaceholder, showDefaultImg, setShowDefaultImg, profilePhoto, setProfilePhoto, profileFile0, setProfileFile0, location, setLocation,allDefaultImages} = allImgData
    
    const labelStyle = 'form-control w-full max-w-xs font-bold'
    const fileInput = useRef(null)
    const handleFormBg = () => {
        fileInput.current.click()
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setProfilePhotoPlaceholder(event.target.result);
            setProfileFile0(file)
        };
        setProfilePhoto(reader.readAsDataURL(file))
        // reader.readAsDataURL(file);
    };
    const handleDefaultImg = (img) => {
        setProfilePhotoPlaceholder(img)
        
    }
    const handleLocation = (e) => {
        e.preventDefault();
        setLocation(e.target.value)
    }
    return (

        <div className='space-y-7'>
            <h2 className='text-3xl font-bold'>Welcome! Let's create your profile</h2>
            <p className='text-gray-600'>Let others get to know you better! You can do these later</p>
            <div className="flex gap-5">
                <label className="form-control w-full">
                    <div className="label">
                        <span className={`${labelStyle}`}>Add an avatar</span>
                    </div>
                    <div className='flex flex-wrap gap-10 items-center'>
                        <div className=" w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-gray-500 border-dashed flex justify-center items-center text-2xl text-gray-500 overflow-hidden bg-black">
                            <img className='object-cover w-full h-full' src={ProfilePhotoPlaceholder} alt={ProfilePhotoPlaceholder} />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p
                                onClick={handleFormBg}
                                className='btn border border-black text-base bg-white w-max px-7 '>Choose image
                            </p>
                            <div className='relative'>
                                <p onClick={() => setShowDefaultImg(true)} className='text-gray-600 font-bold cursor-pointer'> {`> Or choose one of our defaults`}</p>
                                <div className={`transition-all duration-300 ${showDefaultImg ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} grid grid-cols-2 gap-2 gap-y-5 w-[210px] absolute top-7 left-14 bg-pink-200 rounded-md p-1 pt-8 pb-3`}>

                                    <p onClick={() => setShowDefaultImg(false)} className='transition-all duration-300 text-black col-span-2 ml-auto cursor-pointer h-7 w-7 flex justify-center items-center text-lg font-bold rounded-md hover:bg-white absolute right-3 top-1'>X</p>
                                    {
                                        allDefaultImages.map((img, idx) => <img className={`transition-all duration-300 w-[67px] h-[67px] rounded-full object-cover p-0.5   cursor-pointer hover:border-[3px] hover:border-white mx-auto ${ProfilePhotoPlaceholder === img ? 'border-[3px] border-white' : ''}`} key={idx} src={img} onClick={() => handleDefaultImg(img)} />)
                                    }
                                </div>
                            </div>

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
                        <input
                        value={location}
                        onChange={handleLocation}
                        className='input input-bordered input-secondary w-full border-x-0 border-t-0 rounded-none' type="text" placeholder='Enter a location' />
                    </div>
                </label>
            </div>
            <div className="flex gap-5 pt-5">

            </div>
            <input
                ref={fileInput}
                className='hidden'
                onChange={handleFileChange}
                type="file" name="productImage" id="image" />
        </div>


    );
};

export default ProfilePhotoInput;