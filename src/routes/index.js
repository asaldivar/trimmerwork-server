const express = require('express')
const router = express.Router()

const trimmerRoutes = require('./trimmers')
const resumeRoutes = require('./resumes')
const jobRoutes = require('./jobs')
const paymentRoutes = require('./payments')

router.use('/trimmers', trimmerRoutes)
router.use('/resumes', resumeRoutes)
router.use('/jobs', jobRoutes)
router.use('/payments', paymentRoutes)

module.exports = router