const axios = require('axios');
const Dev = require('../models/Dev');
const parseStrAsArray = require('../utils/parseStrAsArray');

module.exports = {
    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs);
    },

    async store(req, res) {
        const { githubUser, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ githubUser });

        if (!dev) {
        const techsArr = parseStrAsArray(techs);

        const apiResponse = await axios.get(`https://api.github.com/users/${githubUser}`);

        const { name = login, avatar_url, bio } = apiResponse.data;
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
    
        dev = await Dev.create({
                        githubUser,
                        name,
                        avatarUrl: avatar_url,
                        bio,
                        techs: techsArr,
                        location
                        });
    
        console.log(name, avatar_url, bio, githubUser, techsArr);
        }

        return res.json(dev);
    },

    async update() {
        // TODO
    },

    async destroy() {
        // TODO
    }
}