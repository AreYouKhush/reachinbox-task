import React from "react";
import { Button } from "@/components/ui/button";
import { useCookies } from "next-client-cookies";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchEmails } from "@/redux/features/data-slice";

interface DeleteProps {
  setToggleDelete: Function;
  threadId: string;
}

const DeleteModal = ({ setToggleDelete, threadId }: DeleteProps) => {
  const cookies = useCookies();
  const token = cookies.get("token");
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = async () => {
    const response = await axios.delete(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
      {
        headers: {
          Authorization: `Beared ${token}`,
        },
      }
    );
    setToggleDelete(false);
    dispatch(fetchEmails());
    console.log(response.data);
  };

  return (
    <div className="h-full w-full absolute top-0 left-0 backdrop-blur-sm">
      <div className="rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 p-10 flex flex-col gap-5 items-center justify-center bg-gradient-to-b from-zinc-300 to-zinc-200">
        <div className="text-3xl font-bold">Are you sure ?</div>
        <div>Your selected email will be deleted.</div>
        <div className="flex gap-5">
          <Button
            onClick={() => setToggleDelete(false)}
            className=" px-10 py-2 font-bold"
            variant="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleDelete();
            }}
            className="bg-red-600 text-white px-10 py-2 font-bold hover:bg-red-400"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
