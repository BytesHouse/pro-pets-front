import { useState } from "react";
import { DropOption, DropdownProps } from "../../../interfaces/DropdownProps";
import { ArrowIcon } from "../ArrowIcon/ArrowIcon";

export const Dropdown = ({ options, onSelect }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<DropOption>();
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: DropOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="border rounded-[10px] relative">
      <div
        className="flex items-center justify-between  "
        onClick={toggleDropdown}
      >
        <div className="">
          <span
            className={`fflag fflag-${selectedOption?.countryFlag} ff-sixteen ff-round`}
          ></span>
          {selectedOption ? selectedOption.label : "Select an option"}
        </div>
        <div className="bg-[#DCDCDC] p-[10px] rounded-tr-[10px] rounded-br-[10px]">
          <ArrowIcon />
        </div>
      </div>
      {isOpen && (
        <ul className="p-[10px] absolute bg-white w-full border">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              <span
                className={`fflag fflag-${option.countryFlag} ff-sixteen ff-round`}
              ></span>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
