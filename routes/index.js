const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.json({name:"hans", cool: false});
});

module.exports = router;
