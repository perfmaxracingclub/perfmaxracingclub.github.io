

export const tableForget = {
    '100m': [
        {
            category: 'A-1',
            bestTime: `00'10".65`,
            timeByPercentages: [
                { percentage: 100, time: `00'10".65` },
                { percentage: 95, time: `00'11".21` },
                { percentage: 90, time: `00'11".84` },
                { percentage: 85, time: `00'12".54` },
                { percentage: 80, time: `00'13".31` },
                { percentage: 75, time: `00'14".20` },
                { percentage: 70, time: `00'15".22` },
                { percentage: 65, time: `00'16".39` },
                { percentage: 60, time: `00'17".76` },
                { percentage: 55, time: `00'19".37` },
                { percentage: 50, time: `00'21".31` }
            ]
        }, {
            category: 'A-2',
            bestTime: `00'10".71`,
            timeByPercentages: [
                { percentage: 100, time: `00'10".65` },
                { percentage: 95, time: `00'11".21` },
                { percentage: 90, time: `00'11".84` },
                { percentage: 85, time: `00'12".54` },
                { percentage: 80, time: `00'13".31` },
                { percentage: 75, time: `00'14".20` },
                { percentage: 70, time: `00'15".22` },
                { percentage: 65, time: `00'16".39` },
                { percentage: 60, time: `00'17".76` },
                { percentage: 55, time: `00'19".37` },
                { percentage: 50, time: `00'21".31` }
            ],
        }],
    '120m': [
        {
            category: 'A-1',
            bestTime: `00'12".93`,
            timeByPercentages: [
                { percentage: 100, time: `00'10".65` },
                { percentage: 95, time: `00'11".21` },
                { percentage: 90, time: `00'11".84` },
                { percentage: 85, time: `00'12".54` },
                { percentage: 80, time: `00'13".31` },
                { percentage: 75, time: `00'14".20` },
                { percentage: 70, time: `00'15".22` },
                { percentage: 65, time: `00'16".39` },
                { percentage: 60, time: `00'17".76` },
                { percentage: 55, time: `00'19".37` },
                { percentage: 50, time: `00'21".31` }
            ]
        }, {
            category: 'A-2',
            bestTime: `00'13".00`,
            timeByPercentages: [
                { percentage: 100, time: `00'10".65` },
                { percentage: 95, time: `00'11".21` },
                { percentage: 90, time: `00'11".84` },
                { percentage: 85, time: `00'12".54` },
                { percentage: 80, time: `00'13".31` },
                { percentage: 75, time: `00'14".20` },
                { percentage: 70, time: `00'15".22` },
                { percentage: 65, time: `00'16".39` },
                { percentage: 60, time: `00'17".76` },
                { percentage: 55, time: `00'19".37` },
                { percentage: 50, time: `00'21".31` }
            ],
        }
    ]
}


export function fetchDistances() {

    let distances = [];
    for (var distance in tableForget)
        distances.push(distance);

    return distances
}

export function fetchBestTimesByCategory(distance) {
    const distanceData = tableForget[distance];
    console.log(distance, distanceData)
    return distanceData.map(data => data.bestTime);
}