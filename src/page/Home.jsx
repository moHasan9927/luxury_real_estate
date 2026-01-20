import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Home = () => {
  const cards = useLoaderData();

  return (
    <div className=" p-3 lg:p-6 ">
      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={3000}
        className="w-full h-56 md:h-80 lg:h-150 rounded-lg md:rounded-lg lg:rounded-xl overflow-hidden"
      >
        {/* SLIDE 1 */}
        <SwiperSlide
          className="relative cursor-pointer overflow-hidden rounded-l-lg md:rouded-r-lg
         lg:rounded-l-xl "
        >
          <img
            className="w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1618634494100-d983a1020b36?q=80&w=2115&auto=format&fit=crop"
            alt=""
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-luxury-gold font-bold text-xs md:text-sm uppercase tracking-widest mb-2">
              Exclusive Villas
            </p>
            <h1 className="font-serif text-white text-lg md:text-4xl lg:text-5xl mb-2">
              Luxury Living Redefined
            </h1>
            <p className="text-white/80 max-w-xl text-sm md:text-base">
              Handpicked beachfront villas for refined lifestyles.
            </p>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide className="relative cursor-pointer">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1598512199776-e0747530204a?q=80&w=2059&auto=format&fit=crop"
            alt=""
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-luxury-gold font-bold text-xs md:text-sm uppercase tracking-widest mb-2">
              Premium Penthouses
            </p>
            <h1 className="font-serif text-white text-lg md:text-4xl lg:text-5xl mb-2">
              Elevated Urban Living
            </h1>
            <p className="text-white/80 max-w-xl text-sm md:text-base">
              Iconic city views with world-class amenities.
            </p>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide
          className="relative cursor-pointer rounded-r-lg md:rouded-r-lg
         lg:rounded-r-xl overflow-hidden"
        >
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1533282960533-51328aa49826?q=80&w=2142&auto=format&fit=crop"
            alt=""
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-luxury-gold font-bold text-xs md:text-sm uppercase tracking-widest mb-2">
              Private Estates
            </p>
            <h1 className="font-serif text-white text-lg md:text-4xl lg:text-5xl mb-2">
              Homes Beyond Expectation
            </h1>
            <p className="text-white/80 max-w-xl text-sm md:text-base">
              Timeless architecture in the world’s most prestigious locations.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <h1 className="text-center mt-5 pb-3 md:pb-4 lg:pb-6 lg:mt-20 text-lg lg:text-4xl font-['Playfair_Display'] text-luxury-gold border-b border-luxury-gold/30 font-semibold">
        Explore Our Properties
      </h1>
      {/* cards */}
      <section className="my-4 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4  lg:gap-6 ">
        {cards.map(card => (
          <Card key={card.id} card={card}></Card>
        ))}
      </section>
    </div>
  );
};

export default Home;
