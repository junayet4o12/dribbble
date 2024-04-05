// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/dribbleLogo2.png'
import ProfilePhotoInput from './ProfilePhotoInput';
import SelectCriteria from './SelectCriteria';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const CreateProfile = () => {
    const [showPreviousBtn, setShowPreviousBtn] = useState(false)
    const [selectFirstBox, setSelectFirstBox] = useState(false)
    const [selectSecondBox, setSelectSecondBox] = useState(false)
    const [selectThirdBox, setSelectThirdBox] = useState(false)
    const handleSetShowPreviousBtn = () => {
        window.history.pushState("", "", "#item2");
        setShowPreviousBtn(true)
    }
    return (
        <div className='flex flex-col justify-center items-center min-h-screen w-full p-10 pt-16'>
            <div className='fixed top-10 left-10'>
                <img className='w-20' src={logo} alt="" />
            </div>

            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full mx-auto ">
                    <div className='mx-auto'>
                        <ProfilePhotoInput />
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className='mx-auto w-full'>
                        <SelectCriteria allCriteria={{selectFirstBox, setSelectFirstBox, selectSecondBox, setSelectSecondBox, selectThirdBox, setSelectThirdBox}} />
                    </div>
                </div>
            </div>
            <div className="flex w-full py-2 px-5 gap-2 max-w-[550px] mx-auto">
                <a href="#item2" onClick={() => setShowPreviousBtn(true)} className={`${!showPreviousBtn ? 'block' : 'hidden'}`} >
                    <a className="btn bg-primary text-white text-base w-[200px] hover:bg-primary">Next</a>
                </a>
                <button disabled className={`${!showPreviousBtn ? 'block' : 'hidden'}`} >
                    <a className=" btn bg-primary/50 hover:bg-primary/50 cursor-not-allowed text-white text-base w-[200px]">Next</a>
                </button>
                <a onClick={() => setShowPreviousBtn(false)} href="#item1" className={`${showPreviousBtn ? 'block' : 'hidden'}`}><a className="fixed top-7 left-40 btn w-max px-5 text-xl"> <FontAwesomeIcon icon={fas.faLessThan} /> </a> </a>
            </div>
        </div>
    );
};

export default CreateProfile;