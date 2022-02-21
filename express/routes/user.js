const express = require('express');
const router = express.Router();

router.get(`/user/:name`, (req, res, next) => {
  const name = req.params.name;
  res.json({
    name: name
  })
} )

module.exports = router