/* eslint-disable react/prop-types */
// import React from 'react';

import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import boxImg1 from '../../assets/boxImg1.png'
import boxImg2 from '../../assets/boxImg2.png'
import boxImg3 from '../../assets/boxImg3.png'
import { useState } from "react";
const SelectCriteria = ({allCriteria}) => {
    const {selectFirstBox, setSelectFirstBox,selectSecondBox, setSelectSecondBox,selectThirdBox, setSelectThirdBox} = allCriteria
    const boxStyle = 'w-full h-[350px] border-2 border-gray-500 rounded-md max-w-[350px] mx-auto boxAnimation relative cursor-pointer'
    const boxImgStyle = ' transition-all duration-500 w-[calc(100%-40px)] mx-auto mt-4'
    const boxSelectDivStyle = 'w-10 h-10  rounded-full absolute bottom-5 left-[calc(50%-20px)] flex justify-center items-center'
    const boxTextStyle = 'duration-500 transition-all text-sm font-bold px-2 mt-4'
    const boxTitleStyle = 'duration-500 transition-all text-lg font-extrabold px-2 mt-4 text-center'
    console.log(allCriteria);
    const handleSelectFirstBox = () => {
        setSelectFirstBox(true)
        setSelectSecondBox(false)
        setSelectThirdBox(false)
    }
    const handleSelectSecondBox = () => {
        setSelectSecondBox(true)
        setSelectFirstBox(false)
        setSelectThirdBox(false)
    }
    const handleSelectThirdBox = () => {
        setSelectThirdBox(true)
        setSelectSecondBox(false)
        setSelectFirstBox(false)
    }
    return (
        <div>
            <div className='space-y-7'>
                <h2 className='text-3xl font-bold text-center'>What brings you to dribbble?</h2>
                <p className='text-gray-600 text-center'>Select the options that best describe you. Don't worry, you can explore other options letter.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-14">
                    <div onClick={handleSelectFirstBox} className={`${boxStyle}`}>
                        <img className={`${boxImgStyle} ${selectFirstBox ? 'boxImgAnimation2' : 'boxImgAnimation'}`} src={boxImg1} alt="" />
                        <p className={`${boxTitleStyle}`}>
                            I'm a designer looking to share my work.
                        </p>
                        <p className={`${boxTextStyle} ${selectFirstBox ? 'boxTextAnimation2' : 'boxTextAnimation'}`}>
                            Share your creative portfolio with a global audience on Dribble. Connect, showcase, and elevate your design career with invaluable feedback and networking opportunities.
                        </p>
                        <div className={`${boxSelectDivStyle} ${selectFirstBox ? 'bg-pink-500' : 'bg-gray-500'}`}>
                            <span className={`text-white ${selectFirstBox ? 'block' : 'hidden'}`}><FontAwesomeIcon icon={fas.faCheck} /></span>
                        </div>
                    </div>
                    <div onClick={handleSelectSecondBox} className={`boxAnimation ${boxStyle}`}>
                        <img className={`${boxImgStyle} ${selectSecondBox ? 'boxImgAnimation2' : 'boxImgAnimation'}`} src={boxImg2} alt="" />
                        <p className={`${boxTitleStyle}`}>
                            I'm looking to hire a designer.
                        </p>
                        <p className={`${boxTextStyle} ${selectSecondBox ? 'boxTextAnimation2' : 'boxTextAnimation'}`}>
                            Find the perfect designer for your project on Dribble. Explore a vast pool of talent, view portfolios, and hire skilled professionals to bring your vision to life.
                        </p>
                        <div className={`${boxSelectDivStyle} ${selectSecondBox ? 'bg-pink-500' : 'bg-gray-500'}`}>
                            <span className={`text-white ${selectSecondBox ? 'block' : 'hidden'}`}><FontAwesomeIcon icon={fas.faCheck} /></span>
                        </div>
                    </div>
                    <div onClick={handleSelectThirdBox} className={`boxAnimation ${boxStyle}`}>
                        <img className={`${boxImgStyle} ${selectThirdBox ? 'boxImgAnimation2' : 'boxImgAnimation'}`} src={boxImg3} alt="" />
                        <p className={`${boxTitleStyle}`}>
                            I'm looking for design inspiration.
                        </p>
                        <p className={`${boxTextStyle} ${selectThirdBox ? 'boxTextAnimation2' : 'boxTextAnimation'}`}>
                            With over 7 million shots from a vast community of designers, Dribble is the leading source for design inspiration.
                        </p>
                        <div className={`${boxSelectDivStyle} ${selectThirdBox ? 'bg-pink-500' : 'bg-gray-500'}`}>
                            <span className={`text-white ${selectThirdBox ? 'block' : 'hidden'}`}><FontAwesomeIcon icon={fas.faCheck} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectCriteria;