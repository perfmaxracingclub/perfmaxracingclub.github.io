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

    function generateRows(row) {
        return distances.map((distance) => { 
            return <TableCell align="right" sx={{ color: row.percentage === '100%' ? 'yellow' : ''}}>{row[distance]}</TableCell>
        })
    }
    


    const categoryData = fetchCategoryMetadata(distance, time)
    const rows = categoryData ? generateDataTable(categoryData.category) : []
    console.log(rows)

    return (
        <div>
            <Grid container>
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
                                {times.map(({category, time}) => (
                                    <MenuItem
                                        key={time}
                                        value={time}
                                    >
                                        {category} - {time}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={4}></Grid>

                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table"   >
                            <TableHead>
                            <TableRow>
                            <TableCell colspan={100} align="center"  sx={{ 'font-weight': 'bold' }}>{categoryData?.category}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell>%</TableCell>
                                    {
                                        distances.map((col => (
                                            <TableCell align="right" >{col}</TableCell>
                                        )))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.percentage}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" sx={{ color: row.percentage === '100%' ? 'yellow' : ''}}>
                                            {row.percentage}
                                        </TableCell>
                                        {generateRows(row)}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </div >
    )

}

export default Form