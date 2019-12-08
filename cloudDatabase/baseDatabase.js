exports.initDatabase = (() => {
    const result = [];
    for(let i = 0; i < 10000; i++){
        result.push({
            name: `abc${i}`,
            id:`id${i}`,
        },)
    }
    return result;
})()