//Filter data 
export const calculateResult = (data, keyword) => {
  let searchResults = data.filter((person) => {
    let name = person.name.toString();
    let company = person.company.toString();
    let mail = person.email.toString();

    return (
      name.toLowerCase().includes(keyword.toLowerCase()) ||
      company.toLowerCase().includes(keyword.toLowerCase()) ||
      mail.toLowerCase().includes(keyword.toLowerCase())
    );
  });
  return searchResults;
};
