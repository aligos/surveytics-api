import axios from 'axios';
const Surveytics = (app) => {
	var loadData = (username, password) => {
		var apikey = 'APIKEY';
		var url = 'http://member.surveytics.com/api/check-access/by-login-pass?_key='+apikey+'&login='+username+'&pass='+password;
		return new Promise((resolve, reject) => {
            axios.get(url, {timeout: 7000})
                .then((response) => {
                	var json = response.data;
                	resolve(json);
                })
                .catch(function (err) {
                    resolve({error: 'timeout', err: err});
                });
        });
    }
    app.get('/api/:username/:password', (req, res) => {
        var username = req.params.username;
        var password = req.params.password;
        loadData(username, password).then((data) => {
            res.json(data);
        });
    });
}

export default Surveytics;
