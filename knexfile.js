// I'm not updating this (incl. name for database) because it looks like DadJokes data lives where they already set it. 
// This file is what helps our program talk to sqlite3 and transfer migrations to database. 

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/auth.db3' }, 
    useNullAsDefault: true, // used to avoid warning on console
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },
};
