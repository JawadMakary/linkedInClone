import React,{useState} from 'react'

import './Login.css'
import {auth} from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

const Login = () => {
    const[name,setName]=useState('')
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState("")
    const[profilePic,setProfilePic]=useState("")
    const dispatch=useDispatch();
    const loginToApp=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileUrl:userAuth.user.photoURL,
            }))
        }).catch((error)=>alert(error.message))




    }
    const register=()=>{
        if(!name){
            return alert('please Enter a full name')
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            }).then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.id,
                    displayName:name,
                    photoUrl:profilePic,
                }))
                 
            })
        }).catch((error)=>alert(error.message))

    }
    return (
        <div className="login">
          <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />
        <form>
            <input type="text"  value={name} onChange={e=>setName(e.target.value)} placeholder="full name(required if registering)"  />
            <input type="text"  value={profilePic} onChange={e=>setProfilePic(e.target.value)} placeholder='profile pic url(optional)' />
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='email' />
            <input type="password"  value={password} onChange={e=>setPassword(e.target.value)} placeholder='password' />
            <button type="submit" onClick={loginToApp}>Sign In</button>

        </form>
        <p>Not a member? {""}
            <span className="login__register" onClick={register}>Register Now</span>
            </p>
        
        
        </div>
    )
}

export default Login
