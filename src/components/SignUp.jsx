import { React, useState, useCallback, useEffect } from 'react'
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from 'react-router-dom'
import axios from 'axios';


function SignUp() {


    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    const [nicknameError, setNicknameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);

    const onChangeUserId = (e) => {
        const userIdRegex = /^[a-zA-Z0-9]{5,}$/;
        if ((!e.target.value || (userIdRegex.test(e.target.value)))) setNicknameError(false);
        else setNicknameError(true);
        setNickname(e.target.value);
    };
    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);

        if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        if (password === e.target.value) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setConfirmPassword(e.target.value);
    };

    const onChangeEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };

    const validation = () => {
        if (!nickname) setNicknameError(true);
        if (!password) setPasswordError(true);
        if (!confirmPassword) setConfirmPasswordError(true);
        if (!email) setEmailError(true);
        if (!term) setTermError(true);

        if (nickname && password && confirmPassword && email && term) return true;
        else return false;

    };


    const onSubmit = (e) => {
        if (validation()) {
            axios({
                method: 'post',
                url: 'http://localhost:8080/auth/signup',
                data: {
                    email: email,
                    password: password,
                    nickname: nickname,
                },
                headers: {}
            })
                .then((res) => {
                    //200(OK), 201(Created)
                    // this.props.history.push('/users/login');
                    console.log('회원가입 완료');
                    window.location.replace('/Signin')
                })
                .catch((err) => {
                    //500(err)
                    console.error(err);
                });
        };
    };


    const onChangeTerm = useCallback((e) => {
        //체크박스 초기화
        setTermError(false);
        setTerm(e.target.checked);
        //state를 사용하지 않기때문에 빈값
    }, []);

    return (
        <>
            <div className='flex items-center justify-center h-screen bg-zinc-200'>
                {/* Form */}
                <div className='bg-white rounded-lg shadow-lg shadow-black/30 h-200 pl-6 w-[380px] flex flex-col justfy-center '>
                    <form className='space-y-1' action=""  >
                        <div>
                            <p className='text-2xl font-semibold tracking-wide'>회원가입</p>
                        </div>
                        <div className='mr-5'>
                            <p className='font-semibold text-zinc-600'>메일주소</p>
                            <input className='w-full h-10 px-5 border ouline-none border-sm' type="text" value={email} onChange={onChangeEmail} placeholder='Email@.com' required />
                        </div>
                        <div className="errorMessageWrap">
                            {emailError &&
                                <div>올바른 이메일 주소를 입력해주세요.</div>
                            }
                        </div>
                        <div className='mr-5'>
                            <p className='font-semibold text-zinc-600'>닉네임</p>
                            <input className='w-full h-10 px-5 border ouline-none border-sm' type="text" value={nickname} onChange={onChangeUserId} placeholder='written in English' required />
                        </div>
                        <div className="errorMessageWrap">
                            {nicknameError &&
                                <div>5글자 이상의 영어 및 숫자로 작성해주셔야 합니다</div>
                            }
                        </div>

                        <div className='mr-5'>
                            <p className='font-semibold text-zinc-600'>비밀번호</p>
                            <input className='w-full h-10 px-5 border ouline-none border-sm' type="password" value={password} onChange={onChangePassword} placeholder='Password' required />
                        </div>
                        <div className="errorMessageWrap">
                            {passwordError && (
                                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                            )}
                        </div>
                        <div className='mr-5'>
                            <p className='font-semibold text-zinc-600' >비밀번호확인</p>
                            <input className='w-full h-10 px-5 border ouline-none border-sm' type="password" value={confirmPassword} placeholder='Password' onChange={onChangeConfirmPassword} />
                            {confirmPasswordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                        </div>
                        <div className='gap-5 mt-1 space-y-2 display-right flex-right'>
                            <div ><input type="checkbox" name="user-term" value={term} onChange={onChangeTerm} required /><p>약관동의</p></div>
                            {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 가입이 가능합니다.</div>}
                        </div>
                        <div className='mr-5' >
                            <button type='button' className='w-full h-10 duration-300 bg-red-400 rounded-full hover:bg-red-500' onClick={onSubmit}>회원가입하기</button>
                        </div>
                        <p className='flex justify-center font-bold'>또는</p>
                        <div className='flex flex-row justify-center gap-10 text-3xl'>
                            <AiFillGoogleCircle className='text-red-600 rounded-full' />
                        </div>
                        <div>
                            <p className='mb-2 text-zinc-500'>이미 아이디가 있으신가요? <span className='font-bold text-black underline underline-offset-4'><Link to="/Signin">로그인하기</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
