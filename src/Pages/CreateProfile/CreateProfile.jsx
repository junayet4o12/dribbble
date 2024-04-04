// import React from 'react';
import logo from '../../assets/dribbleLogo2.png'
import ProfilePhotoInput from './ProfilePhotoInput';
import SelectCriteria from './SelectCriteria';
const CreateProfile = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen w-full'>
            <div className='fixed top-10 left-10'>
                <img className='w-20' src={logo} alt="" />
            </div>

            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full mx-auto">
                    <div className='mx-auto'>
                        <ProfilePhotoInput />
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className='mx-auto'>
                        <SelectCriteria />
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" >
                    <a  className="btn bg-primary text-white text-base w-[200px] hover:bg-primary">Next</a>
                </a>
                <a href="#item2"><a  className="btn bg-primary text-white text-base w-[200px] hover:bg-primary">Next</a></a>
            </div>
        </div>
    );
};

export default CreateProfile;