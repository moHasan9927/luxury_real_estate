import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import AuthContext from "../Authentication/Authcontext";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { emailLogin, setUser, user } = useContext(AuthContext);
  console.log(user);

  const handleSubmit = e => {
    e.preventDefault();
    emailLogin(email, pass)
      .then(userCredential => {
        // Signed in
        const result = userCredential.user;
        setUser(result);
        navigate("/");
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    setEmail("");
    setPass("");
  };
  const handleShowPass = () => {
    setShowPass(prev => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-luxury-card rounded-2xl p-8 shadow-lg">
        <h1 className="font-serif text-3xl text-luxury-text text-center mb-6">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
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

          <button
            type="submit"
            className="w-full bg-luxury-gold text-luxury-bg py-3 rounded-lg font-semibold hover:scale-105 active:scale-100 transition-transform duration-200 hover:shadow-2xl hover:shadow-luxury-gold cursor-pointer"
          >
            Log In
          </button>
        </form>

        <div className="flex  justify-center items-center flex-col">
          <h1 className="text-center text-sm my-2 text-luxury-muted">
            Sign up using
          </h1>
          <div className=" border border-luxury-gold p-2 bg-luxury-gold rounded-full text-white cursor-pointer hover:scale-105 active:scale-95 transition-transform hover:shadow-2xl hover:shadow-luxury-gold">
            <FaGoogle />
          </div>
        </div>
        <p className="text-sm text-luxury-muted text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-luxury-gold cursor-pointer">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
