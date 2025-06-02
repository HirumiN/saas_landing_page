import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("useEffect for scroll ran - Listener will be added."); // Log saat efek berjalan

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Array dependensi kosong sudah benar

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="uppercase transition-colors duration-500 cursor-pointer base-bold text-p4 hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 max-lg:py-4 transition-all duration-500",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]"
      )}
    >
      <div className="container flex items-center h-14 max-lg:px-5 max-w-[2040px]">
        <a className="flex-1 cursor-pointer lg:hidden z-2" href="#">
          <img src="/images/xora.svg" alt="logo" width={115} height={55} />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:bg-s2 max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:px-12 max-lg:block">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot"></div>
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      `max-lg:hidden transition-transform duration-500 cursor-pointer`
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      alt="logo"
                      height={55}
                      width={160}
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot"></div>
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] -translate-y-1/2 translate-x-1[-290px] rotate-90">
              <img
                src="/images/bg-outlines.svg"
                alt="outline"
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outline"
                width={960}
                height={380}
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
        </div>
        <button
          className="flex items-center justify-center transition-colors duration-500 border-2 rounded-full lg:hidden z-2 size-10 border-s4/25 hover:bg-s4/25"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            className="object-contain size-1/2"
            alt="magic"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
