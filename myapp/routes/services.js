const express = require("express");
const router = express();

router.get("/", (req, res) => {
  var t = new Date();
  if (
    9 <= Number(t.getHours()) &&
    Number(t.getHours()) < 17 &&
    1 <= Number(t.getDay()) &&
    Number(t.getDay()) <= 5
  ) {
    res.sendFile(process.cwd() + "\\public\\services.html");
  } else {
    res.sendFile(process.cwd() + "\\public\\errorpage.html");
  }
});
module.exports.router = router;
