import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CartContext from "../Context/CartContext";
import Swal from "sweetalert2";

const EstateDetails = () => {
  const { id } = useParams();
  const estates = useLoaderData();
  const estate = estates.find(item => item.id === Number(id));
  const { items, setItems } = useContext(CartContext);
  console.log(items);

  const handleAddCart = estate => {
    const alreadyAdded = items.find(item => item.id === estate.id);

    if (alreadyAdded) {
      Swal.fire({
        icon: "warning",
        title: "Already Added",
        text: "This property is already in your cart.",
        confirmButtonColor: "#D4AF37",
      });
      return;
    }

    setItems(prev => [...prev, estate]);

    Swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: "The property has been added to your cart successfully.",
      confirmButtonColor: "#D4AF37",
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6">
      {/* IMAGE SECTION */}
      <div className="w-full h-64 md:h-96 lg:h-150 rounded-xl overflow-hidden">
        <img
          src={estate.image}
          alt={estate.estate_title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* INFO SECTION */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-center">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <span className="inline-block text-xs uppercase tracking-wider text-luxury-gold mb-2">
            {estate.status}
          </span>

          <h1 className="font-serif text-3xl lg:text-4xl text-luxury-text">
            {estate.estate_title}
          </h1>

          <p className="text-luxury-muted mt-2">{estate.location}</p>

          <p className="mt-6 text-luxury-text leading-relaxed">
            {estate.description}
          </p>

          {/* FACILITIES */}
          <div className="mt-8">
            <h3 className="font-serif text-xl text-luxury-text mb-3">
              Facilities
            </h3>

            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {estate.facilities?.map((facility, index) => (
                <li
                  key={index}
                  className="text-sm text-luxury-muted bg-luxury-card px-4 py-2 rounded-lg"
                >
                  {facility}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-luxury-card p-6 rounded-xl h-min shadow">
          <p className="text-luxury-muted text-sm">Price</p>

          <p className="text-luxury-gold text-2xl font-semibold mt-1">
            {estate.price}
          </p>
          <p className="text-luxury-gold text-2xl font-semibold mt-1">
            Selling Price: ${estate.selling_price}
          </p>

          <div className="mt-4 text-sm text-luxury-muted">
            <p>Area: {estate.area}</p>
          </div>

          <button className="mt-6 w-full bg-luxury-gold text-luxury-bg py-3 rounded-lg font-semibold cursor-pointer hover:scale-105 active:scale-100 transition-transform duration-200">
            Contact Agent
          </button>
          <button
            onClick={() => handleAddCart(estate)}
            className="mt-6 w-full bg-luxury-gold text-luxury-bg py-3 rounded-lg font-semibold cursor-pointer hover:scale-105 active:scale-100 transition-transform duration-200"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
