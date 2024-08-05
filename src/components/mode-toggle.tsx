import { useRef } from "react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";

export const ModeToggle = () => {
  const { setTheme } = useTheme();
  const switchRef = useRef<any>("false");
  const handleClick = () => {
    const { ariaChecked } = switchRef.current;
    console.log(typeof ariaChecked);
    console.log(ariaChecked);
    if (ariaChecked == "true") setTheme("light");
    else setTheme("dark");
  };
  return (
    <>
      <div>
        <Switch ref={switchRef} onClick={handleClick} />
      </div>
    </>
  );
};
