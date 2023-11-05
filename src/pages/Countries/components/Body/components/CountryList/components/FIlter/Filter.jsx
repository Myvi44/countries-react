import { useState } from 'react';
import Slider from '@mui/material/Slider';
import FilterListIcon from '@mui/icons-material/FilterList';

import { filterConstants } from '../../../../../../../../constants/filterConstants';

import "./style.sass"

export const Filter = ({ filterResult, setFilterResult }) => {

    const [filterWrapped, setFilterWrapped] = useState(true);

    let filterObject = document.querySelector('.filter');
    if (filterObject) {
        if (filterWrapped) {
            filterObject.style['min-height'] = "0px";
            setTimeout(() => filterObject.style.display = "none", 150)
        }
        else {
            filterObject.style['min-height'] = "280px";
            setTimeout(() => filterObject.style.display = "block", 150)
        }
    }

    return (
        <div className="filter-block">
            <div className="filter">
                <div className="filter__timezones">
                    <input
                        min={-12}
                        max={14}
                        type="text"
                        value={filterResult?.timezones?.min}
                        onChange={
                            event => {
                                let currentFilter = { ...filterResult };

                                if (currentFilter.timezones) {
                                    currentFilter.timezones = {
                                        min: event.target.value,
                                        max: filterResult?.timezones?.max
                                    }
                                }

                                console.log(currentFilter)

                                setFilterResult(currentFilter)
                            }
                        }
                    />
                    <Slider
                        getAriaLabel={() => 'Timezones slider'}
                        value={Object.values(filterResult.timezones)}
                        min={filterConstants?.timezones?.min}
                        max={filterConstants?.timezones?.max}
                        valueLabelDisplay='auto'
                        onChange={
                            (event, newValue) => {
                                let currentFilter = { ...filterResult };

                                if (currentFilter.timezones) {
                                    currentFilter.timezones = {
                                        min: newValue[0],
                                        max: newValue[1]
                                    }
                                }

                                console.log(currentFilter)

                                setFilterResult(currentFilter)
                            }
                        }
                    />
                    <input
                        min={-12}
                        max={14}
                        type="text"
                        value={filterResult?.timezones?.max}
                        onChange={
                            event => {
                                let currentFilter = { ...filterResult };

                                if (currentFilter.timezones) {
                                    currentFilter.timezones = {
                                        min: filterResult?.timezones?.min,
                                        max: event.target.value
                                    }
                                }

                                setFilterResult(currentFilter)
                            }
                        }
                    />
                </div>
                <hr />
                <div className="filter__car-side">
                    <div className="side">
                        <label htmlFor="left">
                            <input
                                type="checkbox"
                                id='left'
                                className='car-side'
                                checked={filterResult?.car?.left}
                                onChange={
                                    event => {
                                        let currentFilter = { ...filterResult };

                                        if (currentFilter.car) {
                                            currentFilter.car = {
                                                left: !filterResult?.car?.left,
                                                right: filterResult?.car?.right
                                            }
                                        }

                                        setFilterResult(currentFilter)
                                    }
                                }
                            />
                            Left-side
                        </label>
                    </div>
                    <div className="side">
                        <label htmlFor="right">
                            <input
                                type="checkbox"
                                id='right'
                                className='car-side'
                                checked={filterResult?.car?.right}
                                onChange={
                                    event => {
                                        let currentFilter = { ...filterResult };

                                        if (currentFilter.car) {
                                            currentFilter.car = {
                                                left: filterResult?.car?.left,
                                                right: !filterResult?.car?.right
                                            }
                                        }

                                        setFilterResult(currentFilter)
                                    }
                                }
                            />Right-side
                        </label>
                    </div>
                </div>
                <hr />
                <div className="filter__continents">
                    {
                        Object.keys(filterResult?.continents).map(
                            continent =>
                                <div key={continent} className="continent-filter-item">

                                    <label htmlFor={continent}>
                                        <input
                                            type="checkbox"
                                            id={continent}
                                            checked={filterResult?.continents[continent]}
                                            onChange={
                                                event => {
                                                    let currentFilter = { ...filterResult };

                                                    if (currentFilter.continents) {
                                                        currentFilter.continents[continent] = !currentFilter.continents[continent]
                                                    }

                                                    setFilterResult(currentFilter)
                                                }
                                            }
                                        />
                                        {continent}
                                    </label>
                                </div>
                        )
                    }
                </div>
            </div>
            <div className="filter__icon"
                onClick={() => setFilterWrapped(!filterWrapped)}
            >
                <FilterListIcon fontSize='large' />
            </div>
        </div>
    )
}