// Initialize the viz variable 
var vizMedicareIP01, vizMedicareOP01, vizSacPoliceDispatch;

window.onload= function() {
// When the webpage has loaded, load the viz

	var placeholder = document.getElementById('myMedicareIP01Viz');
	var vizURL = 'https://public.tableau.com/views/MedicareChargeProject_0/IPChargeDashboard';
	var options = {
	    	width: '1280px',
		height: '7200px',
		hideToolbar: true,
		hideTabs: true
	};

	vizMedicareIP01 = new tableau.Viz(placeholder, vizURL, options);

	// Listen for mark(s) selection for "Medicare Inpatient Charge Analysis 01"
	vizMedicareIP01.addEventListener('marksselection', function(marksEvent) {

		// console.log('Event Listener Activated.'); Debug code
	
		// Tableau Javascript API function to get selected marks 
		marksEvent.getMarksAsync().then( function(marks){
			if(marks.length === 0){
				return;				
			}
			
			// Setup an array to be ready for multiple marks selected
			var arrayMark = [];
			
			// Get "Provider State" mark from the dashboard, one mark at a time
			for(var i = 0; i < marks.length; i++){
				var selectedMarkSingle = marks[i].getPairs().get('Provider State').formattedValue;
					
				// Array manipulation: Concatenate multiple marks into the array
				arrayMark.push(selectedMarkSingle);
			}
			
			if(arrayMark.length > 1){
				var lastMark = arrayMark[arrayMark.length - 1];
				arrayMark[arrayMark.length - 1] = lastMark;				
			}
			
			console.log(arrayMark);
			
			// Cross-filter: Apply "Provider State" filter criteria to "Medicare Outpatient Charge Analysis 01"
			// with single mark or multiple marks
			setFilterTo(vizMedicareOP01, 'OP Charge Dashboard', 'Provider State', arrayMark);			
		});
	});
	
    var placeholder = document.getElementById('myMedicareOP01Viz');
    var vizURL = 'https://public.tableau.com/views/MedicareChargeProject_0/OPChargeDashboard';
    var options = {
    	width: '1280px',
    	height: '720px',
    	hideToolbar: true,
    	hideTabs: true
    };

	vizMedicareOP01 = new tableau.Viz(placeholder, vizURL, options);

	
    var placeholder = document.getElementById('mySacPoliceDispatchViz');
    var vizURL = 'https://public.tableau.com/views/SacPoliceDispatchDashboard/SacramentoPoliceDispatchAnalysis';
    var options = {
    	width: '1280px',
    	height: '720px',
    	hideToolbar: true,
    	hideTabs: true
    };

	vizSacPoliceDispatch = new tableau.Viz(placeholder, vizURL, options);

};



// Filter the specified dimension to the specified value(s)
function setFilterTo(vizName, sheetName, filterName, values) {
	var sheet = vizName.getWorkbook().getActiveSheet().getWorksheets().get(sheetName);
    sheet.applyFilterAsync(filterName, values, tableau.FilterUpdateType.REPLACE); 
}


//function switchView(sheetName) {
//	var workbook = vizMedicareOP01.getWorkbook();
//	workbook.activateSheetAsync(sheetName);
//}

// Filter the specified dimension to the specified value(s)
//function show(filterName, values) {
//	var sheet = vizMedicareOP01.getWorkbook().getActiveSheet();
//	sheet.applyFilterAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
//}

// Select the marks that have the specified value(s) for the specified dimension
//function selectMarks(filterName, values) {
//	var sheet = vizMedicareOP01.getWorkbook().getActiveSheet();
//	sheet.selectMarksAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
//}
