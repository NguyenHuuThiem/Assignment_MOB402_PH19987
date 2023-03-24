const express = require('express');
const exphbs = require('express-handlebars');

var app = express();
app.listen(process.env.PORT || '4000');

app.engine('.hbs', exphbs());
app.set('view engine', '.hbs');



// Đăng ký tài khoản
app.get('/', (req, res) => {
    res.render('register');
});

app.post('/', (req, res) => {
    // const email = req.body.email;
    // const password = req.body.password;
    // const name = req.body.name;
    // const avatar = req.body.avatar;

    // Kiểm tra các trường thông tin đăng ký
    // if (!email || !password || !name || !avatar) {
    //     res.render('register', {
    //         error: 'Vui lòng nhập đầy đủ thông tin'
    //     });
    //     return;
    // }

    // res.redirect('/login');
});
app.get('/login', (req, res) => {
    res.render('login');
});



// Xử lý đăng nhập
app.post('/login', (req, res) => {
    // const email = req.body.email;
    // const email = '';
    // const password = '';
    // // const password = req.body.password;

    // // Kiểm tra thông tin đăng nhập
    // if (email === 'admin@example.com' && password === 'admin123') {
    //     // req.session.user = 'admin';
    //     res.redirect('/list');
    // } else {
    res.redirect('/list');
    // res.render('login', {
    //     error: 'Email hoặc mật khẩu không chính xác'
    // });
    // }
});

// app.get('/list', (req, res) => {
//     { person: [{ name: "Josh", age: 27 }] }
//     res.render("list", { list: person });
//     // res.render('list');
// });


app.get('/update', (req, res) => {
    res.render('update');
});
app.post('/update', (req, res) => {
    res.redirect('/list');
});

app.get('/delete', (req, res) => {

    res.render('delete');
});




// app.post('/list', (req, res) => {

// });

// // Đăng nhập
// app.get('/login', (req, res) => {
//     res.render('login');
// });

// app.post('/login', (req, res) => {
//     // Xử lý đăng nhập ở đây
// });

