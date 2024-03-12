import { User } from "../assets/data/doctors";

type DoctorPartial = {
  _id: string;
  name: string;
  image: string;
  averageRating: number;
  hospital: string;
  specialization: string;
};

export async function fetchDoctors({
  signal,
  searchTerm,
}: {
  signal: AbortSignal;
  searchTerm: string;
}): Promise<DoctorPartial[]> {
  const res: Response = await fetch(
    import.meta.env.VITE_BASE_URI +
      "/patient/getDoctors" +
      `?search=${searchTerm}`,
    { signal: signal }
  );

  const data = await res.json();

  return data.doctors;
}

export async function signup(userData): Promise<User> {
  const response = await fetch(
    import.meta.env.VITE_BASE_URI + "/patient/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userData),
    }
  );

  if (!response.ok) {
    throw new Error("Some problem occurred in signing up");
  }

  const resData: User = await response.json();

  return resData;
}
