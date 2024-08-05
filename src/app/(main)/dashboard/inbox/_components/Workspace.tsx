import { useParams } from "next/navigation";
import { MessageList } from "./MessageList";
import { EmailArea } from "./EmailArea";
import { useAppSelector } from "@/redux/store";
import { Button } from "@/components/ui/button";
import { Reply } from "lucide-react";
import { useEffect, useState } from "react";
import ReplyArea from "./ReplyArea";
import DeleteModal from "./DeleteModal";
import Information from "./Information";

export const Workspace = () => {
  const params = useParams();
  const emails = useAppSelector((state) => state.email.emails);
  const findData = emails.find((e) => e.id === Number(params.id));
  const [toggleReply, setToggleReply] = useState<boolean>(false);
  const [toggleDelete, setToggleDelete] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "r" || event.key === "R") {
        setToggleReply(!toggleReply);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (toggleReply === false && (event.key === "d" || event.key === "D")) {
        setToggleDelete(!toggleDelete);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [toggleReply, toggleDelete]);

  return (
    <>
      <div className="pt-[56px] pl-[56px] flex h-dvh">
        <div className="dark:bg-black w-[500px] border-r-[1px] border-gray-300 dark:border-zinc-800 p-5">
          <MessageList />
        </div>
        <div className="dark:bg-black w-dvw relative">
          {params?.id != undefined && (
            <EmailArea
              setToggleDelete={setToggleDelete}
              email={findData}
              threadId={String(findData?.threadId)}
            />
          )}
          {toggleReply === true ? (
            <div className="absolute left-5 right-5 bottom-5">
              <ReplyArea email={findData} setToggleReply={setToggleReply} />
            </div>
          ) : (
            params?.id != undefined && (
              <Button
                onClick={() => setToggleReply(true)}
                className="bg-gradient-to-r from-[#4B63DD] to-[#0524BF] text-white flex gap-2 px-6 font-bold items-center justify-center absolute bottom-5 left-5"
              >
                <Reply color="white" />
                Reply
              </Button>
            )
          )}
        </div>
        <div className="dark:bg-black w-[500px] border-l-[1px] border-gray-300 dark:border-zinc-800">
          <Information email={findData} />
        </div>
        <div>
          {toggleDelete && (
            <DeleteModal
              setToggleDelete={setToggleDelete}
              threadId={findData?.threadId}
            />
          )}
        </div>
      </div>
    </>
  );
};
