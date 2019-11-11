function cakes(recipe, available) {
    let count_cakes = false, cakes = {};
    for (key in recipe) {
        if(!available[key])
            cakes[key] = 0
        else
            cakes[key] = Math.floor(available[key] / recipe[key]);
    }
    for (key in cakes) {
        if(count_cakes === false || count_cakes > cakes[key]) {
            count_cakes = cakes[key];
        }
    }
    return count_cakes;
}