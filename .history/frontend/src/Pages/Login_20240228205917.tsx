const Login: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-start">
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
      </div>
    </div>
  );
};

export default Login;
