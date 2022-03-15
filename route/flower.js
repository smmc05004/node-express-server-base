const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('time: ', Date.now());
  next();
});

router
  .get('/', (req, res) => res.send('flower list'))
  .get('/:id', (req, res) => {
    console.log('flower id: ', req.params.id);
    return res.send('flower one');
  })
  // .get(
  //   '/skipMD',
  //   (req, res, next) => {
  //     console.log('middleware 1');
  //     next('route');
  //     // next();
  //   },
  //   (req, res) => {
  //     console.log('middleware 2');
  //     res.send('mi 2');
  //   }
  // )
  .post('/', (req, res) => res.send('flower created'));

// router.get('/skipMD', (req, res) => {
//   console.log('middleware 3');
//   res.send('mi 3');
// });
module.exports = router;
