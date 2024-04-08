/* eslint-disable react/prop-types */
// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/dribbleLogo2.png'
import ProfilePhotoInput from './ProfilePhotoInput';
import SelectCriteria from './SelectCriteria';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import addPhotoImg from '../../assets/addPhotoImg.jpg'
import axios from 'axios';
import defaultImg1 from '../../assets/defaultProfile/defaultProfile1.jpg'
import defaultImg2 from '../../assets/defaultProfile/defaultProfile2.jpg'
import defaultImg3 from '../../assets/defaultProfile/defaultProfile3.jpg'
import defaultImg4 from '../../assets/defaultProfile/defaultProfile4.jpg'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.config';

const CreateProfile = ({ singleUserData }) => {
    const navigate = useNavigate()
    const [showPreviousBtn, setShowPreviousBtn] = useState(false)
    const [selectFirstBox, setSelectFirstBox] = useState(singleUserData?.whyICame?.selectFirstBox || false)
    const [selectSecondBox, setSelectSecondBox] = useState(singleUserData?.whyICame?.selectSecondBox || false)
    const [selectThirdBox, setSelectThirdBox] = useState(singleUserData?.whyICame?.selectThirdBox || false)
    const [ProfilePhotoPlaceholder, setProfilePhotoPlaceholder] = useState(singleUserData?.image || addPhotoImg)
    const [showDefaultImg, setShowDefaultImg] = useState(false)
    const [profilePhoto, setProfilePhoto] = useState('')
    const axiosPublic = useAxiosPublic()
    const [profileFile0, setProfileFile0] = useState('')
    const [location, setLocation] = useState(singleUserData?.location || '')
    const imgHostingKey = import.meta.env.VITE_IMG_HOSTING_KEY;
    const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`
    const allDefaultImages = [defaultImg1, defaultImg2, defaultImg3, defaultImg4]
    const allDefaultImgLink = [
        'https://i.ibb.co/JBGvy1H/default-Profile1.jpg',
        ' https://i.ibb.co/MN1J0Yd/default-Profile2.jpg',
        'https://i.ibb.co/sy1nx4V/default-Profile3.jpg',
        'https://i.ibb.co/wzkgPG8/default-Profile4.jpg'
    ]
    const handleNextPage = () => {
        setShowPreviousBtn(true)
        setShowDefaultImg(false)
    }
    const handleUpdateProfile = async () => {
        const defaultImageIndex = allDefaultImages.indexOf(ProfilePhotoPlaceholder);

        let ImgUrl = '';
        if (ProfilePhotoPlaceholder === singleUserData?.image) {
            ImgUrl = singleUserData?.image
        }
        else if (defaultImageIndex !== -1) {
            ImgUrl = allDefaultImgLink[defaultImageIndex];
        } else {
            const image = { image: profileFile0 };
            const res = await axios.post(imgHostingApi, image, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            ImgUrl = res?.data?.data?.display_url || singleUserData?.image;
        }
        handleUpdateProfile(auth.currentUser, {
            photoURL: ImgUrl

        })
            .then(() => {
                const allData = {
                    image: ImgUrl,
                    location,
                    whyICame: {
                        selectFirstBox,
                        selectSecondBox,
                        selectThirdBox
                    }
                }
                axiosPublic.put(`/updateUserData/${singleUserData?._id}`, allData)
                    .then(res => {
                        console.log(allData);
                        toast.success('Successfully Updated')
                        navigate('/')
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err?.message);
            })


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
                            <ProfilePhotoInput allImgData={{ ProfilePhotoPlaceholder, setProfilePhotoPlaceholder, showDefaultImg, setShowDefaultImg, profilePhoto, setProfilePhoto, profileFile0, setProfileFile0, location, setLocation, allDefaultImages }} />
                            <div className=''>
                                <button onClick={handleNextPage} className={`${!showPreviousBtn ? location && ProfilePhotoPlaceholder !== addPhotoImg ? 'block' : 'hidden' : 'hidden'}`} >
                                    <span className="btn bg-primary text-white text-base w-[200px] hover:bg-primary">Next</span>
                                </button>
                                <button disabled className={`${!showPreviousBtn ? location && ProfilePhotoPlaceholder !== addPhotoImg ? 'hidden' : 'block' : 'hidden'}`} >
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
                                <button onClick={handleUpdateProfile} disabled={!selectFirstBox && !selectSecondBox && !selectThirdBox} className='btn bg-primary/90 text-white text-base w-[200px] hover:bg-primary'>Finish</button>
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