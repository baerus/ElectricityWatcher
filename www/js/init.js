function bodyOnLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);

    var db = openDB();
    // Populate DB
    db.transaction(populateDB);
    db.transaction(addRow);

    // DateTimePicker
    $(function() { $('#firstDate').datetimepicker({ dateFormat: 'dd.mm.yy', timeFormat: 'hh:mm:ss' }); });
}

// PhoneGap is ready.
function onDeviceReady() {

}

