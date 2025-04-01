
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import googleIcon from '../../public/icons/icons8-google-96.png';
import CustomTextField from '../component/textfield';
import CustomButton from '../component/button';
import NavBar from '../component/navbar';


function LoginPage() {

    const [passVisible, setPassVisible] = useState(false);

    const nav = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        nav('/dashboard');
    }

    const visHandler = () => {
        setPassVisible(!passVisible);
    }

    return (
        <>
            <div>
                <ErrorBoundary fallback={<NavBar title="Insight" nav_component={["Somethign went wrong!"]} links={["#"]} />}>
                    <NavBar title="Insight" nav_component={["Sign In"]} links={["#"]} />
                </ErrorBoundary>
                <div className='p-2.5 md:p-26 lg:h-full lg:flex lg:justify-center lg:items-center'>
                    <div className='lg:border lg:p-16 xl:p-20 lg:rounded-lg lg:border-slate-200 lg:shadow-lg'>
                        <h1 className='text-center font-semibold pt-3 pb-3 xl:pb-10 xl:text-2xl'>Welcome! Start your day with a smile.</h1>
                        <form className='lg:w-100' onSubmit={handleSubmit}>
                            <div className='grid grid-cols-1 gap-2'>
                                <div className='grid grid-cols-1 gap-5'>
                                    <CustomTextField name='email' type='email' placeholder='sample@sample.com' label='Email' />
                                    <div>
                                        <h3>Password</h3>
                                        <input type={!passVisible ? "password" : "text"} name="password" className='border-2 border-slate-300 w-full p-1.5 rounded-sm' />
                                    </div>
                                    <div className='col-2s-2 grid grid-cols-2 gap-2 pr-5 pl-5'>
                                        <div className='flex justify-items-start  gap-1'>
                                            <input type='checkbox' name='showpassword' onClick={visHandler} />
                                            <label htmlFor="showpassword" className='text-sm'>{!passVisible ? "Show Password" : "Hide Password"}</label>
                                        </div>
                                        <div className='justify-items-end'>
                                            <a href="#" className='flex'>
                                                <p className='text-sm italic text-blue-500'>Forgot password?</p>
                                            </a>
                                        </div>
                                    </div>
                                    <CustomButton type='submit' label='Log In' />
                                </div>
                                <hr className='border border-slate-300 mt-3' />
                                <p className='justify-self-center'> or </p>
                                <div>
                                    <button type="button" className='bg-white border-slate-200 text-black hover:bg-black hover:text-white focus:border-slate-400  border-2 p-2 rounded-md w-full'>
                                        <div className='flex justify-center items-center'>
                                            <img src={googleIcon} alt="..." className='w-9 h-9' />
                                            <p className='text-1xl font-semibold'>Sign in with Google</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;