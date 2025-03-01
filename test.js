const db = require(`./db`);

/* db.query(`delete from photos where id=1`,(err,result)=>{
    if(err)console.log(err)
        console.log(result)
    console.log("işlem başarılı")
}) */

/*     db.query(`select * from photos`,(err,result)=>{
        if(err) console.log("err")
            console.log(result)
            console.log("işlem başarılı")
    }) */

db.query(`select * from photos`, (err, result) => {
  if (err) console.log('err');
  console.log(result);
  console.log('işlem başarılı');
});
