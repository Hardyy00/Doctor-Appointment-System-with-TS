type DoctorPartial = {
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
  const res : Response = await fetch(
    import.meta.env.VITE_BASE_URI + "/getDoctors" + `?search=${searchTerm}`,
    { signal: signal }
  );

  const data = (await res.json()).


}
