import { useState } from "react";
import { RATING_OPTIONS } from "@/shared/constants/constants";

interface FilterDropdownProps {
  selected: number | null;
  onSelect: (value: number | null) => void;
}

const FilterDropdown = ({ selected, onSelect }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel = RATING_OPTIONS.find((opt) => opt.value === selected)?.label ?? "평점 필터";

  return (
    <div className="relative w-32">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black border border-white/50 text-white rounded-md px-3 py-2 text-body-medium w-full flex justify-between items-center"
      >
        {selectedLabel}
        <span>▾</span>
      </button>

      {isOpen && (
        <ul className="absolute top-full border border-white/50 mt-1 w-full bg-black text-white rounded-md overflow-hidden z-10">
          {RATING_OPTIONS.map((item) => (
            <li
              key={item.label}
              onClick={() => {
                onSelect(item.value);
                setIsOpen(false);
              }}
              className="px-3 py-2 hover:bg-gray-700 cursor-pointer text-body-medium"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
