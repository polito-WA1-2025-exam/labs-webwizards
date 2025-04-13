import sqlite from 'sqlite3';

const db = new sqlite.Database('database.sqlite', (err) => { if (err) throw err })

/*
    Retrieve all items from one of your tables and return a Promise that resolves to an
    array of objects.
*/

export function getAllPlayers() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM PLAYERS', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

// Call the function and log the result to the console.
getAllPlayers().then((rows) => {
  console.log(rows);
}).catch((err) => {
  console.error(err);
});

/*
    Retrieve all items that respect a specific condition from one of your tables and
    return a Promise that resolves to an array of objects. 
*/
export function getAllGamesFromAPlayer(player_id) {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM GAMES WHERE PLAYER_ID = ?', [player_id], (err, rows) => {
        if (err) {
            reject(err);
        } else {
            resolve(rows);
        }
        });
    });
}

/*
    After implementing these methods, test and verify their functionality by calling
    each method and displaying the results.
*/
getAllGamesFromAPlayer(1).then((rows) => {
    console.log(rows);
}).catch((err) => {
    console.error(err);
});

/*
    Store a new item in your database. After completion, display a
    confirmation/failure message.
*/
export function addPlayer(is_logged, nickname) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO PLAYERS (IS_LOGGED, NICKNAME) VALUES (?, ?)', [is_logged, nickname], (err) => {
        if (err) {
            reject(err);
        } else {
            resolve('Player added successfully');
        }
        });
    });
}

addPlayer(1, 'addedPlayer').then((message) => {
    console.log(message);
    return getAllPlayers(); // Chain the call to getAllPlayers after addPlayer
}).then((rows) => {
    console.log(rows);
}).catch((err) => {
    console.error(err);
});
