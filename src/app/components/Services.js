const services = [
  {
    service: "Home Delivery Services",
    description:
      "Explain how patients can access our home delivery services, ensuring that medications are conveniently and safely delivered to their doorsteps.",
    bg: "#ececec",
    text_color: "#000",
  },
  {
    service: "Online Ordering",
    description:
      "Describe the online ordering process for medications, including the steps patients need to follow and the security measures in place to protect their information.",
    bg: "#191a1c",
    text_color: "#fff",
  },
  {
    service: "Prescription Management",
    description:
      "Offer information about our prescription management services, including refill reminders, prescription transfer, and automated prescription transfers for added convenience.",
    bg: "#ececec",
    text_color: "#000",
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl w-full m-auto h-auto py-10 xl:h-screen lg:mb-10 flex flex-col gap-10 lg:gap-20 px-4">
      <header>
        <h1 className="font-black text-3xl lg:text-5xl  text-[#1e1e1e] my-5 lg:my-10">
          What we offer
        </h1>
        <p className="max-w-2xl md:text-lg text-[#3a3a3a]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          harum totam laborum modi eaque, et dolorem quo natus illum blanditiis
          reprehenderit, soluta officiis maiores iste deserunt alias itaque.
          Quisquam, at!
        </p>
      </header>
      <div className="flex flex-col gap-6">
        <div className="w-full grid md:grid-cols-2 ">
          <div className="flex flex-col gap-3 bg-zinc-100 p-5 max-w-xl">
            <span className="text-sm font-black text-yellow-400 md:text-md">
              01
            </span>
            <h1 className="font-semibold text-lg md:text-2xl">
              Online Ordering
            </h1>
            <p className="text-[#3e3e3e] text-lg leading-loose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem nam facere ut, maiores placeat dolorum laboriosam
              laudantium maxime esse corporis amet quis. Minima deserunt
              aliquid, nisi esse odio cumque reiciendis!
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ service, description }, index) => {
            return (
              <div className="flex flex-col gap-3 bg-zinc-100 p-5 max-w-xl">
                <span className="text-sm font-black text-yellow-400 md:text-md">
                  0{index + 2}
                </span>
                <h1 className="font-semibold text-lg md:text-2xl">{service}</h1>
                <p className="text-[#3e3e3e] text-lg leading-loose">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
