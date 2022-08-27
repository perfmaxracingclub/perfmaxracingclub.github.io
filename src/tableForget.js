

export const tableForget = {
    '100m': [
        {
            category: 'A-1',
            bestTime: `00'10".65`,
            timeByPercentages: {
                '100%': `00'10".65`,
                '95%': `00'11".21`,
                '90%': `00'11".84`,
                '85%': `00'12".54`,
                '80%': `00'13".31`,
                '75%': `00'14".20`,
                '70%': `00'15".22`,
                '65%': `00'16".39`,
                '60%': `00'17".76`,
                '55%': `00'19".37`,
                '50%': `00'21".31`
            }
        }, {
            category: 'A-2',
            bestTime: `00'10".71`,
            timeByPercentages: {
                '100%': `00'10".65`,
                '95%': `00'11".21`,
                '90%': `00'11".84`,
                '85%': `00'12".54`,
                '80%': `00'13".31`,
                '75%': `00'14".20`,
                '70%': `00'15".22`,
                '65%': `00'16".39`,
                '60%': `00'17".76`,
                '55%': `00'19".37`,
                '50%': `00'21".31`
            },
        }],
    '120m': [
        {
            category: 'A-1',
            bestTime: `00'12".93`,
            timeByPercentages: {
                '100%': `00'10".65`,
                '95%': `00'11".21`,
                '90%': `00'11".84`,
                '85%': `00'12".54`,
                '80%': `00'13".31`,
                '75%': `00'14".20`,
                '70%': `00'15".22`,
                '65%': `00'16".39`,
                '60%': `00'17".76`,
                '55%': `00'19".37`,
                '50%': `00'21".31`
            }
        }, {
            category: 'A-2',
            bestTime: `00'13".00`,
            timeByPercentages: {
                '100%': `00'10".65`,
                '95%': `00'11".21`,
                '90%': `00'11".84`,
                '85%': `00'12".54`,
                '80%': `00'13".31`,
                '75%': `00'14".20`,
                '70%': `00'15".22`,
                '65%': `00'16".39`,
                '60%': `00'17".76`,
                '55%': `00'19".37`,
                '50%': `00'21".31`
            },
        }
    ],
    '150m': [],
    '200m': [],
    '250m': [],
    '300m': [],
    '350m': [],
    '400m': []
}


export function fetchDistances() {

    let distances = [];
    for (var distance in tableForget)
        distances.push(distance);

    return distances
}

export function fetchBestTimesByCategory(distance) {
    const distanceData = tableForget[distance];
    return distanceData.map(data => data.bestTime);
}


export function fetchCategoryMetadata(distance, bestTime) {
    return tableForget[distance].find(item => item.bestTime === bestTime)
}

export function generateDataTable(categoryName) {
    let categories = [];
    for (let distance in tableForget) {
        let distanceCategory = tableForget[distance].find(item => item.category === categoryName);
        distanceCategory = { ...distanceCategory, distance }
        categories.push(distanceCategory);
    }



    return categories.map(({ distance, timeByPercentages }) => {
        console.log(timeByPercentages)
        return { ...timeByPercentages, distance }
    });
}