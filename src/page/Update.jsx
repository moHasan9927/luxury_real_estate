import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Authentication/Authcontext";
import { updateProfile } from "firebase/auth";
import auth from "../Authentication/firebase.console";
import { IoPersonOutline } from "react-icons/io5";
const Update = () => {
  const { user, loading, setUser } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  useEffect(() => {
    if (user) {
      setPhoto(user.photoURL || "");
      setName(user.displayName || "");
    }
  }, [user]);

  const handleShowForm = () => {
    setShowForm(prev => !prev);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setShowForm(false);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
    setUser({ ...user, displayName: name, photoURL: photo });
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-lg text-luxury-text bg-luxury-bg">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center py-10 px-4 bg-luxury-bg text-luxury-text">
      <div className="w-full max-w-md bg-luxury-card shadow-lg rounded-2xl p-6 flex flex-col items-center">
        {user?.photoURL ? (
          <img
            className="h-40 w-40 rounded-full object-cover mb-4 border border-luxury-gold"
            src={user.photoURL}
            alt="Profile"
          />
        ) : (
          <div className="h-40 w-40 flex items-center justify-center rounded-full border border-luxury-gold text-luxury-muted text-6xl">
            <IoPersonOutline />
          </div>
        )}

        <h2 className="text-xl font-semibold mb-1 text-luxury-gold">
          {user?.displayName || "No name provided"}
        </h2>

        <p className="text-luxury-muted mb-4">{user?.email}</p>

        <button
          onClick={handleShowForm}
          className={`mt-3 px-4 py-2 rounded-lg ${showForm ? "bg-red-600" : "bg-luxury-gold"} text-luxury-text hover:scale-105 active:scale-100 transition cursor-pointer`}
        >
          {showForm ? "Cancle Edit" : "Edit Profile"}
        </button>
      </div>

      {showForm && (
        <div className="w-full max-w-md bg-luxury-card shadow-md rounded-xl p-6 mt-6">
          <h3 className="text-xl font-semibold mb-4 text-center text-luxury-gold">
            Edit Profile
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-luxury-muted mb-1">
                Full Name
              </label>
              <input
                required
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                className="w-full px-3 py-2 rounded-lg border border-luxury-muted bg-luxury-surface text-luxury-text focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-luxury-muted mb-1">
                Photo URL
              </label>
              <input
                value={photo}
                onChange={e => setPhoto(e.target.value)}
                type="text"
                className="w-full px-3 py-2 rounded-lg border border-luxury-muted bg-luxury-surface text-luxury-text focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                placeholder="https://example.com/photo.jpg"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-luxury-gold text-luxury-bg hover:scale-105 active:scale-100 transition cursor-pointer"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Update;
