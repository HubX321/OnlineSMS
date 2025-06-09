const pool = require('./db');

async function showData() {
  try {
    const result = await pool.query('SELECT * FROM payments'); // replace `users` with your table name
    console.log('📦 Data in table:', result.rows);
  } catch (err) {
    console.error('❌ Error fetching data:', err);
  }
}

showData();
// ----
// const pool = require('./db');

async function listTables() {
  try {
    const result = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE';
    `);
    
    console.log("📦 Available Tables:");
    result.rows.forEach(row => {
      console.log(`- ${row.table_name}`);
    });
  } catch (err) {
    console.error('❌ Error fetching tables:', err);
  }
}

listTables();
