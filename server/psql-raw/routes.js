const router = require('express').Router()
const psql = require('../../database/psql-raw/index.js')

/******** RAW QUERIES ********/

router.get('/data/:id', async (req,res)=> {
  const {id} = req.params
  const {rows} = await psql.query('SELECT * FROM restaurants WHERE id = $1', [id])
  res.send(rows[0])
})

router.get('/sponsored/:id', async (req,res)=> {
  const {id} = req.params
  let gt = Number(id) + 1
  let lt = Number(id) + 14
  if (lt > 10000000) {
    gt = gt - 500000
    lt = lt - 500000
  }

  const {rows} = await psql.query('SELECT * FROM restaurants WHERE id > $1 AND id < $2', [gt, lt])
  res.send(rows)
})

router.get('/random_data', async (req,res)=> {
  let randomId = Math.floor(Math.random() * 1000000) + 9000000
  // console.time('Raw PSQL Query Time')
  const {rows} = await psql.query('SELECT * FROM restaurants WHERE id = $1', [randomId])
  res.send(rows[0])
  // console.timeEnd('Raw PSQL Query Time')
})

router.get('/random_sponsored', async (req,res)=> {
  let randomId = Math.floor(Math.random() * 1000000) + 9000000
  let gt = Number(randomId) + 1
  let lt = Number(randomId) + 14
  if (lt > 10000000) {
    gt = gt - 500000
    lt = lt - 500000
  }

  const {rows} = await psql.query('SELECT * FROM restaurants WHERE id > $1 AND id < $2', [gt, lt])
  res.send(rows)
})

/***** BEGIN CRUD OPERATIONS *****/

router.post('/data', (req,res)=> {
  const {categories, id, image, name, ratings, counts, waitingtime} = req.body
  Restaurant.create({categories, id, image, name, ratings, counts, waitingtime})
    .then(() => res.status(201).send('Post successful!'))
    .catch(err => res.status(404).send(err))
})


router.get('/data', (req,res)=> {
  Restaurant.findAll()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
})

router.put('/data/:id', (req,res)=> {
  const {id} = req.params
  const {categories, image, name, ratings, counts, waitingtime} = req.body

  Restaurant.update({categories, image, name, ratings, counts, waitingtime}, {where: {id}})
  .then(() => res.status(201).send('Update successful!'))
  .catch(err => res.status(404).send(err))
})

router.delete('/data/:id', (req,res)=> {
  const {id} = req.params

  Restaurant.destroy({where: {id}})
  .then(() => res.status(202).send('Delete successful!'))
  .catch(err => res.status(404).send(err))
})

/***** END CRUD OPERATIONS *****/

module.exports = router