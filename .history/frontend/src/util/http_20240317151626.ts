import { Appointment, Doctor, User } from "../assets/data/doctors";

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

export async function signup(userData: User | Doctor): Promise<User | Doctor> {
  const response = await fetch(
    import.meta.env.VITE_BASE_URI + `/${userData.role}/create`,
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

  const resData: User | Doctor = await response.json();

  return resData;
}

export async function login(userData: {
  email: string;
  password: string;
  role: string;
}): Promise<{ user: User | Doctor }> {
  const response = await fetch(
    import.meta.env.VITE_BASE_URI + `/${userData.role}/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userData),
    }
  );

  if (!response.ok) {
    throw new Error("Some problem occurred on logging up");
  }

  const resData: { user: User | Doctor } = await response.json();

  return resData;
}

export async function updateUser(
  userData: User | Doctor
): Promise<{ user: User | Doctor }> {
  const response = await fetch(
    import.meta.env.VITE_BASE_URI + `/${userData.role ?? "doctor"}/update`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }
  );

  if (!response.ok) {
    throw new Error("Some problem occurred on Updating the user");
  }

  const resData: { user: User | Doctor } = await response.json();

  console.log(resData);

  return resData;
}

export async function getAppointments(id: string): Promise<Appointment[]> {
  const response = await fetch(
    import.meta.env.VITE_BASE_URI + `/doctor/get-appointments/${id}`
  );

  if (!response.ok) {
    throw Error("Some error occurred on getting appointments");
  }

  const resData: { appointments: Appointment[] } = await response.json();

  return resData.appointments;
}
