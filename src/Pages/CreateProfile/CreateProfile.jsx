// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/dribbleLogo2.png'
import ProfilePhotoInput from './ProfilePhotoInput';
import SelectCriteria from './SelectCriteria';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import addPhotoImg from '../../assets/addPhotoImg.jpg'
const CreateProfile = () => {
    const [showPreviousBtn, setShowPreviousBtn] = useState(false)
    const [selectFirstBox, setSelectFirstBox] = useState(false)
    const [selectSecondBox, setSelectSecondBox] = useState(false)
    const [selectThirdBox, setSelectThirdBox] = useState(false)
    const [formBgPlaceholder, setFormBgPlaceholder] = useState(addPhotoImg)
    const [showDefaultImg, setShowDefaultImg] = useState(false)
    const [formBg, setFormBg] = useState('')
    const [formBgFile0, setFormBgFile0] = useState('')
    const [location, setLocation] = useState('')
    const handleNextPage = () => {
        setShowPreviousBtn(true)
        setShowDefaultImg(false)
    }
    return (
        <div className='w-full'>
            <div className='fixed top-10 left-10'>
                <img className='w-20' src={logo} alt="" />
            </div>

            <div className={`w-full relative min-h-[95vh]`}>
                <div className='w-full h-full absolute top-0'>
                    <div className={`transition-all duration-500 w-full ${showPreviousBtn ? 'opacity-0 scale-x-0 origin-left' : 'opacity-100 scale-x-100 origin-left'} max-w-[550px] mx-auto pt-24 px-10 sm:px-0 pb-5`}>
                        <div className='mx-auto'>
                            <ProfilePhotoInput allImgData={{ formBgPlaceholder, setFormBgPlaceholder, showDefaultImg, setShowDefaultImg, formBg, setFormBg, formBgFile0, setFormBgFile0, location, setLocation }} />
                            <div className=''>
                                <button onClick={handleNextPage} className={`${!showPreviousBtn ? location && formBgPlaceholder !== addPhotoImg ? 'block' : 'hidden' : 'hidden'}`} >
                                    <span className="btn bg-primary text-white text-base w-[200px] hover:bg-primary">Next</span>
                                </button>
                                <button disabled className={`${!showPreviousBtn ? location && formBgPlaceholder !== addPhotoImg ? 'hidden' : 'block' : 'hidden'}`} >
                                    <a className=" btn active:scale-100 bg-primary/50 hover:bg-primary/50 cursor-not-allowed text-white text-base w-[200px]">Next</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-full absolute top-0`}>
                    <div className={`transition-all duration-500 origin-right w-full ${!showPreviousBtn ? 'opacity-0 scale-x-0 h-0' : 'opacity-100 scale-x-100 flex justify-center items-center min-h-[95vh] pt-24 pb-10 px-10'} `}>
                        <div className='mx-auto w-full'>
                            <SelectCriteria allCriteria={{ selectFirstBox, setSelectFirstBox, selectSecondBox, setSelectSecondBox, selectThirdBox, setSelectThirdBox }} />
                            <div className='w-full mx-auto flex flex-col justify-center items-center gap-5 pt-7 '>
                                <p className='text-lg font-bold'>Anything else? You can select multiple</p>
                                <button disabled={!selectFirstBox && !selectSecondBox && !selectThirdBox} className='btn bg-primary/90 text-white text-base w-[200px] hover:bg-primary'>Finish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <a onClick={() => setShowPreviousBtn(false)} className={`${showPreviousBtn ? 'block' : 'hidden'}`}><span className="fixed top-7 left-40 btn w-max px-5 text-xl"> <FontAwesomeIcon icon={fas.faLessThan} /> </span> </a>

            </div>
        </div>
    );
};

export default CreateProfile;