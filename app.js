const express = require('express');
const exphbs = require('express-handlebars');

var app = express();
app.listen(process.env.PORT || '4000');

app.engine('.hbs', exphbs());
app.set('view engine', '.hbs');



// Đăng ký tài khoản
app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
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
    const email = '';
    const password = '';
    // const password = req.body.password;

    // Kiểm tra thông tin đăng nhập
    if (email === 'admin@example.com' && password === 'admin123') {
        // req.session.user = 'admin';
        res.redirect('/list');
    } else {
        res.redirect('/list');
        // res.render('login', {
        //     error: 'Email hoặc mật khẩu không chính xác'
        // });
    }
});

// app.get('/list', (req, res) => {
//     { person: [{ name: "Josh", age: 27 }] }
//     res.render("list", { list: person });
//     // res.render('list');
// });
app.get('/list', (req, res) => {
    const products = [
      { msp: 'PH19987',name: 'Áo Phông nam', price:'Giá: ' + 10 + ' VND', 
      anh:'data:image/jpeg;base64,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',
       mau:'Màu:'+' Trắng' },
       
      { msp: 'PH19987',name: 'Áo Phông nam', price:'Giá: ' + 10 + ' VND', 
      anh:'data:image/jpeg;base64,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',
       mau:'Màu:'+' Đen' },

      { msp: 'PH19987',name: 'Áo Phông nam', price:'Giá: ' + 10 + ' VND', 
      anh:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-pEf-DNrDFwHjMRkUS5ctQx397lFLRoXSw&usqp=CAU',
       mau:'Màu:'+' Xanh' }
    //   { name: 'Product 2', price: 20 },
    //   { name: 'Product 3', price: 30 }
    ];
    res.render('list', { products });
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

