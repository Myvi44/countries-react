import Slider from '@mui/material/Slider';
import { useEffect } from 'react';
import { filterConstants } from '../../../../../../../../constants/filterConstants';

import "./style.sass"

export const Filter = ({ filterResult, setFilterResult }) => {

    useEffect(() => { console.log(filterResult) }, {})

    return (
        <div className="filter">
            <div className="timezone-filter">
                <Slider
                    getAriaLabel={() => 'Timezones slider'}
                    value={[filterResult?.timezones?.min, filterResult?.timezones?.max]}
                    min={filterConstants?.timezones?.min}
                    max={filterConstants?.timezones?.max}
                    valueLabelDisplay='auto'
                    onChange={
                        (event) => {
                            let currentFilter = Object?.assign(filterResult);
                            console.log(event?.target?.value)

                            currentFilter.timezones && (
                                currentFilter.timezones = {
                                    min: event?.target?.value[0],
                                    max: event?.target?.value[1]
                                }
                            );
                            setFilterResult(currentFilter);
                        }
                    }
                />
            </div>
        </div>
    )
}