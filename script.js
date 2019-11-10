function cakes(recipe, available) {
    var count_cakes = false;
    for (key in recipe) {
        if(!available[key])
            cakes[key] = 0
        else
            cakes[key] = Math.round(available[key] / recipe[key]);
    }
    for (key in cakes) {
        if(count_cakes === false || count_cakes > cakes[key]) {
            count_cakes = cakes[key];
        }
    }
    return count_cakes;
}