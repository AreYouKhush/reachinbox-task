import { Badge } from "@/components/ui/badge";
import { Dot } from "@/components/ui/dot";
import { cn } from "@/lib/utils";
import { IEmail } from "@/redux/features/data-slice";
import { Send } from "lucide-react";
import { useParams } from "next/navigation";

interface IData {
  data: IEmail;
}

export const EmailSidebar = ({ data }: IData) => {
  const params = useParams();
  const date = new Date(data?.sentAt);
  const formatedDate =
    date.toDateString().split(" ")[1] +
    " " +
    Number(date.toDateString().split(" ")[2]);
  return (
    <>
      <div
        className={cn(
          "border-white py-3 px-3 text-[14px] flex flex-col gap-3 relative cursor-pointer hover:border-l-[4px] hover:border-blue-500 group transition-all duration-75",
          data?.id === Number(params.id) && "border-l-[4px] border-blue-500"
        )}
      >
        <div>
          <div className="flex justify-between">
            <div className="truncate w-[180px]">{data?.fromEmail}</div>
            <div className="text-zinc-600">{formatedDate}</div>
          </div>
          <div className="truncate w-[180px] text-[11px] font-light">
            {data?.subject}
          </div>
        </div>
        <div className="flex gap-2 h-[20px] px-2">
          <Badge className="flex items-center  justify-center gap-1 dark:text-white text-black dark:bg-zinc-600 font-light bg-gray-200">
            <Dot variant="closed" />
            <div className="text-black dark:text-white text-[10px]">
              Interested
            </div>
          </Badge>
          <Badge className="flex items-center gap-1 dark:bg-zinc-600 dark:text-white text-black font-light bg-gray-200">
            <Send size={13} />
            <div className="text-[10px]">Campaign Name</div>
          </Badge>
        </div>
        {data?.isRead == true && (
          <div
            className={cn(
              "w-2 h-2 bg-blue-400 rounded-full absolute -left-[5px] top-[19px] z-50 group-hover:hidden",
              data?.id === Number(params.id) && "hidden"
            )}
          ></div>
        )}
      </div>
    </>
  );
};
