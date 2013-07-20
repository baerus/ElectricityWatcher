function bodyOnLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// PhoneGap is ready. Populate DB
function onDeviceReady() {
    alert('ready :)');
    var db = openDB();
    db.transaction(populateDB, errorCB, successCB);
}

