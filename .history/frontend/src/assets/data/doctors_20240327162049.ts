import doctorImg01 from "../images/doctor-img01.jpg";
import doctorImg02 from "../images/doctor-img02.png";
import doctorImg03 from "../images/doctor-img03.png";

export type TimeSlot = {
  day: string;
  startingTime: string;
  endingTime: string;
};

export type Education = {
  startingDate: string;
  endingDate: string;
  degree: string;
  place: string;
};

export type Experience = {
  startingDate: string;
  endingDate: string;
  role: string;
  place: string;
};

export type Review = {
  _id?: string;
  id?: string;
  user?: User;
  reviewText?: string;
  rating?: number;
  timeStamp?: string;
};

export type User = {
  _id?: string;
  email?: string;
  name?: string;
  phone?: number;
  image?: string;
  role?: string;
  gender?: string;
  bloodType?: string;
  appointments?: Appointment[];
};

export type Appointment = {
  _id?: string;
  id?: string;
  doctor?: Doctor;
  user?: User;
  ticketPrice: number;
  appointmentDate: string;
  status?: string;
  isPaid: boolean;
  isCompleted: boolean;
  timeStamp: string;
};

export enum Gender {
  male = "male",
  female = "female",
  other = "other",
}

export interface Doctor {
  id?: string;
  _id?: string;

  email?: string;
  name: string;
  gender?: Gender;
  specialization?: string;
  averageRating?: number;
  totalRating?: number;
  image: string;
  totalPatients?: number;
  hospital?: string;
  phone?: string;
  ticketPrice?: number;
  role?: string;
  education?: Education[];
  experience?: Experience[];
  bio?: string;
  about?: string;
  timeSlots?: TimeSlot[];
  isApproved?: string;
  appointments?: Appointment[];
}

export default doctors;
