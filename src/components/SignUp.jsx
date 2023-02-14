import { React, useState, useCallback, useEffect } from 'react'
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from 'react-router-dom'
import axios from 'axios';
import img from '../images/photo.avif'


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
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* Form */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p- items-center">
            <form className='md:w-1/2 p-4 md:p-8' action=""  >
                <div>
                    <p className='font-bold text-2xl text-[#002D74]'>회원가입</p>
                </div>
                <div className='mr-5'>
                    <p className='text-zinc-600 text-sm pt-3 font-semibold mb-1'>이메일주소</p>
                    <input className='p-2 rounded-xl border w-full' type="text" value={email} onChange={onChangeEmail} placeholder='Email@.com' required />
                </div>
                <div className="errorMessageWrap">
                    {emailError &&
                        <div>올바른 이메일 주소를 입력해주세요.</div>
                    }
                </div>
                <div className='mr-5'>
                    <p className='text-zinc-600 text-sm  pt-3 font-semibold mb-1'>닉네임</p>
                    <input className='p-2 rounded-xl border w-full' type="text" value={nickname} onChange={onChangeUserId} placeholder='written in English' required />
                </div>
                <div className="errorMessageWrap">
                    {nicknameError &&
                        <div className='text-sm '>5글자 이상의 영어 및 숫자로 작성해주셔야 합니다</div>
                    }
                </div>

                <div className='mr-5'>
                    <p className='text-zinc-600 text-sm  pt-3 font-semibold mb-1'>비밀번호</p>
                    <input className='p-2 rounded-xl border w-full' type="password" value={password} onChange={onChangePassword} placeholder='Password' required />
                </div>
                <div className="errorMessageWrap">
                    {passwordError && (
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )}
                </div>
                <div className='mr-5'>
                    <p className='text-zinc-600 pt-3 text-sm  font-semibold mb-1' >비밀번호확인</p>
                    <input className='p-2 rounded-xl border w-full' type="password" value={confirmPassword} placeholder='Password' onChange={onChangeConfirmPassword} />
                    {confirmPasswordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <div className='flex mb-1 space-y-2 mt-1 text-sm'>
                   <input type="checkbox" name="user-term" value={term} onChange={onChangeTerm} required /><p className='ml-2'>약관동의</p>
                    {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 가입이 가능합니다.</div>}
                </div>
                <div className='mr-5' >
                    <button type='button' className='bg-[#002D74] w-full rounded-xl mt-2 text-white p-2 hover:scale-105 duration-300' onClick={onSubmit}>회원가입하기</button>
                </div>
                <div className="mb-2 mt-3 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400 mb" />
                    </div>

                <div>
                    <p className='text-sm text-zinc-500 mb-2'>아이디가 있으신가요? <span className='text-black font-bold underline underline-offset-4'><Link to="/Signin">로그인하기</Link></span></p>
                </div>
            </form>
            <div className="md:block hidden w-1/2">
                    <div className="text-muted p-10 contain"><img src={img} alt="logo" /></div>
                </div>
        </div>
    </div>
</>
)
                        }

export default SignUp
