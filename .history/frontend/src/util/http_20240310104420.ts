export async function fetchDoctors({ signal: any, searchTerm: string }) {
  const data: Response = await fetch(
    import.meta.env.REACT_APP_BASE_URI + "/patient/"
  );
}
