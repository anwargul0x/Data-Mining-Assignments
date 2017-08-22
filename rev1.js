function check(){
		var display = document.getElementById('tab-view');
	display.innerHTML ="<tr><th colspan='2'><h3>Words Frequency Checker</h3></th></tr><tr><th><h4>Words</h4></th><th><h4>Frequency</h4></th></tr>";
		var inputValue = document.getElementById('paragraph').value;
	if(inputValue != ""){
		var paragraph = inputValue ;
		var p_array = [];
/*
var filter1 = paragraph.split(",").join(" ");
var filter2 = filter1.split(".").join(" "); */ 
	p_array = paragraph.split(" ");
	p_length = p_array.length;
var count=[];
var i=0,k=0;
	for( i = 0 ; i < p_length ; i++ ){
		count[i] = 1;
		k = i+1;
			for(var j = k ; j < p_length ; j++){
			if(p_array[i] === p_array[j] || p_array[j] === " "){
			 p_array.splice(j,1);
				count[i]+=1;
				j-=1
				p_length-=1;
			}
		}		
				display.innerHTML += '<tr><td>'+k+' . '+p_array[i]+'</td><td>'+count[i]+'</td></tr>';
				document.getElementById('errorMsg').innerHTML ="";

}
}
else if (inputValue == "") {
	document.getElementById('errorMsg').innerHTML = "<h4 id='errMsg'>Hey genious type something before clicking the check button</h4>";}
}
