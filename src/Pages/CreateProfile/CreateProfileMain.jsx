import React from 'react';
import CreateProfile from './CreateProfile';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Loading from '../../Components/Loading/Loading';
const CreateProfileMain = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const {data: singleUserData, isLoading: singleUserDataIsLoading} = useQuery({
        queryKey: ['singleUserData', user],
        queryFn: async()=> {
            const res = await axiosPublic.get(`/singleUser/${user?.email}`)
            return res.data
        }
    })
    if(singleUserDataIsLoading) {
        return <Loading/>
    }
    return (
        <>
          <CreateProfile singleUserData={singleUserData}  />  
        </>
    );
};

export default CreateProfileMain;