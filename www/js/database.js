function showFirstDBEntry() {
    var db = openDB();
    db.transaction(viewAllRows, queryError, querySuccess);
}

function openDB() {
    return window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
}

// Populate the database
function populateDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS DEMO');
    tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT)');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
}

// Transaction error callback
function errorCB(tx, err) {
    alert("Error processing SQL: "+err);
}

// Transaction success callback
function successCB() {
    alert("success!");
}

function viewAllRows(tx) {
    tx.executeSql('SELECT * FROM DEMO', [], querySuccess);
}

function querySuccess(tx, results) {
    var s = "Results are the following: \n\n";
    for (var i=0; i<results.rows.length; i++) {
        var row = results.rows.item(i);
        s = s + row['data'] + " (ID "+row['id']+")\n";
    }
    alert(s);
}

function queryError(tx, error) {
    alert('Im QUERY ERROR');
    alert(error.message + ' ' + error.code);
}