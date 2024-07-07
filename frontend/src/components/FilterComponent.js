import React from 'react';

const FilterComponent = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <label>End Year:</label>
        <input name="endYear" value={filters.endYear || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Topics:</label>
        <input name="topics" value={filters.topics || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Sector:</label>
        <input name="sector" value={filters.sector || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Region:</label>
        <input name="region" value={filters.region || ''} onChange={handleChange} />
      </div>
      <div>
        <label>PEST:</label>
        <input name="pest" value={filters.pest || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Source:</label>
        <input name="source" value={filters.source || ''} onChange={handleChange} />
      </div>
      <div>
        <label>SWOT:</label>
        <input name="swot" value={filters.swot || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Country:</label>
        <input name="country" value={filters.country || ''} onChange={handleChange} />
      </div>
      <div>
        <label>City:</label>
        <input name="city" value={filters.city || ''} onChange={handleChange} />
      </div>
    </div>
  );
};

export default FilterComponent;
