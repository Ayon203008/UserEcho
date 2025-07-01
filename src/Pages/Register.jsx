import Lottie from "lottie-react";
import React, { use } from "react";
import RegisterLottie from "../assets/RegisterLottie.json";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Register = () => {
  const { createUser, user, setUser, GoogleSignIn } = use(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    console.log(email, password, photo, name);
    const regularExpression = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regularExpression.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your password must have an uppercase a lower case and at least 6 cracter",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({ ...result.user, displayName: name, photoURL: photo });
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <Lottie
                animationData={RegisterLottie}
                style={{ width: 500, height: 500 }}
              ></Lottie>
            </div>
            <form
              onSubmit={handleRegister}
              className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
            >
              <div className="card-body">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                  />
                  <label className="label">Photo Url</label>
                  <input
                    type="url"
                    name="photo"
                    className="input"
                    placeholder="PhotoURL"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <div>
                    <a className="link link-hover">
                      Already have an account{" "}
                      <NavLink className="text-green-600" to="/login">
                        Login
                      </NavLink>
                    </a>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <div className="divider my-2"></div>

                <button
                  onClick={handleGoogleSignIn}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
