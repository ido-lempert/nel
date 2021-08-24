const express = require('express'),
      path = require('path');

const app = new express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.setHeader('Report-To', '{"group":"default","max_age":31536000,"endpoints":[{"url":"https://13588727568c1c68ab7fa56e96ca7723.report-uri.com/a/d/g"}],"include_subdomains":true}');
    res.setHeader('NEL','{"report_to":"default","max_age":31536000,"include_subdomains":true}');

    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
