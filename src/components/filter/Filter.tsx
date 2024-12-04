import React, { useEffect } from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../../redux/filterSlice/filterSlice";

interface FilterProps {
    filters: { [key: string]: string[] }; // Filters as key-value pairs
}

const Filter = ({ filters }: FilterProps) => {
    const filtersApplied = useSelector((state) => state.filters.filters);
    const keys = Object.keys(filters);
    const dispatch = useDispatch();
    const handleCheckboxChange = (k, value) => {
        dispatch(toggleFilter({
            key: k,
            value
        }))
    };
    const applyFilter = () => {
        console.log('filtersApplied', filtersApplied);
    }

    return (
        <div className="filters">
            <h3>Filters</h3>
            {keys.map((key) => (
                <div className="filter-group" key={key}>
                    <label>{key.toUpperCase()}</label>
                    <div>
                        {filters[key].map((filter) => (
                            <label className="checkbox-label" key={filter}>
                                <input type="checkbox" value={filter} onChange={() => handleCheckboxChange(key, filter)} />
                                <span>{filter.toUpperCase()}</span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            <button className="apply-filters-btn" onClick={applyFilter}>Apply Filters</button>
        </div>
    );
};

export default Filter;
