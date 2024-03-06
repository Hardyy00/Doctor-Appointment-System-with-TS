import doctorImg01 from "../images/doctor-img01.png";
import doctorImg02 from "../images/doctor-img02.png";
import doctorImg03 from "../images/doctor-img03.png";

export type TimeSlot = {
  day: string;
  time: string;
};

export type Education = {
  from: number;
  to: number;
  degree: string;
  place: string;
};

export type Experience = {
  from: number;
  to: number;
  role: string;
  place: string;
};

export type Review = {
  id: string;
  user: User;
  reviewText: string;
  rating: number;
  timeStamp: string;
};

export type User = {
  email?: string;
  name: string;
  phone?: number;
  image?: string;
  role?: string;
  gender?: string;
  bloodType?: string;
  appointments?: Appointment[];
};

export type Appointment = {
  id: string;
  doctor?: Doctor;
  user?: User;
  ticketPrice: number;
  appointmentDate: string;
  status: string;
  isPaid: boolean;
  timeStamp: string;
};

export interface Doctor {
  id: string;
  email?: string;
  name: string;
  gender?: string;
  specialization?: string;
  averageRating?: number;
  totalRating?: number;
  image: string;
  totalPatients?: number;
  hospital?: string;
  phone?: number;
  ticketPrice?: number;
  role?: string;
  qualifications?: string;
  education?: Education[];
  experience?: Experience[];
  bio?: string;
  about?: string;
  timeSlots?: TimeSlot[];
  reviews?: Review[];
  isApproved?: string;
  appointments?: Appointment[];
}

const doctors: Doctor[] = [
  {
    id: "01",

    name: "Dr. Alfaz Ahmed",
    specialization: "Surgeon",
    averageRating: 4.8,
    totalRating: 272,
    image: doctorImg01,
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
    timeSlots: [
      { day: "sunday", time: "4:30 pm - 9:30 pm" },
      { day: "Monday", time: "4:30 pm - 9:30 pm" },
    ],
    ticketPrice: 800,
    about:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
  },
  {
    id: "02",
    name: "Dr. Saleh Mahmud",
    specialization: "Neurologist",
    averageRating: 4.8,
    totalRating: 272,
    image: doctorImg02,
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
    timeSlots: [
      { day: "sunday", time: "4:30 pm - 9:30 pm" },
      { day: "Monday", time: "4:30 pm - 9:30 pm" },
    ],
  },
  {
    id: "03",
    name: "Dr. Farid Uddin",
    specialization: "Dermatologist",
    averageRating: 4.8,
    totalRating: 272,
    image: doctorImg03,
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
    timeSlots: [
      { day: "sunday", time: "4:30 pm - 9:30 pm" },
      { day: "Monday", time: "4:30 pm - 9:30 pm" },
    ],
  },
];

export default doctors;
