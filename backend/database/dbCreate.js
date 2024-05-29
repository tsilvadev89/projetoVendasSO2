const mysql = require('mysql2');
const createTableQueries = require('./dbDefault');
const initialInserts = require('./dbInsert');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fatec",
});

con.query("CREATE DATABASE IF NOT EXISTS so2", function (err, result) {
    if (err) throw err;

    con.query("USE so2", function (err, result) {
        if (err) {
            console.error("Erro ao selecionar o banco de dados 'so2':", err);
            con.end();
            return;
        }

        con.query("SHOW TABLES", function (err, result) {
            if (err) throw err;

            const tables = result.map(row => row['Tables_in_so2']);

            if (tables.length === 0) {
                
                Object.keys(createTableQueries).forEach(table => {
                    con.query(createTableQueries[table], function (err, result) {
                        if (err) throw err;
                        console.log(`Tabela ${table} criada com sucesso`);
                    });
                });

                console.log("Estrutura padrão do banco de dados criada");


                // AGORA VAMOS POPULAR BANCO
                Object.keys(initialInserts).forEach(table => {
                    con.query(initialInserts[table], function (err, result) {
                        if (err) throw err;
                        console.log(`Insert ${table} criado com sucesso`);
                    });
                });
                con.end();
            } else {
                console.log("O banco de dados 'so2' já possui tabelas");
                con.end();
            }
        });
    });
});
