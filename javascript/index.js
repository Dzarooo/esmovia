
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function getRandomImage()
{
    var json = httpGet('https://dog.ceo/api/breeds/image/random/3');
    console.log(json);

    var array = JSON.parse(json);
    console.log(array);
  
    var url = array.message;
    console.log(url);
  
    for(var i = 0; i < 3; i++) {
        var image = document.getElementById('dog_image_'+(i+1));
        image.src = url[i];
    }


}