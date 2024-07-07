import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/api';
import FilterComponent from './FilterComponent';
import ChartComponent from './ChartComponent';

const Dashboard = () => {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(filters);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, [filters]);

  return (
    <div>
      <FilterComponent filters={filters} setFilters={setFilters} />
      <ChartComponent data={data} />
    </div>
  );
};

export default Dashboard;
