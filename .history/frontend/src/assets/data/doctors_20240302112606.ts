import doctorImg01 from "../images/doctor-img01.png";
import doctorImg02 from "../images/doctor-img02.png";
import doctorImg03 from "../images/doctor-img03.png";

export type TimeSlot = {
  day: string;
  time: string;
};

export interface Doctor {
  id: string;
  email?: string;
  name: string;
  specialization: string;
  averageRating: number;
  totalRating: number;
  image: string;
  totalPatients: number;
  hospital: string;
  phone?: number;
  ticketPrice?: number;
  role?: string;
  qualifications?: string;
  experience?: string;
  bio?: string;
  about?: string;
  timeSlots?: TimeSlot[];
  // reviews: Review[]
  isApproved?: string;
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
