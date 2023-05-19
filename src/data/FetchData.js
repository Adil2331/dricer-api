const API_URL = 'https://ergast.com/api/f1/drivers.json?limit=10';

export const fetchData = async () => {
  const res = await fetch(API_URL);
  const persons = await res.json();
  return persons.MRData.DriverTable.Drivers;
};
