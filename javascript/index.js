function httpGetAsync(theUrl) {
    return new Promise(function(resolve, reject) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    resolve(xmlHttp.responseText);
                } else {
                    reject(xmlHttp.statusText);
                }
            }
        };
        xmlHttp.open("GET", theUrl, true);
        xmlHttp.send(null);
    });
}

function getRandomImage()
{
    var loading = document.getElementById('loading_text');
    if (loading) loading.style.display = 'block';

    httpGetAsync('https://dog.ceo/api/breeds/image/random/3')
        .then(function(json) {
            //console.log(json);
            var array = JSON.parse(json);
            //console.log(array);
            var url = array.message;
            //console.log(url);
            for(var i = 0; i < 3; i++) {
                var image = document.getElementById('dog_image_'+(i+1));
                image.src = url[i];
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
        })
        .finally(function() {
            if (loading) loading.style.display = 'none';
        });
}