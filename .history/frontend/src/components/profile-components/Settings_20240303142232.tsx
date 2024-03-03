import { FormEvent, useRef, useState } from "react";

const Settings: React.FC = () => {
  const imageRef = useRef<HTMLInputElement>();
  const [image, setImage] = useState<File>();

  const submitHandler = (event: React.ChangeEvent<FormEvent>) => {
    event.preventDefault();

    console.log(image);
  };
  return (
    <div className="flex flex-col gap-[2rem]">
      <h1 className="font-[800] text-[1.4rem]">Settings</h1>

      <form className="w-full flex flex-col gap-[2rem]">
        <div className="input-row">
          <input type="text" className="login_input" placeholder="Name" />
        </div>

        <div className="input-row">
          <input type="password" className="login_input" placeholder="Email" />
        </div>
        <div className="input-row">
          <input
            type="password"
            className="login_input"
            placeholder="Password"
            name="password"
          />
        </div>

        <div className="input-row">
          <input
            type="text"
            className="login_input"
            placeholder="Blood Group"
            name="bloodGroup"
          />
        </div>

        <div>
          <label htmlFor="gender" className="font-bold">
            Gender :
          </label>
          <select
            name="gender"
            className="outline-none focus:outline-none active:outline-none font-[800] ml-4"
            id="gender"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex items-center gap-[1rem]">
          <div className="w-[3.4rem] h-[3.4rem] bg-red-300 rounded-[50%] border-2 border-primaryColor">
            <img src="" alt="" className="object-cover h-full" />
          </div>

          <div>
            <button
              className="p-[1rem] bg-primaryColor/20 rounded-lg text-primaryColor font-[600]"
              onClick={() => imageRef.current?.click()}
            >
              Upload photo
            </button>

            <input
              type="file"
              className="hidden"
              onChange={(event) => setImage(event.target?.files?.[0])}
            />
          </div>
        </div>

        <button className="btn p-[1rem] rounded-md font-[600] text-[1.1rem]">
          Update
        </button>
      </form>
    </div>
  );
};

export default Settings;
