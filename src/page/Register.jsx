import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Authentication/Authcontext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../Authentication/firebase.console";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [photo, setPhoto] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const { emailRegister, setUser, user } = useContext(AuthContext);
  const firebaseErrors = {
    "auth/email-already-in-use": "Account already exists",
    "auth/invalid-email": "Invalid email format",
    "auth/weak-password": "Password too weak",
    "auth/user-not-found": "User not found",
    "auth/wrong-password": "Incorrect password",
    "auth/too-many-requests": "Too many attempts, try again later",
  };

  const handleShowPass = () => {
    setShowPass(prev => !prev);
  };

  console.log(user);
  const handleSubmit = e => {
    e.preventDefault();
    emailRegister(email, pass)
      .then(userCredential => {
        const result = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
        setUser({ ...result, displayName: name, photoURL: photo });
        Swal.fire({
          icon: "success",
          title: "Logged In",
          text: "Login successful",
          confirmButtonColor: "#D4AF37",
        }).then(() => {
          navigate("/");
        });
      })
      .catch(error => {
        const message = firebaseErrors[error.code] || "Something went wrong";
        setRegisterError(message);
      });
    console.log(name);
    console.log(email);
    console.log(pass);
    console.log(isCheck);
    setName("");
    setEmail("");
    setPass("");
    setPhoto("");
    setIsCheck(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-luxury-card rounded-2xl p-8 shadow-lg">
        <h1 className="font-serif text-3xl text-luxury-text text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm text-luxury-muted mb-1">
              Full Name
            </label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-luxury-gold/30 text-luxury-text focus:outline-none focus:border-luxury-gold"
            />
          </div>
          <div>
            <label className="block text-sm text-luxury-muted mb-1">
              Photo URL
            </label>
            <input
              value={photo}
              onChange={e => setPhoto(e.target.value)}
              type="text"
              placeholder="Your Photo URL"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-luxury-gold/30 text-luxury-text focus:outline-none focus:border-luxury-gold"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-luxury-muted mb-1">
              Email
            </label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-luxury-gold/30 text-luxury-text focus:outline-none focus:border-luxury-gold"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-luxury-muted mb-1">
              Password
            </label>
            <div className="relative flex justify-between items-center">
              <input
                value={pass}
                onChange={e => setPass(e.target.value)}
                type={showPass ? "text" : "password"}
                placeholder="password"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-luxury-gold/30 text-luxury-text focus:outline-none focus:border-luxury-gold"
              />
              <div
                onClick={handleShowPass}
                className="absolute cursor-pointer border border-luxury-gold p-2 right-2 top-2 rounded-full bg-luxury-gold hover:bg-white"
              >
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start gap-2">
            <input
              required
              checked={isCheck}
              onChange={e => setIsCheck(e.target.checked)}
              type="checkbox"
              id="terms"
              className="mt-1 accent-luxury-gold cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="text-sm text-luxury-muted cursor-pointer"
            >
              I agree to the{" "}
              <span className="text-luxury-gold hover:underline">
                Terms & Conditions
              </span>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-luxury-gold text-luxury-bg py-3 rounded-lg font-semibold hover:scale-105 active:scale-100 transition-transform duration-200 cursor-pointer hover:shadow-2xl hover:shadow-luxury-gold"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-luxury-muted text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-luxury-gold cursor-pointer">
            Log In
          </Link>
        </p>
        <p className="text-center font-semibold text-red-600">
          {registerError}
        </p>
      </div>
    </div>
  );
};

export default Register;
