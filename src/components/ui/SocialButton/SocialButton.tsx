import { ButtonProps } from "../../../interfaces/ButtonsProps";

export const SocialButton = ({ icon, text }: ButtonProps) => {
  return (
    <button className="text-[8px] flex items-center gap-[5px] text-black bg-transparent border py-[7px] px-[15px] rounded-[10px]">
      {icon}
      {text}
    </button>
  );
};
