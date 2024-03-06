import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center md:px-[14rem] md:py-[4rem] py-[6rem]">
      {/* prettier-ignore */}
      <div className="flex flex-col items-start h-[24rem] md:w-[90%] lg:w-[50%] w-[80%] justify-around p-[1rem] border-gray-300 border-[1px] rounded-xl">
        <h1 className="font-[800] text-[1.5rem]">
          Login <span className="text-primaryColor">To continue!</span>
        </h1>

        <form
          action="/"
          method="post"
          className="h-[50%] flex flex-col gap-[1rem] w-full items-start justify-between"
        >
          <div className="input-row">
            <input type="email" placeholder="Email" className="login_input" />
          </div>

          <div className="input-row"> 
            <input
              type="password"
              placeholder="password"
              className="login_input"
            />
          </div>

          <div className="input-row">
            <label htmlFor="role"></label>
            <select name="role" id="role">
              <option value="">Select Role</option>
              <select name="Patient" id="">Patient</select>
              <select name="Admin" id="">Admin</select>
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
