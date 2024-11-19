import React from 'react';
import './Filters.css';

function Filters({ filter, setFilter, categories }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filters">
      <label>
        Category:
        <select
          name="category"
          value={filter.category}
          onChange={handleChange}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={filter.startDate}
          onChange={handleChange}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={filter.endDate}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default Filters;
