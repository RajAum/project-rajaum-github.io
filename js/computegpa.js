$(document).ready(function(){
    var grade = ["A","B","C","D","F"];
    var score = [4.0,3.0,2.0,1.0,0.0];
    var creditHours = [];
    var grades = [];
    $("#display").click(function(){
	$("scores").value = "SADASDA"; 
    });
    $("#add").click(function(){
	var chour = parseInt($("#chour").val()); 
	var grade = $("#grade").val(); 
	var isValid = true;
	
	//validate investment 
	if (isNaN(chour) || chour <= 0) {
		alert("Credit Hours must  be a valid number greater than zero.");
		isValid = false;
	} 
	else if(grade == "" || (grade != "A" &&  grade != "B" && grade != "C" &&  grade != "D" && grade != "F") ) {
		alert("Grade must be amonge A, B, C, D, F.");
		isValid = false;
	}
	
	//compute the future values;
	if (isValid){
	    creditHours[creditHours.length] = chour;
	    grades[grades.length] = grade;
	}
    })
    $("#calculate").click(function(){
	    var avg_gpa = 0.0
	    var sum = 0.0;
	    var value = 0.0;
	    for ( var i = 1; i <= creditHours.length; i++ ) {
		var ch = grades[i];
		for ( var j = 1; j <= grade.length; j++ ) {
		    if ( ch == grade[j] ){
			value = score[j];
		    }
		}
		avg_gpa += creditHours[i] * value;
		sum += creditHours[i];
	    }
	    avg_gpa /= sum;
	    $("#avg_gpa").val(avg_gpa);
    })
})
