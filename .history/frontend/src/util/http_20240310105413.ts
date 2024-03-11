export async function fetchDoctors({ signal, searchTerm }) {
  const res = await fetch(
    import.meta.env.VITE_BASE_URI + "/getDoctors" + `?search=${searchTerm}`,
    { signal: signal }
  );
}
