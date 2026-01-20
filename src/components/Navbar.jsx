import { IoPersonOutline, IoSunny, IoMoon } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useContext, useState } from "react";
import ThemeContext from "../Context/ThemeContext";
import AuthContext from "../Authentication/Authcontext";
import Swal from "sweetalert2";
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { userSignOut, user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [bar, setBar] = useState(false);
  const handleClose = () => setBar(false);
  const handleOpen = () => setBar(true);
  const handleLogOut = () => {
    userSignOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Signed Out",
          text: "Sign out successful",
          confirmButtonColor: "#D4AF37",
        }).then(() => {
          navigate("/");
        });
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message,
          confirmButtonColor: "#D4AF37",
        });
      });
  };
  const handleSetTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex justify-between items-center  p-3 lg:p-6 bg-luxury-bg/20 backdrop-blur-2xl sticky top-0 z-40 border-b border-luxury-gold/20">
      <Link
        to="/"
        className="font-['Playfair_Display'] text-luxury-gold font-bold text-2xl lg:text-3xl"
      >
        LUXÉ
      </Link>

      {/* DESKTOP MENU */}
      <section className="lg:flex hidden justify-between items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-luxury-gold underline underline-offset-8"
              : "text-luxury-muted hover:text-luxury-gold"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "text-luxury-gold underline underline-offset-8"
              : "text-luxury-muted hover:text-luxury-gold"
          }
        >
          Favourites
        </NavLink>

        {!loading && (
          <>
            {user ? (
              <NavLink
                to="/update_profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-luxury-gold underline underline-offset-8"
                    : "text-luxury-muted hover:text-luxury-gold"
                }
              >
                Update Profile
              </NavLink>
            ) : (
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "text-luxury-gold underline underline-offset-8"
                    : "text-luxury-muted hover:text-luxury-gold"
                }
              >
                Register
              </NavLink>
            )}
          </>
        )}
      </section>

      {/* DESKTOP ACTIONS */}
      <section className="lg:flex hidden justify-center items-center gap-3">
        <div
          onClick={handleSetTheme}
          className="text-3xl text-luxury-gold cursor-pointer"
        >
          {theme === "light" ? <IoSunny /> : <IoMoon />}
        </div>

        {user?.photoURL ? (
          <img
            className="h-10 w-10 rounded-full object-cover "
            src={user.photoURL}
            alt="Profile"
          />
        ) : (
          <div className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-luxury-gold bg-luxury-gold text-luxury-bg font-bold">
            <IoPersonOutline />
          </div>
        )}

        {user ? (
          <Link
            onClick={handleLogOut}
            to="/"
            className="bg-luxury-gold text-luxury-bg px-3 py-2 rounded-lg font-semibold hover:scale-105 transition-transform active:scale-100 duration-200 cursor-pointer"
          >
            Log Out
          </Link>
        ) : (
          <Link
            to="/login"
            className="bg-luxury-gold text-luxury-bg px-3 py-2 rounded-lg font-semibold hover:scale-105 transition-transform active:scale-100 duration-200 cursor-pointer"
          >
            Log In
          </Link>
        )}
      </section>

      {/* MOBILE MENU BUTTON */}
      <div className="lg:hidden flex gap-3 text-luxury-gold text-2xl">
        <div onClick={handleSetTheme}>
          {theme === "light" ? (
            <IoSunny className="active:rotate-180 transition-all duration-300" />
          ) : (
            <IoMoon />
          )}
        </div>
        <div onClick={handleOpen}>
          <TiThMenu />
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {bar && (
        <div className="h-screen fixed inset-0 z-50 backdrop-blur-3xl bg-luxury-bg flex justify-between p-6">
          <section className="flex flex-col">
            <NavLink
              onClick={handleClose}
              to="/"
              className={({ isActive }) =>
                ` text-xl py-3 border-b ${isActive ? "bg-luxury-gold text-luxury-bg px-2 " : "text-luxury-gold"}`
              }
            >
              Home
            </NavLink>

            <NavLink
              onClick={handleClose}
              to="/cart"
              className={({ isActive }) =>
                ` text-xl py-3 border-b ${isActive ? "bg-luxury-gold text-luxury-bg px-2 " : "text-luxury-gold"}`
              }
            >
              Favouries
            </NavLink>

            {!loading && (
              <>
                {user ? (
                  <NavLink
                    onClick={handleClose}
                    to="/update_profile"
                    className={({ isActive }) =>
                      ` text-xl py-3 border-b ${
                        isActive
                          ? "bg-luxury-gold text-luxury-bg px-2 "
                          : "text-luxury-gold"
                      }`
                    }
                  >
                    Update Profile
                  </NavLink>
                ) : (
                  <NavLink
                    onClick={handleClose}
                    to="/register"
                    className={({ isActive }) =>
                      ` text-xl py-3 border-b ${
                        isActive
                          ? "bg-luxury-gold text-luxury-bg px-2 "
                          : "text-luxury-gold"
                      }`
                    }
                  >
                    Register
                  </NavLink>
                )}
              </>
            )}

            <section className="flex mt-5 items-center gap-3">
              <div className="border-2 border-luxury-gold bg-luxury-gold text-luxury-bg p-2 rounded-full font-bold ">
                <IoPersonOutline />
              </div>
              {user ? (
                <Link
                  to="/"
                  onClick={() => {
                    handleClose();
                    handleLogOut();
                  }}
                  className="bg-luxury-gold text-luxury-bg px-3 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  Log out
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={handleClose}
                  className="bg-luxury-gold text-luxury-bg px-3 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  Log In
                </Link>
              )}
            </section>
          </section>

          <section className="text-luxury-gold text-2xl" onClick={handleClose}>
            <ImCross />
          </section>
        </div>
      )}
    </div>
  );
};

export default Navbar;
