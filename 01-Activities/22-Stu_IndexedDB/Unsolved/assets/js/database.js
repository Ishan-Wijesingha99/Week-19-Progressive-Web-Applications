import { openDB } from 'idb';

const initdb = async () =>

// creates indexedDB database

  openDB('todos', 1, {
    // if database exists, do this, log to the console the database already exists
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // if it doesn't exist, create the database and log to the console it exists
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
