// Initialize the viz variable 
var vizMedicareIP01, vizMedicareOP01, vizSacPoliceDispatch;

window.onload= function() {
// When the webpage has loaded, load the viz

    var placeholder = document.getElementById('myMedicareIP01Viz');
    var vizURL = 'https://public.tableau.com/views/MedicareChargeProject_0/IPChargeDashboard';
    var options = {
    	width: '1200px',
    	height: '660px',
    	hideToolbar: true,
    	hideTabs: true
    };

	vizMedicareIP01 = new tableau.Viz(placeholder, vizURL, options);

	
    var placeholder = document.getElementById('myMedicareOP01Viz');
    var vizURL = 'https://public.tableau.com/views/MedicareChargeProject_0/OPChargeDashboard';
    var options = {
    	width: '1200px',
    	height: '660px',
    	hideToolbar: true,
    	hideTabs: true
    };

	vizMedicareOP01 = new tableau.Viz(placeholder, vizURL, options);

	
    var placeholder = document.getElementById('mySacPoliceDispatchViz');
    var vizURL = 'https://public.tableau.com/views/SacPoliceDispatchDashboard/SacramentoPoliceDispatchAnalysis';
    var options = {
    	width: '1200px',
    	height: '660px',
    	hideToolbar: true,
    	hideTabs: true
    };

	vizSacPoliceDispatch = new tableau.Viz(placeholder, vizURL, options);

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
