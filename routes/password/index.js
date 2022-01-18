const express = require('express');
const router = express.Router();

const passwordService = require('../../services/password');
const passService = new passwordService(require('../../records/passRecords.json'));

router.get('/all', (req, res) => {
  res.json({ message: passService.objData, status: 200 });
});

router.post('/save', (req, res) => {
  /* passService.savePass(req.body.site, req.body.pass); */
  console.log('Saving...');
  res.json({ message: passService.objData, status: 200 }).send();
});

module.exports = router;
