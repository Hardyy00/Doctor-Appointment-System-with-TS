import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../util/http";
import { useDispatchTyped } from "../hooks/hooks";
import { userActions } from "../store/UserSlice";
import { ClipLoader } from "react-spinners";
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatchTyped();
  const { mutate, isPending } = useMutation({
    mutationFn: login,

    onSuccess: (data) => {
      dispatch(userActions.login(data));
      if (data.user.role === "patient") {
        navigate("/profile");
      } else {
        navigate("/");
      }
    },

    onError: (err: AxiosError) => {
      toast.error(err.response?.data.message, {
        theme: "colored",
      });
    },
  });

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const obj = Object.fromEntries(formData) as {
      email: string;
      password: string;
      role: string;
    };

    mutate(obj);
  };

  return (
    <>
      <ToastContainer />
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
          onSubmit={submitHandler}
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
            {isPending ? <ClipLoader size={19} color="white" />  : "Login"}
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
    </>
  );
};

export default Login;
