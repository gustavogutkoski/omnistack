const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { githubUser, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ githubUser });

        if (!dev) {
        const techsArr = techs.split(',').map(tech => tech.trim());

        const apiResponse = await axios.get(`https://api.github.com/users/${githubUser}`);

        const { name = login, avatar_url, bio } = apiResponse.data;
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
    
        dev = await Dev.create({
                        githubUser,
                        name,
                        avatar_url,
                        bio,
                        techs: techsArr,
                        location
                        });
    
        console.log(name, avatar_url, bio, githubUser, techsArr);
        }

        return res.json(dev);
    }
}