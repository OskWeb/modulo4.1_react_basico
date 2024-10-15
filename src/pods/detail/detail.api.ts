export const fetchDataGithubMember = async (id: string, url: string) => {
  try {
    const response = await fetch(url + "" + id);
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const fetchDataRickMortyCharacter = async (id: string, url: string) => {
  try {
    const response = await fetch(url + "" + id);
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
