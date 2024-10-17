import { useRouter } from "next/navigation";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../store/authSlice";
import act_logout from "../actions/logout";

export default function Logout() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handle = () => {
    // destorySession();
    dispatch(logout());
    document.cookie = `appwrite-session=; Max-Age=0; path=/;`;
    document.cookie = `appwrite-user_id=; Max-Age=0; path=/;`;

    toast.success("Logged Out Successfully!");
    localStorage.removeItem("jwtappwrite");
    localStorage.removeItem("userIdappwrite");
    // act_logout();
    router.push("/login");
  };
  return (
    <>
      <button onClick={handle} className="flex gap-2 items-center">
        <BiLogOut /> Sign Out{" "}
      </button>
    </>
  );
}
