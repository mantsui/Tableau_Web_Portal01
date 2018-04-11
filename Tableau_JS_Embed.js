// Initialize the viz variable 
var vizCMS_Cost_Hosp_Stat, vizMedicareIP01, vizMedicareOP01, vizSacPoliceDispatch, vizIPOP_Pay_Hospital, vizSuperStore_D3;

window.onload= function() {
// When the webpage has loaded, load the viz

	var placeholder01 = document.getElementById('myCMS_Cost_Hosp_Stat_Viz');
	var vizURL01 = 'https://public.tableau.com/views/MedicareCostRptProject/HospStatDashboard';
	var options01 = {
	    width: '1280px',
		height: '720px',
		hideToolbar: true,
		hideTabs: true
	};

	vizCMS_Cost_Hosp_Stat = new tableau.Viz(placeholder01, vizURL01, options01);

	// Listen for filter change/selection for "Medicare Cost Report Hospital Statistics"
	vizCMS_Cost_Hosp_Stat.addEventListener('filterchange', function(filterEvent) {

		//console.log('Event Listener Activated.'); //Debug code

		var arrayFilterList = [];
		filterEvent.getFilterAsync().then( function(field){
			var field_name = field.getFieldName();
			var field_type = field.getFilterType();
			if (field_name == "State") {
				var data_values = field.getAppliedValues();
				for (i = 0; i < data_values.length; i++) {
					var selectedFilterSingle = data_values[i].value;
					
					// Array manipulation: Concatenate multiple filter values into the array
					arrayFilterList.push(selectedFilterSingle);
				}
				
				// Cross-filter: Apply "Provider State" filter criteria to "Medicare Outpatient Charge Analysis 01"
				setFilterTo(vizMedicareOP01, 'OP Map', 'Provider State', arrayFilterList);
				// Cross-filter: Apply "Provider State" filter criteria to "Medicare Inpatient Charge Analysis 01"
				setFilterTo(vizMedicareIP01, 'IP Map', 'Provider State', arrayFilterList);
			}
			console.log(arrayFilterList);
		});
	});
	
	
	var placeholder03 = document.getElementById('myMedicareIP01Viz');
	var vizURL03 = 'https://public.tableau.com/views/MedicareChargeProject_0/IPChargeDashboard';
	var options03 = {
	    width: '1280px',
		height: '720px',
		hideToolbar: true,
		hideTabs: true
	};

	vizMedicareIP01 = new tableau.Viz(placeholder03, vizURL03, options03);

	// Listen for filter change/selection for "Medicare Inpatient Charge Analysis 01"
	vizMedicareIP01.addEventListener('filterchange', function(filterEvent) {

		//console.log('Event Listener Activated.'); //Debug code

		var arrayFilterList = [];
		filterEvent.getFilterAsync().then( function(field){
			var field_name = field.getFieldName();
			var field_type = field.getFilterType();
			if (field_name == "Provider State") {
				var data_values = field.getAppliedValues();
				for (i = 0; i < data_values.length; i++) {
					var selectedFilterSingle = data_values[i].value;
					
					// Array manipulation: Concatenate multiple filter values into the array
					arrayFilterList.push(selectedFilterSingle);
				}
				
				// Cross-filter: Apply "State" filter criteria to "Medicare Cost Report: Hospital Statistics"
				// with single mark or multiple marks
				setFilterTo(vizCMS_Cost_Hosp_Stat, 'Hosp Stat Map', 'State', arrayFilterList);
				// Cross-filter: Apply "Provider State" filter criteria to "Medicare Outpatient Charge Analysis 01"
				setFilterTo(vizMedicareOP01, 'OP Map', 'Provider State', arrayFilterList);
			}
			console.log(arrayFilterList);
		});
	});
	
	var placeholder04 = document.getElementById('myMedicareOP01Viz');
	var vizURL04 = 'https://public.tableau.com/views/MedicareChargeProject_0/OPChargeDashboard';
	var options04 = {
		width: '1280px',
		height: '720px',
		hideToolbar: true,
		hideTabs: true
	};

	vizMedicareOP01 = new tableau.Viz(placeholder04, vizURL04, options04);

	// Listen for filter change/selection for "Medicare Outpatient Charge Analysis 01"
	vizMedicareOP01.addEventListener('filterchange', function(filterEvent) {

		//console.log('Event Listener Activated.'); //Debug code

		var arrayFilterList = [];
		filterEvent.getFilterAsync().then( function(field){
			var field_name = field.getFieldName();
			var field_type = field.getFilterType();
			if (field_name == "Provider State") {
				var data_values = field.getAppliedValues();
				for (i = 0; i < data_values.length; i++) {
					var selectedFilterSingle = data_values[i].value;
					
					// Array manipulation: Concatenate multiple filter values into the array
					arrayFilterList.push(selectedFilterSingle);
				}

				// Cross-filter: Apply "State" filter criteria to "Medicare Cost Report: Hospital Statistics"
				// with single mark or multiple marks
				setFilterTo(vizCMS_Cost_Hosp_Stat, 'Hosp Stat Map', 'State', arrayFilterList);
				// Cross-filter: Apply "Provider State" filter criteria to "Medicare Inpatient Charge Analysis 01"
				setFilterTo(vizMedicareIP01, 'IP Map', 'Provider State', arrayFilterList);
			}
			console.log(arrayFilterList);

		});
	});
	
	var placeholder05 = document.getElementById('myIPOP_Pay_Hospital');
	var vizURL05 = 'https://public.tableau.com/views/MedicareChargeProject_0/IPOPPaymentDashboard';
	var options05 = {
		width: '1280px',
		height: '720px',
		hideToolbar: true,
		hideTabs: true
	};

	vizIPOP_Pay_Hospital = new tableau.Viz(placeholder05, vizURL05, options05);	

	var placeholder06 = document.getElementById('mySuperStore_D3');
	var vizURL06 = 'https://public.tableau.com/views/SampleDashboardSuperstore/DashboardSuperstoreD3';
	var options06 = {
		width: '1280px',
		height: '720px',
		hideToolbar: true,
		hideTabs: true
	};

	vizSuperStore_D3 = new tableau.Viz(placeholder06, vizURL06, options06);	

	
	var placeholder15 = document.getElementById('mySacPoliceDispatchViz');
	var vizURL15 = 'https://public.tableau.com/views/SacPoliceDispatchDashboard/SacramentoPoliceDispatchAnalysis';
	var options15 = {
		width: '1280px',
		height: '720px',
		hideToolbar: true,
		hideTabs: true
	};

	vizSacPoliceDispatch = new tableau.Viz(placeholder15, vizURL15, options15);

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
