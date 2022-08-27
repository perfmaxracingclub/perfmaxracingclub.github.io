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
import { tableForget } from './tableForget.js'


const tableFontSize = '0.7rem'



function generateDataTable(categoryName) {

    let categoryByDistance = [];
    for (let distance in tableForget) {
        let distanceCategory = tableForget[distance].find(item => item.category === categoryName);
        distanceCategory = { ...distanceCategory, distance }
        categoryByDistance.push(distanceCategory);
    }


    return percentages.map(percentage => {
        let obj = { percentage }

        categoryByDistance.forEach(category => {
            let { timeByPercentages, distance } = category
            if (timeByPercentages)
                obj[distance] = timeByPercentages[percentage]
        })

        return obj
    })

}

function generateRows(row) {
    return distances.map((distance, index) => {
        return <TableCell align="right" key={index} sx={{
            color: row.percentage === '100%' ? '#FFBF00' : '',
            'fontSize': tableFontSize
        }}>{row[distance]}</TableCell>
    })
}


const distances = ['100m', '120m', '200m', '250m', '300m', '350m', '400m']
const percentages = ['100%', '95%', '90%', '85%', '80%', '75%', '70%', '65%', '60%', '55%', '50%']


const Form = () => {
    const [distance, setDistance] = React.useState('100m')
    const [category, setCategory] = React.useState('A-01')
    const [bestTimesByCategory, setBestTimeByCategory] = React.useState([])
    const [rows, setRows] = React.useState([])

    function handleChangeDistance(event) {
        setDistance(event.target.value)
    }

    function handleChangeCategory(event) {
        setCategory(event.target.value)
    }

    useEffect(() => {
        setBestTimeByCategory(tableForget[distance].map(category => { return { category: category.category, bestTime: category.timeByPercentages['100%'] } }))
        setRows(generateDataTable(category))
    }, [distance, category])

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
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

                        <FormControl sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel id="time-select-label">Category / Best Time</InputLabel>
                            <Select
                                labelId="time-select-label"
                                id="time-select"
                                value={category}
                                label="Category / Best Time"
                                onChange={handleChangeCategory}
                            >
                                {bestTimesByCategory.map(({ category, bestTime }) => (
                                    < MenuItem
                                        key={category}
                                        value={category}
                                    >
                                        {category} - {bestTime}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <TableContainer component={Paper} >
                        <Table aria-label="simple table" size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell colSpan={100} align="center" sx={{ 'fontWeight': 'bold' }}>{category}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell>%</TableCell>
                                    {
                                        distances.map((distance => (
                                            <TableCell align="right" key={distance} sx={{ 'fontSize': '0.8rem' }}>{distance}</TableCell>
                                        )))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        hover
                                        key={row.percentage}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" sx={{ color: row.percentage === '100%' ? '#FFBF00' : '', 'fontSize': tableFontSize }}>
                                            {row.percentage}
                                        </TableCell>
                                        {generateRows(row)}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div >
    )

}

export default Form