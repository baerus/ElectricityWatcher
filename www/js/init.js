function bodyOnLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);

    // DateTimePicker
    $(function() { $('#firstDate').datetimepicker({ dateFormat: 'dd.mm.yy', timeFormat: 'hh:mm:ss' }); });
}

// PhoneGap is ready. Populate DB
function onDeviceReady() {
    var db = openDB();
    db.transaction(populateDB);
}

