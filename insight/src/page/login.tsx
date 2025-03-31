import CustomTextField from '../component/textfield'
import CustomButton from '../component/button'
import googleIcon from '../../public/icons/icons8-google-96.png'

function LoginPage() {
    return (
        <div className='p-2.5 md:p-26 lg:h-full lg:flex lg:justify-center lg:items-center'>
            <div className='lg:border lg:p-16 lg:rounded-lg lg:border-slate-200 lg:shadow-lg'>
                <h1 className='text-center text-xl font-semibold pt-3 pb-3'>Welcome Log In to Continue!</h1>
                <form>
                    <div className='grid grid-cols-1 gap-2'>
                        <div className='grid grid-cols-1 gap-5'>
                            <CustomTextField name='email' type='email' placeholder='sample@sample.com' label='Email' />
                            <CustomTextField name='password' type='password' placeholder='Secret Key' label='Secret Key' />
                            <div className='col-2s-2 grid grid-cols-2 gap-2'>
                                <div className='flex justify-items-start  gap-1'>
                                    <input type='checkbox' name='showpassword' />
                                    <label htmlFor="showpassword" className='text-sm'>Show Password</label>
                                </div>
                                <div className='justify-items-end'>
                                    <a href="#" className='flex'>
                                        <p className='text-sm italic text-blue-500'>Forgot password?</p>
                                    </a>
                                </div>
                            </div>
                            <CustomButton type='submit' label='Log In' />
                        </div>
                        <hr />
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
    )
}

export default LoginPage