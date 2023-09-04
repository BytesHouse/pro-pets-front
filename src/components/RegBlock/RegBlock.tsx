import { AppleIcon, FacebookIcon, GoogleIcon, LogoAlt } from "../ui";
import { SocialButton } from "../ui/SocialButton/SocialButton";
import registration from "../../images/registration.png";
import { RegForm } from "../RegForm/RegForm";

export const RegBlock = () => {
  return (
    <div className="">
      <div className="max-w-[900px] bg-white my-[50px] mx-auto border rounded-[10px] p-[15px] flex ">
        <div className="p-[20px] flex flex-col flex-1 gap-[15px]">
          <div className="border-b">
            <LogoAlt />
            <div>
              <p className="text-[27px] font-[700]">Getting Started Now</p>
              <p className="text-[14px] font-[400]">
                Enter your credentials to access your account
              </p>
            </div>
            <div className="flex gap-[10px] py-[15px] relative">
              <SocialButton icon={<GoogleIcon />} text={"Log in with Google"} />
              <SocialButton
                icon={<FacebookIcon />}
                text={"Log in with Facebook"}
              />
              <SocialButton icon={<AppleIcon />} text={"Log in with Apple"} />
              <div className="text-[#8A8A8A] text-[12px] absolute -bottom-[10px] left-[50%] translate-x-[-50%] bg-white w-[50px] text-center">
                Or
              </div>
            </div>
          </div>
          <RegForm />
          <p>Have an account? Sing in!</p>
        </div>
        <img className="flex-1" src={registration} alt="cat and dog" />
      </div>
    </div>
  );
};
