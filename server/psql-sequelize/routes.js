const router = require('express').Router()
const Restaurant = require('../../database/psql-sequelize/models.js')
const Op = require('sequelize').Op;

/******** SEQUELIZE ********/

router.get('/data/:id', (req,res)=> {
  const {id} = req.params
  Restaurant.findAll({ where: {id} })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
})

router.get('/sponsored/:id', (req,res)=> {
  const {id} = req.params
  let gt = Number(id) + 1
  let lt = Number(id) + 14
  if (lt > 10000000) {
    gt = gt - 500000
    lt = lt - 500000
  }
  Restaurant.findAll({ where: {id : {[Op.gt]: gt, [Op.lt]: lt}} 
  })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
})

router.get('/random', (req,res)=> {
  let randomId = Math.floor(Math.random() * 1000000) + 9000000
  console.time('PSQL Query Time')
    Restaurant.findAll({ where: { id: randomId }})
      .then(data => res.status(200).send(data))
      .then(() => console.timeEnd('PSQL Query Time'))
      .catch(err => res.status(404).send(err))
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