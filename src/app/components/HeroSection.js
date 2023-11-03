import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="h-screen w-full relative isolate overflow-hidden">
      <Navbar />

      <img
        src="https://i.pinimg.com/564x/35/68/aa/3568aac898980dc1d65fcb3c570bb83d.jpg"
        alt="image"
        className="absolute top-0 left-0 z-[-1] w-full h-full object-cover"
      />
      <div className="w-full h-full px-4 md:px-10 flex items-end md:items-center pb-20">
        <div className="flex flex-col gap-5 p-4 max-w-7xl w-full m-auto">
          <div className="flex gap-5 items-center">
            <div className="w-10 h-[3px] bg-yellow-500"></div>
            <p className="font-bold uppercase text-white text-xs md:text-lg">
              Dell Light
            </p>
          </div>
          <p className="text-4xl sm:text-5xl font-bold sm:font-bold text-white font-inter w-[7em] sm:w-3/4 uppercase md:normal-case lg:max-w-2xl lg:text-7xl">
            Setting a new standard for the future of pharma
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
