const express       = require('express');
const router        = express.Router();
const JournalEntry  = require('../models/journal-entry.js');

router.get('/journal-entries',(req, res, next) => {
  JournalEntry.find({})
   .then((result) => {
     res.json(result);
   })
   .catch(next);
});

/*router.get('/journal-entries/:id', (req, res, next) => {
  JournalEntry.findById(req.params.id, (err, entry) => {
    if (err)    { return res.json(err).status(500); }
    if (!entry) { return res.json(err).status(404); }

    return res.json(entry);
  });
});

router.post('/journal-entries', (req, res, next) => {
  const newEntry = new JournalEntry({
    title: req.body.title,
    content: req.body.content
  });

  newEntry.save( (err) => {
    if (err)             { return res.status(500).json(err) }
    if (newEntry.errors) { return res.status(400).json(newEntry) }
                           return res.json(newEntry);
   }); */
//});

module.exports = router;