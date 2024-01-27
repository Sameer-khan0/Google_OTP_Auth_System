import './css/home.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import user from '../assets/img/user.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../redux/userSlice';

function Home() {
  const [username,setusername]=useState('')
  const navigate = useNavigate();
  const checkUser = localStorage.getItem("token");
  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    checkUser ? navigate('/home') : navigate('/');
  }, [checkUser]);
  

  useEffect(() =>{
    if(userData.username){
      setusername(userData.username)
    }
  },[userData])

  useEffect(() => {
    dispatch(fetchUserData())
  }, [dispatch]);
  

  const logOut=()=>{
    localStorage.clear()
    navigate('/')
  }

  return (
    <div className='home'>
      <div className="homeb0x">
        <div className="userimg" onClick={()=>{console.log(username)}}>
          <img src={user} alt="img" onClick={()=>console.log(userData)} />
        </div>
        <div className="usercon">
        <h1>Wellcome <b style={{ color: '#04c0c6' }}>{username}</b></h1>
        full project will come soon
        <div className="con_btn">
          {/* <button><Link to='/profile' style={{color:"white"}} >Profile</Link></button> */}
          <button onClick={()=>logOut()}>Logout</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
