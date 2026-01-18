import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, estate_title, price, status, area, location, image } = card;

  return (
    <div className="bg-luxury-card rounded-lg lg:rounded-2xl overflow-hidden shadow-lg">
      <div className="w-full">
        <img
          className="w-full h-48 md:h-56 lg:h-64 object-cover"
          src={image}
          alt={estate_title}
        />
      </div>

      <div className="p-4 lg:p-5">
        <span className="text-xs uppercase tracking-wider text-luxury-gold">
          {status}
        </span>

        <h2 className="font-serif text-luxury-text text-lg lg:text-xl mt-1">
          {estate_title}
        </h2>

        <p className="text-luxury-muted text-sm mt-1">{location}</p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-luxury-gold font-semibold">{price}</p>
          <p className="text-luxury-muted text-sm">Area: {area}</p>
        </div>

        <Link
          to={`/estate/${id}`}
          className="mt-4 w-full bg-luxury-gold text-luxury-bg py-2 rounded-lg font-semibold hover:scale-105 active:scale-100 cursor-pointer transition-transform duration-200 hover:shadow-2xl hover:shadow-luxury-gold flex justify-center items-center"
        >
          View Property
        </Link>
      </div>
    </div>
  );
};

export default Card;
