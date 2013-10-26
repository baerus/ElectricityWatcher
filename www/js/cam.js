function makeFoto() {
    navigator.notification.confirm(
        'Hi',
        null,
        'Titel',
        'Done'
    );

    var options = {
        // sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: Camera.DestinationType.DATA_URL,
        quality: 10
    };
    navigator.camera.getPicture(onSuccess, onFail, options);
}

function onSuccess(imageData) {
    var image = document.getElementById('largeImage');
    image.src = "data:image/jpeg;base64," + imageData;
    image.style.display = 'block';
}

function onFail(message) {
    alert("The task failed, read the message: " + message);
}