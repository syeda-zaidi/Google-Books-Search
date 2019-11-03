const axios = require("axios");

module.exports = {

    findGoogleBooks: function (req, res) {
        let search = req.params;
        let url = "https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=" + process.env.APIKEY;
        console.log (url);

        axios.get(url).then( result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
    },
};
