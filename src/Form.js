import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



import { fetchDistances, fetchBestTimesByCategory, fetchCategoryMetadata, generateDataTable } from './tableForget.js'




const percentages = [
    '100%', '95%', '90%', '85%', '80%', '75%', '70%', '65%', '60%', '55%', '50%'
]


const Form = () => {
    const [distance, setDistance] = React.useState('100m')
    const [time, setTime] = React.useState('')
    const [times, setTimes] = React.useState(fetchBestTimesByCategory(distance))


    const distances = fetchDistances();

    function handleChangeDistance(event) {
        setDistance(event.target.value)
        setTimes(fetchBestTimesByCategory(event.target.value))
    }

    function handleChangeTime(event) {
        setTime(event.target.value)
    }

    const categoryData = fetchCategoryMetadata(distance, time)
    const rows = categoryData ? generateDataTable(categoryData.category) : []

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>

                    <Box sx={{ minWidth: 120 }} display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="12vh">

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
                    </Box>
                </Grid>

                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Box sx={{ minWidth: 120 }} display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="4vh">
                        <label>Category: {categoryData?.category}</label>
                    </Box>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Distance</TableCell>
                                    {
                                        percentages.map((col => (
                                            <TableCell align="right" >{col}</TableCell>
                                        )))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.distance}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.distance}
                                        </TableCell>
                                        <TableCell align="right">{row['100%']}</TableCell>
                                        <TableCell align="right">{row['95%']}</TableCell>
                                        <TableCell align="right">{row['90%']}</TableCell>
                                        <TableCell align="right">{row['85%']}</TableCell>
                                        <TableCell align="right">{row['80%']}</TableCell>
                                        <TableCell align="right">{row['75%']}</TableCell>
                                        <TableCell align="right">{row['70%']}</TableCell>
                                        <TableCell align="right">{row['65%']}</TableCell>
                                        <TableCell align="right">{row['60%']}</TableCell>
                                        <TableCell align="right">{row['55%']}</TableCell>
                                        <TableCell align="right">{row['50%']}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div >
    )

}

export default Form