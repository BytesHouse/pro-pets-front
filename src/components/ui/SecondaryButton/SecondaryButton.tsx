import { ButtonProps } from "../../../interfaces/ButtonsProps";

export const SecondaryButton = ({ icon, text }: ButtonProps) => {
  return (
    <button className="flex gap-[5px] text-white bg-transparent border py-[15px] px-[25px] rounded-[10px]">
      {icon}
      {text}
    </button>
  );
};
