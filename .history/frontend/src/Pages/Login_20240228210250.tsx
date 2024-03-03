const Login: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-[14rem]">
      <div className="flex flex-col items-start h-[13rem] w-[50%]">
        <h1>
          Login. <span>To continue!</span>
        </h1>

        <form action="/" method="post">
          <div>
            <input type="email" placeholder="Email" />
          </div>

          <div>
            <input type="password" placeholder="password" />
          </div>

          <button className="btn">Login</button>
        </form>

        <p className="w-full text-center">
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
