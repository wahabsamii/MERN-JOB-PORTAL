import axios from 'axios'
import React, { useEffect } from 'react'
import {useSelector} from 'react-redux';
export default function MyApplications() {
  const currentUser = useSelector((state) => state.user);
  // console.log(currentUser.currentUser);
  const fetchSpecficMyJobs = async() => {
    // /my/application/:id
    const resposne = await axios.get(`/api/application/my/application/${currentUser.currentUser._id}`);
    console.log("resposneresposne",resposne.data)
  }

  useEffect(() => {
    fetchSpecficMyJobs()
  })
  return (
    <div>MyApplications</div>
  )
}
