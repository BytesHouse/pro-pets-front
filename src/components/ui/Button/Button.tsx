import { BtnProps } from "../../../interfaces/ButtonsProps";

export const Button = ({ text, onclick }: BtnProps) => {
  return (
    <button
      className="bg-green py-[8px] rounded-[10px] text-white"
      onClick={onclick}
    >
      {text}
    </button>
  );
};
