// $(document).ready(function(){
// 	var ctx = document.getElementById("mycanvas").getContext("2d");

// 	var data = [
// 		{
// 			value: 160,
// 			color: "cornfowerbue",
// 			highlight: "lightskyblue",
// 			label: "Saved"
// 		},
// 		{

// 			value: 200,
// 			color: "orange",
// 			highlight: "darkorange",
// 			label: "Total Spent"
// 		}
// 	]; 

// 	var chart = new Chart(ctx).Doughnut(data);
// });




const doughnutChart1 = function doughnutChart1(){
    var doughnut = document.getElementById('mycanvas').getContext('2d');
    var myChart = new Chart(doughnut, {
        type: 'doughnut',
        data:{
            datasets: [{
                data: [5,45,50],
                backgroundColor:["#A3A1FB","#EDECFE","#3AE0F0"],
                hoverBackgroundColor:["#A3A1FB","#EDECFE","#3AE0F0"],

            }],

            labels: [
                'Sayur',
                'Cuee',
                'ayam',
            ]
        },
        options:{   
             rotation: (2*Math.PI) - (90 /180 * Math.PI),
                cutoutPercentage: 75,


             legend:{
                display:false,
             },
        },
    });

}

doughnut = doughnutChart1();

