function calculateKWPrice(firstDateString, firstKWhBeforeComma, firstKWhAfterComma, kwBeforeComma, kwAfterComma) {

    // TODO: Das muss auch iwie mit DateFormat oder sowas gehen...
    var day = firstDateString.split('.')[0];
    var month = firstDateString.split('.')[1] - 1;
    var year = firstDateString.split('.')[2].substr(0, 4);
    var hour = firstDateString.split(' ')[1].split(':')[0];
    var minute = firstDateString.split(' ')[1].split(':')[1];
    var second = firstDateString.split(' ')[1].split(':')[2];

    var today = new Date().getTime(); // heute in Milliseconds
    var firstDate = new Date(year, month, day, hour, minute, second).getTime(); // FirstDate in Milliseconds
    var differenceDate = (today - firstDate) / (1000 * 3600 * 24); // in days
    console.log('Difference: ' + differenceDate + ' days');

    console.log(kwBeforeComma + ' ' + kwAfterComma + ' ' + firstKWhBeforeComma + ' ' + firstKWhAfterComma);
    var differenceKWh = kwBeforeComma + kwAfterComma/100 - (firstKWhBeforeComma + firstKWhAfterComma/100);
    console.log('Difference KWh: ' + differenceKWh);
}