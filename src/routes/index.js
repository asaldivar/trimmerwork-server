const express = require('express')
const router = express.Router()

const trimmerRoutes = require('./trimmers')
const resumeRoutes = require('./resumes')
const jobRoutes = require('./jobs')

router.use('/trimmers', trimmerRoutes)
router.use('/resumes', resumeRoutes)
router.use('/jobs', jobRoutes)

module.exports = router