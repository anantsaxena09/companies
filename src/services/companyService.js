import axios from 'axios';

export const fetchCompanies = async () => {
  try {
    const response = await axios.get('https://dummy-json.mock.beeceptor.com/companies');
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    return [];
  }
};
