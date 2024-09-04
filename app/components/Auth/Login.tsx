import Image from "next/image"
import Link from "next/link"
import { MdOutlinePassword } from "react-icons/md"
import google from '../../assets/google.svg'
import facebook from '../../assets/facebook.svg'
import otp from '../../assets/otp.svg'
import auth from '../../assets/auth-bg.png';
import { useEffect, useRef, useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { MdLocalPhone } from "react-icons/md";


const Login = () => {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(0);

    const nextSection = () => {
        setActive(active + 1);
    }

    useEffect(() => {
        const sign_in_btn = document.querySelector<HTMLSpanElement>("#sign-in-btn");
        const sign_up_btn = document.querySelector<HTMLSpanElement>("#sign-up-btn");
        const container = document.querySelector<HTMLDivElement>(".container");
        const sign_in_btn2 = document.querySelector<HTMLDivElement>("#sign-in-btn2");
        const sign_up_btn2 = document.querySelector<HTMLDivElement>("#sign-up-btn2");

        sign_up_btn?.addEventListener("click", () => {
            container?.classList.add("sign-up-mode");
        });

        sign_in_btn?.addEventListener("click", () => {
            container?.classList.remove("sign-up-mode");
        });

        sign_up_btn2?.addEventListener("click", () => {
            container?.classList.add("sign-up-mode2");
        });
        
        sign_in_btn2?.addEventListener("click", () => {
            container?.classList.remove("sign-up-mode2");
        });

        // Cleanup event listeners on component unmount
        return () => {
            sign_up_btn?.removeEventListener("click", () => {
                container?.classList.add("sign-up-mode");
            });
            sign_in_btn?.removeEventListener("click", () => {
                container?.classList.remove("sign-up-mode");
            });
            sign_up_btn2?.removeEventListener("click", () => {
                container?.classList.add("sign-up-mode2");
            });
            sign_in_btn2?.removeEventListener("click", () => {
                container?.classList.remove("sign-up-mode2");
            });
        };
    }, []);

    return (
        <div className="login">
            <div className="container">
                <div className="signin-signup">
                    <form action="" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <MdLocalPhone className="i" />
                            <input type="number" placeholder="Phone" />
                        </div>
                        <div className="input-field">
                            <MdOutlinePassword className="i" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" className="btn" />
                        <p className="social-text">Or Sign in with social platform</p>
                        <div className="social-media">
                            <span className="social-icon">
                                <Image className="google" width={30} height={30} alt="img" src={google} />
                            </span>
                            <span className="social-icon">
                                <Image className="facebook" width={30} height={30} alt="img" src={facebook} />
                            </span>
                            <span className="social-icon">
                                <Image className="otp" width={30} height={30} alt="img" src={otp} />
                            </span>
                        </div>
                        <p className="account-text">Do not have an account? <a href="#" id="sign-up-btn2">Sign up</a></p>
                    </form>
                    <form action="" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <MdLocalPhone className="i" />
                            <input type="number" placeholder="Phone" />
                        </div>
                        <div className="input-field">
                            <MdOutlinePassword className="i" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" onClick={nextSection} value="Countine" className="btn" />
                        <p className="social-text">Or Sign in with social platform</p>
                        <div className="social-media">
                            <span className="social-icon">
                                <Image className="google" width={30} height={30} alt="img" src={google} />
                            </span>
                            <span className="social-icon">
                                <Image className="facebook" width={30} height={30} alt="img" src={facebook} />
                            </span>
                        </div>
                        <p className="account-text">Already have an account? <a href="#" id="sign-in-btn2">Sign in</a></p>
                    </form>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Swapp, Sell, and Buy</h3>
                            <p>easily!</p>
                            <button className="btn" id="sign-in-btn">Sign in</button>
                        </div>
                        <Image width={100} height={100} src={auth} alt="img" className="image" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Swapp, Sell, and Buy</h3>
                            <p>easily!</p>
                            <button className="btn" id="sign-up-btn">Sign up</button>
                        </div>
                        <Image width={100} height={100} src={auth} alt="img" className="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login