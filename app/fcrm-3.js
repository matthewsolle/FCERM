const express = require('express')
const { get } = require('browser-sync')
const router = express.Router()
const fs = require('fs')

var folder = "fcrm-3"
var versionServiceName = "Flood and coastal erosion risk management"
router.use(function (req, res, next) {
  // store in locals this can then be used in pages as {{folder}} etc
  res.locals.folder=folder
  res.locals.versionServiceName=versionServiceName
  next()
})

var searchColumn = 'title'


// Routes

// Search
// Variant Specialist publisher
router.get('/search-results_spec_pub-default', function(req, res) {
    res.render(folder + '/search-results_spec_pub-default', { results: filterReports(req.query.name, req.query.topics,req.query.themes,req.query.status), url: req.url  })
})


// Others
router.get('/product-details-default/:reportNumber', function(req, res) {
    res.render(folder + '/product-details-default', findReport(req.params.reportNumber))
})


// Functions
function findReport(reportNumber) {
    return getReportData('reports').find(element => element.id === reportNumber)
}

function filterReports(searchText,topics,themes,status) {
    searchText = searchText.toLowerCase()
    let reportData = getReportData('reports')
    if (searchText) {
        reportData = reportData.filter(element => element[searchColumn].toLowerCase().includes(searchText,-1))
    }
    if (topics != '_unchecked') {
        reportData = reportData.filter(element => topics.includes(element.topics))
    }
    if (themes != '_unchecked') {
        reportData = reportData.filter(element => themes.includes(element.themes))
    }
    if (status != '_unchecked') {
        reportData = reportData.filter(element => status.includes(element.status))
    }

    return reportData
}

function getReportData(reportData) {
    return require('./views/' + folder + '/data/reports/reports.json')
}

module.exports = router
