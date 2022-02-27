const moment =  require('moment')

const logger = (req, res, next) => { 
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} time : ${moment().format()}`);

   next();
}


// const logger = (req, res ,next) => {
//     console.log('Time:', Date.now()) // ส่วนนี้จะทำงานทุกครั้งเมื่อมี request เข้ามา
//     console.log(`Listening at http://localhost:${req}`);
//     next()
// } 


// app.use(function (req, res, next) {
//     console.log('Time:', Date.now()) // ส่วนนี้จะทำงานทุกครั้งเมื่อมี request เข้ามา
//     next()
// })
module.exports = logger;