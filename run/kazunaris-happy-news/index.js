// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// [START run_helloworld_service]
const express = require('express');
const app = express();

const mysql = require('mysql');
require('dotenv').config();

// TODO: 実行確認用
app.get('/', (req, res) => {
  const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  });

  async function hello() {
    const connection = await new Promise((resolve, reject) => {
      pool.getConnection((error, connection) => {
        if (error) reject(error);
        resolve(connection);
      });
    });

    const results = await new Promise((resolve, reject) => {
      connection.query('SELECT * FROM twitter_happy_news', (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });
    return results;
  }

  (async () => {
    console.log(await hello())
    res.send(`Connection OK`);
    pool.end();
  })();
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
// [END run_helloworld_service]

// Exports for testing purposes.
module.exports = app;