import { useState } from "react";
import logo from "../../assets/img/logo/login.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import useAuth from "../Hook/useAuth";
import { toast } from "react-toastify"
const Login = () => {
    const [error,seterror] = useState('');
    const {UserLogin,UserGoogleLogin} = useAuth();
    const loc = useLocation();
    const navegte = useNavigate()
    const hangleLogin=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        seterror('')
        console.log(email, password)
        UserLogin(email, password)
            .then((result) => {
                console.log(result.user)
              if(result.user){
                toast.success('Successfully user Login')
                navegte(loc?.state ? loc.state:"/");
              }
            })
            .catch(error => {
                console.log(error.message)
                seterror(error.message)
                return;
            })
    };
    const googlelogin=()=>{
        UserGoogleLogin()
        .then((result) => {
            console.log(result.user);
            navegte(loc?.state ? loc.state:"/");
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200  ">
        <div className="hero-content  flex-col lg:flex-row ">
            <div className="text-center lg:text-left w-1/2 mr-10 hidden lg:block ">
                <img src={logo} alt="" />
            </div>
            <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 w-full lg:w-1/2">
                <h1 className="text-5xl p-3 font-bold">Login</h1>
                <form className="card-body"  onSubmit={hangleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <p className='text-base'>Create  an Account  <Link href="" className='text-green-600' to='/signup'>Signup</Link></p>
                        {
                            error && <p className='text-base mt-3 text-red-700'>{error}</p>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn btn-success' type="submit" value="Login" />
                    </div>
                </form>
                <div className="form-control px-7 -mt-5 mb-5 ">
                    <button onClick={googlelogin} >
                        <div className='flex justify-center items-center h-10 rounded-md border-2 p-6 bg-gray-400'>
                            <div className='flex space-x-2'>
                                <FcGoogle className='mt-1 text-2xl' ></FcGoogle>
                                <p className='text-xl font-bold'>Google</p></div>
                        </div>
                    </button>
                </div>

                <div>
                </div>

            </div>
        </div>
    </div>
    );
};

export default Login;