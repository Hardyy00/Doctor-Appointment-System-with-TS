import axios from "axios";
import { Appointment, Doctor, Review, User } from "../assets/data/doctors";

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

  return resData;
}

export async function getAppointments({
  signal,
  id,
  role,
}: {
  signal: AbortSignal;
  id: string;
  role: string | undefined;
}): Promise<Appointment[]> {
  console.log("called");
  const response = await fetch(
    import.meta.env.VITE_BASE_URI +
      `/${role ?? "doctor"}/get-appointments/${id}`,
    { signal }
  );

  if (!response.ok) {
    throw Error("Some error occurred on getting appointments");
  }

  const resData: { appointments: Appointment[] } = await response.json();

  return resData.appointments;
}

export async function getUser({
  signal,
  id,
  userId,
}: {
  signal: AbortSignal;
  id: string | undefined;
  userId: string;
}): Promise<{ doctor: Doctor | User; isBooked: boolean }> {
  console.log("Get user called");
  const response = await fetch(
    import.meta.env.VITE_BASE_URI + `/patient/${id}?user=${userId}`,
    { signal }
  );

  if (!response.ok) {
    throw new Error("Something went wrong on getting the user");
  }

  const resData = await response.json();

  return resData;
}

export async function getReviews({
  signal,
  id,
}: {
  signal: AbortSignal;
  id: string | undefined;
}): Promise<Review> {
  console.log("called");
  const response = await fetch(
    import.meta.env.VITE_BASE_URI + `/patient/${id}/review`,
    { signal }
  );

  if (!response.ok) {
    throw new Error("Something went wrong on getting reviews");
  }

  const resData = await response.json();

  return resData.reviews;
}

export async function createAppointment({
  user,
  doctor,
  ticketPrice,
  appointmentDate,
}: {
  user: string;
  doctor: string;
  ticketPrice: number;
  appointmentDate: string;
}) {
  const { data } = await axios.post(
    import.meta.env.VITE_BASE_URI + "/doctor/create-appointment",
    { user, doctor, ticketPrice, appointmentDate }
  );

  return data;
}
