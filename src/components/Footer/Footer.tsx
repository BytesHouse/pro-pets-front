import { FacebookBtn, InstagramBtn, LogoSmall, TwitterBtn } from "../ui";

export const Footer = () => {
  return (
    <footer className="bg-green h-[80px] flex items-center text-[14px] text-white">
      <div className="container flex justify-between">
        <div className="flex items-center gap-[5px]">
          <LogoSmall />
          <p className=" ">Copyright © 2023 ProPets Inc.</p>
        </div>
        <ul className="flex items-center gap-[15px]">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Language</a>
          </li>
          <li>
            <a href="/">For business</a>
          </li>
          <li>
            <a href="/">Volounteer Organizations</a>
          </li>
          <li>
            <a href="/">Terms and Conditions</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
        </ul>
        <ul className="flex items-center gap-[5px]">
          <li>
            <FacebookBtn />
          </li>
          <li>
            <TwitterBtn />
          </li>
          <li>
            <InstagramBtn />
          </li>
        </ul>
      </div>
    </footer>
  );
};
