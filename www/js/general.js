function calculateKWPrice(firstDateString, firstKWhBeforeComma, firstKWhAfterComma, kwBeforeComma, kwAfterComma) {
    const pricePerMonth = 2.5;
    const pricePerKWh = 0.2749;

    // Strings zu Integer auf Basis 10 (Decimal).
    firstKWhBeforeComma = parseInt(firstKWhBeforeComma, 10);
    firstKWhAfterComma = parseInt(firstKWhAfterComma, 10);
    kwBeforeComma = parseInt(kwBeforeComma, 10);
    kwAfterComma = parseInt(kwAfterComma, 10);

    // TODO: Das muss auch iwie mit DateFormat oder sowas gehen...
    var day = firstDateString.split('.')[0];
    var month = firstDateString.split('.')[1] - 1;
    var year = firstDateString.split('.')[2].substr(0, 4);
    var hour = firstDateString.split(' ')[1].split(':')[0];
    var minute = firstDateString.split(' ')[1].split(':')[1];
    var second = firstDateString.split(' ')[1].split(':')[2];

    var today = new Date().getTime(); // heute in Milliseconds
    var firstDate = new Date(year, month, day, hour, minute, second).getTime(); // FirstDate in Milliseconds
    var periodInDays = (today - firstDate) / (1000 * 3600 * 24); // in days

    var totalKWh = kwBeforeComma + kwAfterComma/100 - firstKWhBeforeComma - firstKWhAfterComma/100;
    console.log('Total KWh used until today: ' + totalKWh);

    var totalPriceUntilToday = totalKWh * pricePerKWh + (periodInDays/30)*pricePerMonth;
    var estimatedKWhFor1Month = (totalKWh / periodInDays) * 30;
    var estimatedPriceFor1Month = estimatedKWhFor1Month * pricePerKWh + pricePerMonth;
    var estimatedKWhFor1Year = (totalKWh / periodInDays) * 365;
    var estimatedPriceFor1Year = estimatedKWhFor1Year * pricePerKWh + pricePerMonth * 12;

    var returnValues = {
        totalPriceUntilToday: parseInt(totalPriceUntilToday),
        estimatedKWhFor1Month: parseInt(estimatedKWhFor1Month),
        estimatedPriceFor1Month: parseInt(estimatedPriceFor1Month),
        estimatedKWhFor1Year: parseInt(estimatedKWhFor1Year),
        estimatedPriceFor1Year: parseInt(estimatedPriceFor1Year)
    };

    fillCalculatedData(returnValues);
}

function fillCalculatedData(returnValues) {
    $('#totalPrice').text(returnValues.totalPriceUntilToday);
    $('#averageKWh1month').text(returnValues.estimatedKWhFor1Month);
    $('#averageprice1month').text(returnValues.estimatedPriceFor1Month);
    $('#averageKWh1year').text(returnValues.estimatedKWhFor1Year);
    $('#averageprice1year').text(returnValues.estimatedPriceFor1Year);

    $('#results').show();
}