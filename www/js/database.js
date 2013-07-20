function showFirstDBEntry() {
    alert('1');
    var db = openDB();
    db.transaction(viewAllRows, querySuccess);
}

function openDB() {
    return window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
}

// Populate the database
function populateDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS DEMO');
    tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
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
    tx.executeSql('SELECT * FROM DEMO');
}

function querySuccess(tx, results) {
    console.log(results);
    alert(results);
}