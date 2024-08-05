import React, { useState } from 'react';

const StringFilter = ({ onFilterChange }) => {
    const [filterType, setFilterType] = useState("contains");
    const [filterValue, setFilterValue] = useState("");

    const handleFilterTypeChange = (event) => {
        const value = event.target.value;
        setFilterType(value);
        onFilterChange(value, filterValue);
    };

    const handleFilterValueChange = (event) => {
        const value = event.target.value;
        setFilterValue(value);
        onFilterChange(filterType, value);
    };

    return (
        <div>
            <label>Filter:</label>
            <select value={filterType} onChange={handleFilterTypeChange}>
                <option value="contains">contains</option>
                <option value="notContains">not contains</option>
                <option value="equals">equals</option>
                <option value="notEquals">not equals</option>
                <option value="startsWith">starts with</option>
                <option value="endsWith">ends with</option>
                <option value="isNull">is null</option>
                <option value="isNotNull">is not null</option>
            </select>

            <input type="text" value={filterValue} onChange={handleFilterValueChange} />

        </div>
    );
};

export default StringFilter;
