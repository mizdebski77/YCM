
import buble from '../common/Images/whiteBuble.svg';
import loginImg from '../common/Images/login.svg';

export default function LogIn() {
    return (
        <div className="  min-h-screen grid grid-cols-2 overflow-x-hidden">
            <div className="hero-content flex-col lg:flex-col justify-center items-center  w-full">

                <div>
                    <h1 className="text-5xl text-green text-center">LOGIN</h1>
                    <span className="text-2xl text-blue">Log in to your account and start creating your dream CV</span>
                </div>


                <div>


                    <form className="card-body max-w-2xl shadow-[0_0_20px_#b9b9b9]  rounded-2xl grid gap-4 ">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>


                        <div className="form-control">


                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="password" className="grow" value="password" />
                            </label>
                            <div className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                <a href="#" className="label-text-alt link link-hover">Create an Account</a>
                            </div>
                        </div>
                        <div className="form-control">
                            <button className="btn bg-blue border-none text-white hover:bg-lightblue md:text-md text-sm font-medium m-auto px-24 ">Login</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="bg-green relative flex justify-center items-center overflow-hidden">
                <img src={buble.src} alt='buble' className='max-w-64 absolute top-[-40px] left-[-80px]' />
                <img src={buble.src} alt='buble' className='max-w-[400px] absolute top-[240px] right-[-240px]' />
                <img src={buble.src} alt='buble' className='max-w-[620px] absolute bottom-[-120px] left-[-80px] opacity-35' />
                <img src={loginImg.src} alt='Log in' className='max-w-2xl z-10' />
            </div>

        </div>
    )
}

