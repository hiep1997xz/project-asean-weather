export const getFavoList = (favouriteCities) => {
    const results = [];
    for (let index = 0; index < favouriteCities?.length; index++) {
        const element = favouriteCities[index];
        results.push(element.name);
    }
    return results;
}