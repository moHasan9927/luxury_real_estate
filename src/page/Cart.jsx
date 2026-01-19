import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const Cart = () => {
  const { items, setItems } = useContext(CartContext);
  const handleDelete = id => {
    const filterdEstate = items.filter(item => item.id !== id);
    console.log(filterdEstate);
    setItems(filterdEstate);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6 shs">
      <h1 className="font-serif text-3xl text-luxury-text mb-8">
        Your Favouries
      </h1>

      {items.length === 0 ? (
        <p className="text-luxury-muted">Your Favourites is empty.</p>
      ) : (
        <div className="space-y-6">
          {items.map(estate => (
            <div
              key={estate.id}
              className="flex flex-col md:flex-row gap-6 bg-luxury-card rounded-xl p-4 shadow-2xl"
            >
              <div className="w-full h-full md:w-56 rounded-lg overflow-hidden">
                <img
                  src={estate.image}
                  alt={estate.estate_title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-luxury-gold">
                    {estate.status}
                  </span>

                  <h2 className="font-serif text-xl text-luxury-text mt-1">
                    {estate.estate_title}
                  </h2>

                  <p className="text-luxury-muted text-sm mt-1">
                    {estate.location}
                  </p>

                  <p className="text-luxury-gold font-semibold mt-2">
                    {estate.price}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    className="mt-4 px-2 bg-luxury-gold text-luxury-bg py-2 rounded-lg font-semibold hover:scale-105 active:scale-100 cursor-pointer transition-transform duration-200 hover:shadow-2xl hover:shadow-luxury-gold flex justify-center items-center"
                    to={`/estate/${estate.id}`}
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleDelete(estate.id)}
                    className="text-sm lg:text-2xl bg-red-500 text-white p-2 rounded-full cursor-pointer hover:shadow-2xl hover:scale-105 active:scale-100 transition-transform duration-300"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
