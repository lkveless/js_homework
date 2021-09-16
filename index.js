const express = require('express')
const app = express()


app.listen(3000)

app.set('view engine', 'ejs')
app.set('views', 'pages');
app.use(express.urlencoded({ extended: true }));



app.get('/', (req,res)=>{
    res.render('index')
})


app.get('/sum', (req,res)=>{
    res.render('sum', {sum: ''})
})


app.post('/sum', (req,res)=>{
    res.render('sum', {
        sum: (Number.parseInt(req.body.first) + Number.parseInt(req.body.second)).toString()
    })
})

app.get('/reverse', (req,res)=>{
    res.render('reverse', {reverse: ''})
})


app.post('/reverse', (req,res)=>{
    res.render('reverse', {
        reverse: (req.body.array.split(' ').reverse().join(' '))
    })
})

app.get('/reverseCase', (req,res)=>{
    res.render('reverseCase', {reverseText: ''})
})


app.post('/reverseCase', (req,res)=>{
    result = ''
    let len = req.body.text.length
    for (var i = 0; i < len; i++){
        var character = req.body.text[i];
        if(character == character.toLowerCase()){
            result = result + character.toUpperCase();
        } else{
            result = result + character.toLowerCase();
        }
    }
    res.render('reverseCase', {reverseText: result})
})


