$(document).ready(function(){
	var ctx = $("#mycanvas").getContext("2d");

	var data = [
		{
			value: 160,
			color: "cornfowerbue",
			highlight: "lightskyblue",
			label: "Saved"
		},
		{

			value: 180,
			color: "orange",
			highlight: "darkorange",
			label: "Total Spent"
		}
	]; 

	var chart = new Chart(ctx).Doughnut(data);
});