function makeFoto() {
    var options = {
        // sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: Camera.DestinationType.FILE_URI,
        quality: 10
    };
    navigator.camera.getPicture(onSuccess, onFail, options);
}

function onSuccess(imageURI) {
    var image = document.getElementById('largeImage');
    image.src = imageURI;
    image.style.display = 'block';
}

function onFail(message) {
    alert("The task failed, read the message: " + message);
}