import { useState } from "react";
import { navigation } from "./../constants/index";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <main className="max-sm:px-2">
      <div className="container mx-auto flex gap-5 max-sm:gap-2 justify-start items-center max-sm:pb-4">
        <a href="/">
          <img
            className="aspect-auto w-38 max-sm:w-26 h-auto"
            src="./images/logo.png"
            alt="Logo"
          />
        </a>
        {navigation.map((el) => (
          <a
            key={el.id}
            href={el.url}
            onClick={() => setActiveLink(el.title)}
            className={`text-md font-semibold p-4 max-sm:p-2 shadow-shiny ${
              activeLink === el.title ? "text-shiny" : "text-darkness"
            } hover:text-shiny transition-all`}
          >
            {el.title}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Navbar;
