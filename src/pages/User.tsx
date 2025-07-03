import AddUserModals from "@/components/module/user/AddUserModals";
import UserCard from "@/components/module/user/UserCard";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const User = () => {
  const users = useAppSelector(selectUser);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Users</h1>
        <AddUserModals />
      </div>
      <div className="mt-5 grid grid-cols-4 gap-5">
        {
            users.map((user)=> <UserCard user={user}></UserCard>)
        }
      </div>
    </div>
  );
};

export default User;
