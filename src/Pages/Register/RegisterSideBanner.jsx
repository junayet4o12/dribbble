// import React from 'react';
import logo from '../../assets/dribbleLogo.png'
import LogInImg from '../../assets/logInImg.jpg'
const RegisterSideBanner = () => {
    return (
        <>
            <img className='w-20' src={logo} alt="" />
                <h2 className='text-textColor text-2xl font-extrabold'>
                    Discover the world&apos;s top 
                    Designer & Creatives.
                </h2>
                <img className='w-full' src={LogInImg} alt="" />
        </>
    );
};

export default RegisterSideBanner;