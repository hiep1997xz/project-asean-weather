export const fitlerArr = (arr1, arr2) => {
    if (arr2.length > arr1.length) {
        return null;
    }
    let results = [];
    arr2.forEach(element => {
        results = arr1.filter(item=>{
            return item != element;
        })
    });

    return results;
} 