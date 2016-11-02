var colorful = function () {
    setInterval(function () {
        document.getElementById('message').style.color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }, 500)
}

$("#button").click(function () {
    $.get("reply", function (data) {
        $("#button").replaceWith(data);
        colorful();
    });
});





