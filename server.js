const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => res.end('Express con HTML V2!!!'))

//STARTING THE SERVER
app.listen(app.get('port'), (error) => {
    if (error) {
        console.log('There Was an Error', $(error)); 
    } else {
        console.log('Server runing on Port', app.get('port'));
    }
    
});


// app.listen(3000);
// console.log('Server on port 3000')