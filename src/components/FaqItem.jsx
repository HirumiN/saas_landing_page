import clsx from "clsx";

const FaqItem = ({ item, index, activeId, setActiveId }) => { //  Menerima activeId dan setActiveId sebagai props
  const active = activeId === item.id;

  const toggleAccordion = () => {
    setActiveId(active ? null : item.id); // Logika toggle dipindahkan ke sini
  };

  return (
    <div className="relative mb-16 z-2">
      <div
        className="relative flex items-center justify-between gap-10 cursor-pointer group px-7"
        onClick={toggleAccordion} // Panggil fungsi toggle
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""} {/* Perbaikan kecil: hilangkan spasi jika tidak ada "0" */}
            {index}
          </div>
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-p1"
            )}
          >
            {item.question}
          </div>
        </div>
        <div
          className={clsx(
            "faq-icon relative justify-center flex items-center size-12 border-2 rounded-full shadow-400 transition-all duration-500 group-hover:border-s4",
            active && "before:bg-p1 after:rotate-0 after:bg-p1"
          )}
        >
          <div className="rounded-full g4 size-11/12 shadow-300" />
        </div>
      </div>

      <div
        className={clsx(
          "faq-answer-container transition-all ease-in-out duration-500 overflow-hidden",
          active ? "max-h-[1000px] opacity-100" : "max-h-faq opacity-0" // Atur max-h yang cukup besar
        )}
      >
        <div className="body-3 px-7 py-3.5">
          {item.answer}
        </div>
      </div>
      <div className={clsx('g5 -bottom-7 -top-7 left-0 right-0 rounded-3xl opacity-0 transition-opacity duration-500 absolute -z-1', active && 'opacity-100')}>
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl"/>
        <div className="absolute left-8 top-0 w-40 h-0.5 bg-p1"/>
      </div>
    </div>
  );
};

export default FaqItem;