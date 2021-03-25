let db;
// create a new db for the database.
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function (event) {
    // create object store called "pending" and set autoIncrement to true
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
  };

  request.onsuccess = function (event) {
    db = event.target.result;
  
    // check if app is online before reading from db
    if (navigator.onLine) {
      checkDatabase();
    }
  };

  request.onerror = function (event) {
    console.log("Error! " + event.target.errorCode);
  };