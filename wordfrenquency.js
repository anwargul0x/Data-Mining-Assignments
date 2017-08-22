var paragraph = "this is a good this this and this and and is good";
var p_array = [];
/*var frequency = [];

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
			if(p_array[i] === p_array[j]){
			 p_array.splice(j,1);
				count[i]+=1;
				j-=1
				p_length-=1;
			}
		}		
				console.log(p_array[i]+" frequency = "+count[i]);
}
	alert(p_array +"\n"+count)		