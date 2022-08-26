import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import { tableForget, fetchDistances, fetchBestTimesByCategory } from './tableForget.js'



const Form = () => {
    const [distance, setDistance] = React.useState('100m')
    const [time, setTime] = React.useState('')
    const [times, setTimes] = React.useState(fetchBestTimesByCategory(distance))


    const distances = fetchDistances();



    //console.log(tableForget, fetchDistances());

    function handleChangeDistance(event) {
        setDistance(event.target.value)
        setTimes(fetchBestTimesByCategory(event.target.value))

        //console.log(times)
    }

    function handleChangeTime(event) {
        setTime(event.target.value)

    }

    return (
        <div>
            <form>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="distance-select-label">Distance</InputLabel>
                        <Select
                            labelId="distance-select-label"
                            id="distance-select"
                            value={distance}
                            label="Distance"
                            onChange={handleChangeDistance}
                        >
                            {distances.map((distance) => (
                                <MenuItem
                                    key={distance}
                                    value={distance}
                                >
                                    {distance}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="time-select-label">Time</InputLabel>
                    <Select
                        labelId="time-select-label"
                        id="time-select"
                        value={time}
                        label="Time"
                        onChange={handleChangeTime}
                    >
                        {times.map((time) => (
                            <MenuItem
                                key={time}
                                value={time}
                            >
                                {time}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Button variant="contained">Submit</Button>
            </form>
        </div>
    )

}


export default Form