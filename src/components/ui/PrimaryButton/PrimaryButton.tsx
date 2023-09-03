import { ButtonProps } from "../../../interfaces/ButtonsProps";

export const PrimaryButton = ({ icon, text }: ButtonProps) => {
  return (
    <button className="flex gap-[5px] text-white bg-orange py-[15px] px-[25px] rounded-[10px]">
      {icon}
      {text}
    </button>
  );
};
