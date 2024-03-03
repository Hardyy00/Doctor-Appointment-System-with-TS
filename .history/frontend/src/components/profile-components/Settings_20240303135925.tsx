const Settings: React.FC = () => {
  return (
    <div>
      <h1 className="font-[800] text-[1.4rem]">Settings</h1>

      <form action="w-full flex flex-col gap-[2rem]">
        <div className="input-row">
          <input type="text" className="login_input" placeholder="Name" />
        </div>

        <div>
          <input type="text" />
        </div>

        <div>
          <input type="text" />
        </div>

        <div>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Gender :</label>
          <select name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <div>
            <img src="" alt="" />
          </div>

          <div>
            <button>Upload photo</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
