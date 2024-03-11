// type DoctorPartial = {
//   _id: string;
//   name: string;
//   image: string;
//   averageRating: number;
//   hospital: string;
//   specialization: string;
// };

export async function fetchDoctors({ signal, searchTerm }) {
  console.log("called 1");
  const res = await fetch(
    import.meta.env.VITE_BASE_URI +
      "/patient/getDoctors" +
      `?search=${searchTerm}`
  );

  console.log("called");

  const data = await res.json();

  return data.doctors;
}
