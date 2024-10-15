export const fetchDataGithubCorporation = async (term: string, setLoadingGithub) => {

    setLoadingGithub(true);
    try {
        const response = await fetch(`https://api.github.com/orgs/${term}/members`);
        const data = await response.json();

        if (response.ok) {
            return data;
        }
    } catch (error) {
        console.log('Error fetching data:', error)

    } finally {
        setLoadingGithub(false);
    }
}