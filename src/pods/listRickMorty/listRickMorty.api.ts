export const fetchDataRickMortyCharacterPage = async (
  page: number,
  setLoading
) => {
  setLoading(true);

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();

    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log("Error fetching data", error);
  } finally {
    setLoading(false);
  }
};

export const filterRickMortyCharacter = async (
  page: number,
  term: string,
  setLoading
) => {
  setLoading(true);

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${term}`
    );
    const data = await response.json();

    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  } finally {
    setLoading(false);
  }
};
