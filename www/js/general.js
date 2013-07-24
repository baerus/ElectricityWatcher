function showDatePicker() {
    alert('DP');
}

function calculateKWPrice(kwBeforeComma, kwAfterComma) {
    var today = new Date().getTime(); // heute in Milliseconds
    var firstDateString = $('#firstDate').val();
    var day = firstDateString.split('.')[0];
    var month = firstDateString.split('.')[1];
    var year = firstDateString.split('.')[2].substr(0, 4);
    var hour = firstDateString.split(' ')[1].split(':')[0];
    var minute = firstDateString.split(' ')[1].split(':')[1];
    var second = firstDateString.split(' ')[1].split(':')[2];

    var firstDate = new Date(year, month, day, hour, minute, second).getTime(); // Wahl in Milliseconds
    console.log('d: ' + day + ' m: ' + month + ' y: ' + year + ' h: ' + hour + ' m: ' + minute + ' s: ' + second);
    console.log(today);
    console.log(firstDate);
    console.log(new Date());
    console.log(new Date(year, month, day, hour, minute, second));
    var difference = today - firstDate;
    alert('Heute: ' + today + ' mit Difference: ' + difference + ' Then let\'s calc: ' + kwBeforeComma.val() + ' and ' + kwAfterComma.val());
}