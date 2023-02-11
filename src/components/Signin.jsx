import { React, useEffect, useState } from 'react'
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp';
import { KAKAO_AUTH_URL } from './Kakao/OAuth';
import axios from 'axios';


function Signin() {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);
        setPassword(e.target.value);
    };


    const onChangeEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };

    const validation = () => {
        if (!password) setPasswordError(true);
        if (!email) setEmailError(true);
        if (password  && email ) return true;
        else return false;

    };


const onSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
        axios({
            method: 'post',
            url: 'http://localhost:8080/auth/login',
            data: {
                email: email,
                password: password,
            },
        })
            .then((res) => {
                //200(OK), 201(Created)
                // this.props.history.push('/users/login');
                console.log('로그인 완료');
                alert('로그인에 성공했습니다.')
                window.location.replace('/')
            })
            .catch((err) => {
                //500(err)
                console.error(err);
                alert('로그인에 실패했습니다.')
            });
    if (!validation()) {
        alert('로그인에 실패했습니다.')
    }
    };
};


    // const onClickConfirmButton = () => {
    //     if (email === User.email && pw === User.pw) {
    //         alert('로그인에 성공했습니다.')
    //     } else {
    //         alert("등록되지 않은 회원입니다.");
    //     }
    // }


    return (
        <>
            <div className='bg-zinc-200 h-screen flex justify-center items-center'>
                {/* Form */}
                <div className='bg-white rounded-lg shadow-lg shadow-black/30 h-96 pl-8 w-[350px] flex flex-col justfy-center '>
                    <form className='space-y-1' action="">
                        <div>
                            <p className='font-semibold text-2xl tracking-wide'>로그인</p>
                        </div>
                        <div className='mr-5'>
                            <p className='text-zinc-600 font-semibold'>메일주소</p>
                            <input className='ouline-none h-10 px-5 border border-sm w-full' type="text" value={email} onChange={onChangeEmail} placeholder='Email@.com' required />
                        </div>
                        <div className="errorMessageWrap">
                          {emailError &&
                            <div>올바른 이메일 주소를 입력해주세요.</div>
                        }
                    </div>



                        <div className='mr-5'>
                            <p className='text-zinc-600 font-semibold'>비밀번호</p>
                            <input className='ouline-none h-10 px-5 border border-sm w-full' type="password" value={password} onChange={onChangePassword} placeholder='Password' required />
                        </div>
                        <div className="errorMessageWrap">
                               {passwordError && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )}
                    </div>
                        <div className='flex space-y-2 gap-5 mt-1'>
                            <input type="checkbox" />
                            <p>Remember me ?</p>
                        </div>
                        <div className='mr-5' >
                            <button className='bg-red-400 h-10 rounded-full hover:bg-red-500 duration-300 w-full' onClick={onSubmit} >로그인</button>
                            <button className='text-end '>비밀번호 찾기</button>
                        </div>
                        <p className='flex justify-center font-bold'>또는</p>
                        <div className='flex flex-row justify-center gap-10 text-3xl'>
                            <AiFillGoogleCircle className='rounded-full text-red-600' />
                        </div>
                        <div>
                            <p className='text-zinc-500'>아이디가 없으시다면 <span className='text-black font-bold underline underline-offset-4'><Link to="/Signup" element={<SignUp />}>회원가입</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signin
