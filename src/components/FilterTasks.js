import React from 'react';

//defining the filtertask component
const FilterTasks = ({ filterOption, setFilterOption }) => {
  const handleFilterChange = (e) => {
    //Implement the event handler to update the filter option when a different option is selected.
    setFilterOption(e.target.value);
  };

  return (
    <div className="filter-tasks">
      <label>
        <input
          type="radio"
          value="all"
          checked={filterOption === 'all'}
        //   Adding state variable to store the filter option (completed or incomplete).
          onChange={handleFilterChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="completed"
          checked={filterOption === 'completed'}
          onChange={handleFilterChange}
        />
        Completed
      </label>
      </div>
  );
};

export default FilterTasks;