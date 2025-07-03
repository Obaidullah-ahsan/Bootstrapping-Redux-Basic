import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/type";
import { Trash } from "lucide-react";
interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border border-green-500 max-w-72 px-5 py-3 rounded-sm">
      <div className="flex justify-between items-center">
        <h1>{user.name}</h1>
        <Button
          onClick={() => dispatch(removeUser(user.id))}
          variant="link"
          className="p-0 text-red-500"
        >
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
