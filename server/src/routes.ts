import express from 'express'

const routes = express.Router();

routes.get('/aeronaves', (req, res) => {
  return res.json({ message: 'Ola mundo'})
})

export default routes
