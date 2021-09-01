const express = require('express'),
      path = require('path');

const app = new express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.setHeader('Report-To', '{"group":"default","max_age":31536000,"endpoints":[{"url":"https://aqueous-atoll-05115.herokuapp.com/ng-portals/report-violation"}],"include_subdomains":true}');
    res.setHeader('NEL','{"report_to":"default","max_age":31536000,"include_subdomains":true,"success_fraction": 1.0,"failure_fraction": 1.0}');

    next();
});


app.use(express.static(path.join(__dirname, 'public')));

app.get('/drop', function(req, res) {
    req.socket.end();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
