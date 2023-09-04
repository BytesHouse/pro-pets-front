import { useState } from "react";
import { Dropdown } from "../ui";
import { Button } from "../ui/Button/Button";

export const RegForm = () => {
  const [country, setCountry] = useState();
  const opt = [
    { value: "test1", label: "Moldova", countryFlag: "MD" },
    { value: "test2", label: "Russia", countryFlag: "RU" },
    { value: "test3", label: "Ukraine", countryFlag: "UA" },
  ];
  return (
    <div>
      <form className="flex flex-col gap-[5px]">
        <label className="text-[12px]" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          type="text"
          placeholder="Enter your email or number"
          className="border p-[5px] rounded-[10px]"
        />
        <label className="text-[12px]" htmlFor="name">
          Name
        </label>
        <input
          className="border p-[5px] rounded-[10px]"
          id="name"
          type="text"
          placeholder="Enter your name"
        />
        <label className="text-[12px]" htmlFor="password">
          Password
        </label>
        <input
          className="border p-[5px] rounded-[10px]"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
        <label className="text-[12px]">Select your Country</label>
        <Dropdown options={opt} onSelect={setCountry} />
        <div className="flex gap-[5px]">
          <input id="terms" type="checkbox" />
          <label htmlFor="terms">I agree with Terms & Privacy</label>
        </div>
        <Button text={"Login"} onclick={() => console.log("click")} />
      </form>
    </div>
  );
};
