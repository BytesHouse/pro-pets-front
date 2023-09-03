import {
  CatInBoxIcon,
  Logo,
  PawIcon,
  PrimaryButton,
  SecondaryButton,
} from "../ui";

export const Header = () => {
  return (
    <header className="h-[80px] bg-green flex items-center">
      <div className="container flex justify-between">
        <Logo />
        <div className="flex gap-[15px]">
          <SecondaryButton icon={<CatInBoxIcon />} text={"I found a Pet"} />
          <PrimaryButton icon={<PawIcon />} text={"I lost a Pet"} />
        </div>
      </div>
    </header>
  );
};
