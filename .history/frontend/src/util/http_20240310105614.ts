export async function fetchDoctors({
  signal,
  searchTerm,
}: {
  signal: AbortSignal;
  searchTerm: string;
}): Promise {
  const res = await fetch(
    import.meta.env.VITE_BASE_URI + "/getDoctors" + `?search=${searchTerm}`,
    { signal: signal }
  );
}
