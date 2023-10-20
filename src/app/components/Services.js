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
    bg: "#000000",
    text_color: "#fff",
  },
  {
    service: "Prescription Management",
    description:
      "Offer information about our prescription management services, including refill reminders, prescription transfer, and automated prescription transfers for added convenience.",
    bg: "#ececec",
    text_color: "#000",
  },
  {
    service: "Pharmacy Locator",
    description:
      "Include a feature or section for patients to find the nearest pharmacy locations or partner pharmacies where they can conveniently pick up their prescriptions.",
    bg: "#fac000",
    text_color: "#fff",
  },
];

const Services = () => {
  return (
    <section className=" mb-20">
      <h1 className="text-4xl font-black my-6">Services</h1>
      <div className="grid gap-6">
        {services.map(({ service, description,bg, text_color }) => {
          return (
            <div style={{
                backgroundColor: bg,
                color: text_color
            }} className={`w-full bg-[${bg}] text-[${text_color}] rounded-lg p-5 text-center gap-5 py-14 flex flex-col`}>
              <h1 className="text-2xl font-black min-w-fit">{service}</h1>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
