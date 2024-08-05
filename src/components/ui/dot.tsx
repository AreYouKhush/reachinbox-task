import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const dotStyles = cva("rounded-full border-muted shadow-md shadow-zinc-400/20", {
  variants: {
    variant: {
      lead: "bg-white",
      interested: "bg-[#84E662]",
      meetingBooked: "bg-[#9C62E6]",
      meetingCompleted: "bg-[#E6D162]",
      closed: "bg-[#626FE6]",
      outOfOffice: "bg-[#62B6E6]",
      wrongPerson: "bg-[#627FE6]",
      notInterested: "bg-[#E662A1]",
    },
    size: {
      xs: "h-[1px] w-[1px] p-[4px] border-[3.5px]",
      small: "h-1 w-1 p-[4px] border-[4px]",
      medium: "h-2 w-2 p-[4px] border-[4px]",
      large: "h-5 w-5 p-[4px] border-[4px]",
    },
  },
  defaultVariants: {
    variant: "lead",
    size: "xs",
  },
});

interface DotProps extends VariantProps<typeof dotStyles> {}

export const Dot: React.FC<DotProps> = ({ variant, size }) => {
  return <div className={cn(dotStyles({ variant, size }))} />;
};
