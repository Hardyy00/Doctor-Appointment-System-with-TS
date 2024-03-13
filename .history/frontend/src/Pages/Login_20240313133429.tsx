import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { login } from "../util/http";
import { useDispatchTyped } from "../hooks/hooks";
import { userActions } from "../store/UserSlice";

const Login: React.FC = () => {
  const dispatch = useDispatchTyped();
  const { mutate } = useMutation({
    mutationFn: login,

    onSuccess: (data) => {
      dispatch(userActions.login(data));
      Navigate("/profile");
    },
  });

  return (
    <div className="w-full h-full flex items-center justify-center md:px-[14rem] md:py-[4rem] py-[6rem]">
      {/* prettier-ignore */}
      <div className="flex flex-col items-start h-[26em] md:w-[90%] lg:w-[50%] w-[80%] justify-around p-[1rem] border-gray-300 border-[1px] rounded-xl">
        <h1 className="font-[800] text-[1.5rem]">
          Login <span className="text-primaryColor">To continue!</span>
        </h1>

        <form
          action="/"
          method="post"
          className="h-[70%] flex flex-col gap-[1rem] w-full items-start justify-between"
        >
          <div className="input-row">
            <input type="email" placeholder="Email" className="login_input"  name="email"/>
          </div>

          <div className="input-row"> 
            <input
              type="password"
              placeholder="Password"
              className="login_input"
              name="password"
            />
          </div>

          <div className="input-row">
            <label htmlFor="role" className="font-[600]">Select Role : </label>
            <select name="role" id="role" className="select">
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <button className="btn w-[60%] self-center h-[3rem] font-[600]">
            Login
          </button>
        </form>

        <p className="w-full text-center">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="text-primaryColor font-[600]">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
