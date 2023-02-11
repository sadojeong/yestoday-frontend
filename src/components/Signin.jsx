import { React, useEffect, useState } from 'react'
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp';
import { KAKAO_AUTH_URL } from './Kakao/OAuth';
import GoogleLog from './Kakao/GoogleLog'
import axios from 'axios';


function Signin() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordOption, setPasswordOption] = useState(false);
    const [saveIDFlag, setSaveIDFlag] = useState(false);
    const [term, setTerm] = useState(false);
    const [capsLockFlag, setCapsLockFlag] = useState(false);
    const LS_KEY_ID = "LS_KEY_ID";
    const LS_KEY_SAVE_ID_FLAG = "LS_KEY_SAVE_ID_FLAG";


      useEffect(() => {
        const idFlag = JSON.parse(localStorage.getItem(LS_KEY_SAVE_ID_FLAG));
        if (idFlag !== null) setSaveIDFlag(idFlag);
        if (idFlag === false) localStorage.setItem(LS_KEY_ID, "");
      
        let data = localStorage.getItem(LS_KEY_ID);
        if (data !== null) setEmail(data);
      }, []);

      const handleSaveIDFlag = () => {
        localStorage.setItem(LS_KEY_SAVE_ID_FLAG, !saveIDFlag);
        setSaveIDFlag(!saveIDFlag);
      };


    //capslock 감지
    const checkCapsLock = (e) => {
        const capsLock = e.getModifierState("CapsLock");
        setCapsLockFlag(capsLock);
      };

    // password input에서 type과 autoComplete를 변경
    const [passwordInputType, setPasswordInputType] = useState({
        type: "password",
        autoComplete: "current-password",
    });
    //passwordOption이 변경될 때마다 setPasswordInputType으로 type과 autoComplete을 변경
    useEffect(() => {
        if (passwordOption === false)
            setPasswordInputType({
                type: "password",
                autoComplete: "current-password",
            });
        else
            setPasswordInputType({
                type: "text",
                autoComplete: "off"
            });
    }, [passwordOption]);

    //비밀번호 유효성 검사
    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);
        setPassword(e.target.value);
    };

    //이메일 유효성검사
    const onChangeEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };

    //이메일 비밀번호 유효성 검증
    const validation = () => {
        if (!password) setPasswordError(true);
        if (!email) setEmailError(true);
        if (password && email) return true;
        else return false;

    };

    //유효성 검증 후 로그인 api 호출
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
                    console.log('로그인 완료');
                    alert('로그인에 성공했습니다.')
                    //로그인 성공시 id저장
                    localStorage.setItem(LS_KEY_ID, email)
                    // 로그인 성공시 메인화면이동
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
                            <input className='ouline-none h-10 px-5 border border-sm w-full' 
                            type="text" 
                            value={email} 
                            onChange={onChangeEmail} 
                            onKeyDown={(e) => checkCapsLock(e)}
                            placeholder='Email@.com' required />
                        </div>
                        <div className="errorMessageWrap">
                            {emailError &&
                                <div>올바른 이메일 주소를 입력해주세요.</div>
                            }
                        </div>



                        <div className='mr-5'>
                            <p className='text-zinc-600 font-semibold'>비밀번호</p>
                            <input className='ouline-none h-10 px-5 border border-sm w-full'
                                type={passwordInputType.type}
                                value={password}
                                onChange={onChangePassword}
                                autoComplete={passwordInputType.autoComplete}
                                onKeyDown={(e) => checkCapsLock(e)}
                                placeholder='Password'
                                required />
                        </div>
                        <div className="errorMessageWrap">
                            {passwordError && (
                                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                            )}
                        </div>
                        <div className='flex space-y-2 gap-5 mt-1'>
                        <input
                        type="checkbox"
                        name="saveEmail"
                        id="saveEmail"
                        checked={saveIDFlag}
                        onChange={handleSaveIDFlag}
                        />
                        <label>
                        <span>아이디 저장</span>
                        </label>

                            <span className="checkbox-item">
                                <input
                                    type="checkbox"
                                    checked={passwordOption}
                                    onChange={() => setPasswordOption(!passwordOption)}
                                />
                                <label>
                                    <span>비밀번호 표시</span>
                                </label>
                            </span>
                            <span 
  className={
    capsLockFlag ? "caps-lock caps-lock-on" : "caps-lock"
  }
>
  {capsLockFlag ? "Caps Lock On" : "Caps Lock Off"}
</span>
                        </div>
                        <div className='mr-5' >
                            <button className='bg-red-400 h-10 rounded-full hover:bg-red-500 duration-300 w-full' onClick={onSubmit} >로그인</button>
                            <button className='text-end '>비밀번호 찾기</button>
                        </div>
                        <p className='flex justify-center font-bold'>또는</p>
                        <div className='flex flex-row justify-center gap-10 text-3xl'>
                        <GoogleLog />
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
