// Initialize the viz variable 
var vizMedicareIP01, vizMedicareOP01, vizAOIFacility, vizAOI_UC_Facility;

window.onload= function() {
// When the webpage has loaded, load the viz

    var placeholder = document.getElementById('myActionOIExecViz');
    var vizURL = 'https://tabltest.ucdmc.ucdavis.edu/views/UCDHealthActionOIDashboard/ActionOIExecutiveDashboard';
    var options = {
    	width: '1368px',
    	height: '800px',
    	hideToolbar: true,
    	hideTabs: true
    };

	vizMedicareIP01 = new tableau.Viz(placeholder, vizURL, options);

	
    var placeholder = document.getElementById('myActionOIDeptViz');
    var vizURL = 'https://tabltest.ucdmc.ucdavis.edu/views/UCDHealthActionOIDashboard/ActionOIDeptDashboard1';
    var options = {
    	width: '1368px',
    	height: '800px',
    	hideToolbar: true,
    	hideTabs: true
    };

	vizMedicareOP01 = new tableau.Viz(placeholder, vizURL, options);

	
    var placeholder = document.getElementById('myActionOIFacilityViz');
    var vizURL = 'https://tabltest.ucdmc.ucdavis.edu/views/ActionOIFacilityTrendDashboards/FacilityTrendDashboardbyCity';
    var options = {
    	width: '1368px',
    	height: '800px',
    	hideToolbar: true,
    	hideTabs: true
    };

	vizAOIFacility = new tableau.Viz(placeholder, vizURL, options);

	
    var placeholder = document.getElementById('myActionOI_UC_Fac_Viz');
    var vizURL = 'https://tabltest.ucdmc.ucdavis.edu/views/ActionOIFacilityTrendDashboards/UCTrendDashboard';
    var options = {
    	width: '1368px',
    	height: '800px',
    	hideToolbar: true,
    	hideTabs: true
    };

	vizAOI_UC_Facility = new tableau.Viz(placeholder, vizURL, options);
};



function switchView(sheetName) {
	var workbook = vizMedicareOP01.getWorkbook();
	workbook.activateSheetAsync(sheetName);
}





// Filter the specified dimension to the specified value(s)
function show(filterName, values) {
	var sheet = vizMedicareOP01.getWorkbook().getActiveSheet();
	sheet.applyFilterAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
}

// Select the marks that have the specified value(s) for the specified dimension
function selectMarks(filterName, values) {
	var sheet = vizMedicareOP01.getWorkbook().getActiveSheet();
	sheet.selectMarksAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
}
