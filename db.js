const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',  // MySQL sunucu adresi
  user: 'root',       // Kullanıcı adı
  password: 'Burhan1453*',       // Şifren (boşsa '' bırak)
  database: 'pycat' // Kullanılacak veritabanı
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL bağlantı hatası:', err);
    return;
  }
  console.log('MySQL bağlantısı başarılı!');
});

module.exports = connection;
