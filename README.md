# FCERM Specialist Publisher prototype

==============================

## Where things are stored
------------------------------

Page parts (eg filters) are kept in /fcrm-1/includes/.

Filter lists are in /fcrm-1/data/lists.
(The code for this is constructed from a spreadsheet)

IMPORTANT: If you re-make the filters, remove the comma after the last item in each filter list

The page contents are stored in the spreadsheet.

This is converted to JSON using https://www.convertcsv.com/csv-to-json.htm and stored in /fcrm-1/data/reports/reports.json

Landing page is mainly HTML and is in /fcrm-1/landing-page-guide.html

The search and search results are in /fcrm-1/search-results_spec_pub-default.html

The details page (actual content) is in /fcrm-1/product-details-default.html

The actual search and routing happens in /fcrm-1.js

## Limitations of v1
------------------------------

* When filters are selected, the search control needs to be selected to display the results (see a live version of a Specialist Publisher finder to see how it will actually work https://www.gov.uk/raib-reports)
* More than one filter can be selected (but to work they have to be selected at the same time)
* Search terms work on report title but not on filter
* To clear filters and return to default view (no filters selected), select search control again
* Prototype currently only displaying one tag per filter. With the live Finder there will be no limitation how many tags for each filter can be displayed
* The prototype currently only contains a small proportion of actual FCERM reports. 25 was thought to be representative and allow testing of the functionality
