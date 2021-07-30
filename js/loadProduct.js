let queryString = new Array(); // []

window.onload = function ()
{
    console.log(queryString);
    if (queryString.length === 0) {
        if (window.location.search.split('?').length > 1) {
            var params = window.location.search.split('?')[1].split('&');
            for (var i = 0; i < params.length; i++) {
                var key = params[i].split('=')[0];
                var value = decodeURIComponent(params[i].split('=')[1]);
                queryString[key] = value;
            }
        }
    }

    if (queryString["productName"])
    {
        document.getElementById('jsProductName').innerHTML = queryString["productName"];
        document.getElementById('jsProductImg').src = `./img/${queryString["productName"].toLowerCase()}.jpg`;
        document.getElementById('jsProductImg').alt = queryString["productName"];
    }
};