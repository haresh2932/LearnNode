const express = require('express')
const router = express.Router()

const instituteRouter = require('./institute')
const categoryRouter = require('./category')

router.use("/category", categoryRouter)

module.exports = router