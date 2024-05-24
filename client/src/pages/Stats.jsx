import { ChartsContainer, StatsContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
export const loader = async () => {
  try {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  } catch (error) {
    return error;
  }
};
const Stats = () => {
  const { dafaultStats, monthlyApplications } = useLoaderData();
  
  return <h1>Stats Page</h1>;
};
export default Stats;
