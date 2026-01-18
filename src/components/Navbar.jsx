import { IoPersonOutline, IoSunny, IoMoon } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useContext, useState } from "react";
import ThemeContext from "../Context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const [bar, setBar] = useState(false);

  const handleClose = () => setBar(false);
  const handleOpen = () => setBar(true);
  const handleSetTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex justify-between items-center  p-3 lg:p-6 bg-luxury-bg/20 backdrop-blur-2xl sticky top-0 z-40 border-b border-luxury-gold/20">
      <h1 className="font-['Playfair_Display'] text-luxury-gold font-bold text-2xl lg:text-3xl">
        LUXÉ
      </h1>

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
          to="/update_profile"
          className={({ isActive }) =>
            isActive
              ? "text-luxury-gold underline underline-offset-8"
              : "text-luxury-muted hover:text-luxury-gold"
          }
        >
          Update Profile
        </NavLink>

        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            isActive
              ? "text-luxury-gold underline underline-offset-8"
              : "text-luxury-muted hover:text-luxury-gold"
          }
        >
          Favourites
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "text-luxury-gold underline underline-offset-8"
              : "text-luxury-muted hover:text-luxury-gold"
          }
        >
          Cart
        </NavLink>
      </section>

      {/* DESKTOP ACTIONS */}
      <section className="lg:flex hidden justify-center items-center gap-3">
        <div
          onClick={handleSetTheme}
          className="text-3xl text-luxury-gold cursor-pointer"
        >
          {theme === "light" ? <IoSunny /> : <IoMoon />}
        </div>

        <div className="border-2 border-luxury-gold bg-luxury-gold text-luxury-bg p-2 rounded-full font-bold ">
          <IoPersonOutline />
        </div>

        <button className="bg-luxury-gold text-luxury-bg px-3 py-2 rounded-lg font-semibold hover:scale-105 transition-transform active:scale-100 duration-200 cursor-pointer">
          Log In
        </button>
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
              to="/update_profile"
              className={({ isActive }) =>
                ` text-xl py-3 border-b ${isActive ? "bg-luxury-gold text-luxury-bg px-2 " : "text-luxury-gold"}`
              }
            >
              Update Profile
            </NavLink>

            <NavLink
              onClick={handleClose}
              to="/favourites"
              className={({ isActive }) =>
                ` text-xl py-3 border-b ${isActive ? "bg-luxury-gold text-luxury-bg px-2 " : "text-luxury-gold"}`
              }
            >
              Favourites
            </NavLink>

            <NavLink
              onClick={handleClose}
              to="/cart"
              className={({ isActive }) =>
                ` text-xl py-3 border-b ${isActive ? "bg-luxury-gold text-luxury-bg px-2 " : "text-luxury-gold"}`
              }
            >
              Cart
            </NavLink>

            <section className="flex mt-5 items-center gap-3">
              <div className="border-2 border-luxury-gold bg-luxury-gold text-luxury-bg p-2 rounded-full font-bold ">
                <IoPersonOutline />
              </div>
              <button className="bg-luxury-gold text-luxury-bg px-3 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-200 cursor-pointer">
                Log In
              </button>
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
