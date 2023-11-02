const HeroSection = () => {
  return (
    <section className="h-screen w-full relative isolate overflow-hidden">
      <nav className="w-full h-[4.4rem] flex items-center px-4">
        <p className="font-black">
          <span className="text-yellow-500">Dell</span> Light
        </p>
      </nav>
      <img
        src="https://i.pinimg.com/564x/35/68/aa/3568aac898980dc1d65fcb3c570bb83d.jpg"
        alt="image"
        className="absolute top-0 left-0 z-[-1] w-full h-full object-cover"
      />
      <div className="w-full h-full px-4 flex items-end pb-40">
        <div className="flex flex-col gap-5 p-4">
          <div className="flex gap-5 items-center">
            <div className="w-10 h-[3px] bg-yellow-500"></div>
            <p className="font-bold uppercase text-white text-xs">Dell Light</p>
          </div>
          <p className="text-4xl font-semibold text-white font-inter max-w-[7em] uppercase">Setting a new standard for the future of pharma</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
