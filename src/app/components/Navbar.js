const Navbar = () => {
  const pageLinks = [
    {
      sectionName: "Faqs",
      sectionLink: "#faqs",
    },
    {
      sectionName: "Services",
      sectionLink: "#services",
    },
    {
      sectionName: "Contacts",
      sectionLink: "#contact",
    },
    {
      sectionName: "Our Story",
      sectionLink: "#story",
    },
  ];
  return (
    <nav className="w-full h-[4.4rem] lg:h-[6rem] flex items-center px-4 lg:px-20 m-auto justify-between">
      <p className="font-black lg:text-2xl text-lg">
        <span className="text-yellow-500">Dell</span> Light
      </p>

      <div className="text-yellow-400 hidden lg:flex gap-10">
        {pageLinks.map(({ sectionName, sectionLink }) => (
          <a className="text-xl font-bold" href={sectionLink}>{sectionName}</a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
