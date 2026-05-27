import { useState } from "react";

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("평점 필터");

  return (
    <div className="relative w-32">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black border border-white/50 text-white rounded-md px-3 py-2 text-body-medium w-full flex justify-between items-center"
      >
        {selected}
        <span>▾</span>
      </button>

      {isOpen && (
        <ul className="absolute top-full border border-white/50 mt-1 w-full bg-black text-white rounded-md overflow-hidden z-10">
          {[
            "전체",
            "1점대",
            "2점대",
            "3점대",
            "4점대",
            "5점대",
            "6점대",
            "7점대",
            "8점대",
            "9점대",
          ].map((item) => (
            <li
              key={item}
              onClick={() => {
                setSelected(item);
                setIsOpen(false);
              }}
              className="px-3 py-2 hover:bg-gray-700 cursor-pointer text-body-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
