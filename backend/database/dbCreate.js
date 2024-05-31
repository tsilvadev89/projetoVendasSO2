const mariadb = require('mariadb');
const createTableQueries = require('./dbDefault');
const initialInserts = require('./dbInsert');

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "fatec",
  port: 3308,
  connectionLimit: 5
});

async function initializeDatabase() {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Conectado");

    // Criar o banco de dados se não existir
    await conn.query("CREATE DATABASE IF NOT EXISTS so2");
    await conn.query("USE so2");

    // Verificar se há tabelas no banco de dados
    const rows = await conn.query("SHOW TABLES");
    const tables = rows.map(row => Object.values(row)[0]);

    if (tables.length === 0) {
      // Criar tabelas conforme o padrão
      for (const table in createTableQueries) {
        if (createTableQueries.hasOwnProperty(table)) {
          await conn.query(createTableQueries[table]);
          console.log(`Tabela ${table} criada com sucesso`);
        }
      }

      console.log("Estrutura padrão do banco de dados criada");

      // Popular banco com inserts iniciais
      for (const table in initialInserts) {
        if (initialInserts.hasOwnProperty(table)) {
          await conn.query(initialInserts[table]);
          console.log(`Insert ${table} criado com sucesso`);
        }
      }
    } else {
      console.log("O banco de dados 'so2' já possui tabelas");
    }
  } catch (err) {
    console.error("Erro:", err);
  } finally {
    if (conn) {
      try {
        await conn.end();
        console.log("Conexão encerrada");
      } catch (err) {
        console.error("Erro ao encerrar a conexão:", err);
      }
    }
  }
}

initializeDatabase().then(() => process.exit()).catch(err => {
  console.error("Erro na inicialização do banco de dados:", err);
  process.exit(1);
});
