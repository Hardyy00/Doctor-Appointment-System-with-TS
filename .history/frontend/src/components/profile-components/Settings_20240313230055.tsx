import { useRef, useState } from "react";
import { User } from "../../assets/data/doctors";
import { useDispatchTyped, useSelectorTyped } from "../../hooks/hooks";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../util/http";
import { userActions } from "../../store/UserSlice";

const Settings: React.FC = () => {
  const dispatch = useDispatchTyped();

  const { mutate } = useMutation({
    mutationFn: updateUser,

    onSuccess: (data) => {
      dispatch(userActions.update(data));
    },

    onError: (err) => {
      console.log(err);
    },
  });
  const user: User | null | undefined = useSelectorTyped((state) => state.user);
  const imageRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>(user?.image ?? "");

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    if (image !== user?.image) {
      const form = new FormData();

      const blob: File | Blob = await fetch(image).then((res) => res.blob());

      form.append("file", blob);
      form.append("upload_preset", "doctor-appointment-app");
      form.append("cloud_name", import.meta.env.VITE_CLOUDINARY_NAME);

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dlfyo8jcv/image/upload",
        { method: "POST", body: form }
      );

      if (!response.ok) {
        throw new Error("Could not upload the image");
      }

      const resData = await response.json();

      formData.append("image", resData.url);
      formData.append("_id", user?._id ?? "");
      formData.append("role", user?.role ?? "");
      const obj = Object.fromEntries(formData);

      mutate(obj);
    }
  };
  return (
    <div className="flex flex-col gap-[2rem]">
      <h1 className="font-[800] text-[1.4rem]">Settings</h1>

      <form
        className="w-full flex flex-col gap-[2rem]"
        onSubmit={submitHandler}
      >
        <div className="input-row">
          <input
            type="text"
            className="login_input"
            placeholder="Name"
            name="name"
            defaultValue={user?.name ?? ""}
          />
        </div>

        <div className="input-row">
          <input
            type="email"
            className="login_input"
            placeholder="Email"
            name="email"
            defaultValue={user?.email ?? ""}
          />
        </div>
        {/* <div className="input-row">
          <input
            type="password"
            className="login_input"
            placeholder="Password"
            name="password"
          />
        </div> */}

        <div className="input-row">
          <input
            type="text"
            className="login_input"
            placeholder="Blood Group"
            name="bloodGroup"
            defaultValue={user?.bloodType ?? ""}
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
            defaultValue={user?.gender ?? ""}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex items-center gap-[1rem]">
          <div className="w-[3.4rem] h-[3.4rem] bg-red-300 rounded-[50%] border-2 border-primaryColor overflow-clip">
            {image && (
              <img src={image} alt="" className="object-cover w-full h-full" />
            )}
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
              onChange={(event) =>
                setImage(URL.createObjectURL(event.target?.files?.[0]!))
              }
              ref={imageRef}
            />
          </div>
        </div>

        <button className="btn p-[1rem] rounded-md font-[600] text-[1.1rem] w-[60%] self-center">
          Update
        </button>
      </form>
    </div>
  );
};

export default Settings;
