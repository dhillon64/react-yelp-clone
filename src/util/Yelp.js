console apiKey= 'ZTZl_sGfMnVG9dekIS83-9buaNeg5N6T0riUuUqGU1seqTyOzid29dFjNFm26JjTriVhRiW8-caUzwNmv_zArdcrZ2jbadcCpNMduZC1PJMWBQIoJLel40p5kHwcX3Yx';

let yelp={
    search(term,location,sortBy) {
        return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`)
    
    }
};
