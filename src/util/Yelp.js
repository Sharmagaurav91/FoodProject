const apiKey = 'MYDOXjhdew65zOArf5-ncwT7p2X4jMpPnx08hbKSqfn6VAYjzLO1hp2viYmv-2MhH3xvhJgPubpGVk5v_OJa_MTqi8xRDSKNWBdQU41QbxRg7IRI-ZJWOmMtiZNYXHYx';

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&categories=restaurants`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1 + business.location.address2 + business.location.address3,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                    phone: business.display_phone
                }));
            }
        });
    }
};

export default Yelp;
