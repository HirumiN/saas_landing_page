import clsx from "clsx";
import Marker from "./Marker";

export const Button = ({ icon, children, href, containerClassName, onClick, markerFill }) => {
  const Inner = () => {
    return (
      <>
      <span className="relative flex items-center px-4 g4 rounded-2xl min-h-[60px] inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>
        {icon && (
          <img src={icon} alt="circle" className="z-10 object-contain mr-5 size-10"/>
        )}
        <span className="relative uppercase z-2 base-bold font-poppins text-p1">{children}</span>
      </span>
      <span className="glow-before glow-after"/>
      </>
    );
  };
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 rounded-2xl g5 shadow-500 group",
        containerClassName
      )}
      href={href}
    >

      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 rounded-2xl g5 shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
      
    </button>
  );
};
