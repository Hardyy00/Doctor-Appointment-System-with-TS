const Login: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-[14rem] py-[8rem]">
      <div className="flex flex-col items-start h-[24rem] w-[50%] justify-around p-[1rem] border-gray-300 border-[1px] rounded-xl">
        <h1 className="font-[800] text-[1.5rem]">
          Login. <span className="text-primaryColor">To continue!</span>
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

          <button className="btn w-[80%] self-center h-[3rem]">Login</button>
        </form>

        <p className="w-full text-center">
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
