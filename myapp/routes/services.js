const express = require('express');
const router = express();


router.get('/', /*handleTime,*/ (req, res) => {
    var t = new Date();
    if (9 <= Number(t.getHours()) && Number(t.getHours()) < 17) {
        res.sendFile(process.cwd() + '\\public\\services.html')
    } else {
        res.sendFile(process.cwd() + '\\public\\errorpage.html')
    };
});
module.exports.router = router;