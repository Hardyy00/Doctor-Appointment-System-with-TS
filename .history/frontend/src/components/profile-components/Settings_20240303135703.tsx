const Settings: React.FC = () => {
  return (
    <div>
      <h1 className="font-[800] text-[1.4rem]">Settings</h1>

      <form action="w-full">
        <div className="input-row">
          <input type="text" />
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
      </form>
    </div>
  );
};

export default Settings;