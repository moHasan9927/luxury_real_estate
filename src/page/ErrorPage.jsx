import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <div className="flex gap-3 text-2xl text-luxury-gold font-bold">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
      <Link
        to="/"
        className="
    bg-luxury-gold text-black px-3 py-2 text-xl rounded-xl font-semibold
    transition-transform duration-300 ease-out
    hover:scale-105
    hover:shadow-2xl hover:shadow-luxury-gold/50
    active:scale-100
  "
      >
        Home
      </Link>
    </div>
  );
}
