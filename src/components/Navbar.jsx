import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { ImCross } from "react-icons/im";
const Navbar = () => {
  const [bar, setBar] = useState(false);

  const handleClose = () => {
    setBar(false);
  };
  const handleOpen = () => {
    setBar(true);
  };

  return (
    <div className=" flex justify-between items-center max-w-7xl mx-auto p-3 lg:p-6">
      <h1 className="font-['Playfair_Display'] text-luxury-gold font-bold text-xl lg:text-2xl ">
        LUXÉ
      </h1>
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
          to="update_profile"
          className={({ isActive }) =>
            isActive
              ? "text-luxury-gold underline underline-offset-8"
              : "text-luxury-muted hover:text-luxury-gold"
          }
        >
          Updata Profile
        </NavLink>
        <NavLink
          to="favourites"
          className={({ isActive }) =>
            isActive
              ? "text-luxury-gold underline underline-offset-8"
              : "text-luxury-muted hover:text-luxury-gold"
          }
        >
          Favourites
        </NavLink>
        <NavLink
          to="cart"
          className={({ isActive }) =>
            isActive
              ? "text-luxury-gold underline underline-offset-8"
              : "text-luxury-muted hover:text-luxury-gold"
          }
        >
          Cart
        </NavLink>
      </section>
      <section className="lg:flex hidden justify-center items-center gap-3">
        <div className="border-2 border-black p-2 rounded-full font-bold bg-white text-black">
          {/* <img src="" alt="" /> */}
          <IoPersonOutline />
        </div>
        <button className="bg-luxury-gold text-luxury-bg px-3 py-2 rounded-lg font-semibold active:scale-100 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/50 cursor-pointer transition-transform duration-200 ease-in-out">
          Log In
        </button>
      </section>
      <div
        onClick={handleOpen}
        className="lg:hidden flex text-luxury-gold font-bold"
      >
        <TiThMenu />
      </div>

      {bar && (
        <div
          className="
        fixed inset-0 z-50
        backdrop-blur-xl
        bg-black/40
        flex justify-between
        p-6
        "
        >
          <section className="flex flex-col">
            <NavLink
              onClick={handleClose}
              to="/"
              className="text-luxury-gold text-xl py-3"
            >
              Home
            </NavLink>

            <NavLink
              onClick={handleClose}
              to="/update_profile"
              className="text-luxury-gold  text-xl py-3"
            >
              Update Profile
            </NavLink>

            <NavLink
              onClick={handleClose}
              to="/favourites"
              className="text-luxury-gold text-xl py-3"
            >
              Favourites
            </NavLink>

            <NavLink
              onClick={handleClose}
              to="/cart"
              className="text-luxury-gold text-xl py-3"
            >
              Cart
            </NavLink>

            <section className="flex mt-5 items-center gap-3">
              <div className="border-2 border-black p-2 rounded-full font-bold bg-white text-black">
                {/* <img src="" alt="" /> */}
                <IoPersonOutline />
              </div>
              <button className="bg-luxury-gold text-luxury-bg px-3 py-2 rounded-lg font-semibold active:scale-100 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/50 cursor-pointer transition-transform duration-200 ease-in-out">
                Log In
              </button>
            </section>
          </section>
          <section className="text-luxury-gold" onClick={handleClose}>
            <ImCross />
          </section>
        </div>
      )}
    </div>
  );
};

export default Navbar;
