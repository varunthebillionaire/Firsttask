//XML HTTP REQUEST(XHR) (api)
// Step 1: create a XHR object 
var request= new XMLHttpRequest();
// Step 2: initialize a connection(starting a connection)
// true is used if your api doesn't want to affect the remaining execution of your code
request.open('GET','https://restcountries.eu/rest/v2/all',true);
// Step 3: sending a connection 
request.send();
// Step 4: once the data has been received successfully we need to extract 
// some conversion is needed here 
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(var i in data){
        console.log(data[i].name+" "+data[i].flag+" "+data[i].capital);
    }

    
}