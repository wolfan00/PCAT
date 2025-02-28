const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    const photo = {
        id:1,
        name:"photo Name",
        description:"photo Description"
    }
  res.send(photo)
})
app.listen(port, () => console.log(`Sunucu ${port}! portunda başlatıldı.`))