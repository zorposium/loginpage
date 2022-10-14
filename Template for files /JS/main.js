var req = new XMLHttpRequest();
req.open('GET', 'http://api.weatherapi.com/v1/current.json?key=80b0f4ff440740a09f8155121221210&q=London');
req.send();
req.addEventListener( 'loadend' , function(){

    if( req.status == 200 ){
        console.log(JSON.parse(req.response))
    }

});