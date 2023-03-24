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
app.get('/list', (req, res) => {
    const products = [
        {
            id: 1,
            msp: 'PH19987', name: 'Áo Phông nam', price: 'Giá: ' + 10 + ' VND',
            anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-pEf-DNrDFwHjMRkUS5ctQx397lFLRoXSw&usqp=CAU',
            mau: 'Màu:' + ' Trắng'
        },

        {
            id: 2,
            msp: 'PH19987', name: 'Áo Phông nam', price: 'Giá: ' + 10 + ' VND',
            anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-pEf-DNrDFwHjMRkUS5ctQx397lFLRoXSw&usqp=CAU',
            mau: 'Màu:' + ' Đen'
        },

        {
            id: 3,
            msp: 'PH19987', name: 'Áo Phông nam', price: 'Giá: ' + 10 + ' VND',
            anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-pEf-DNrDFwHjMRkUS5ctQx397lFLRoXSw&usqp=CAU',
            mau: 'Màu:' + ' Xanh'
        },
        {
            id: 4,
            msp: 'PH19987', name: 'Áo Phông nam', price: 'Giá: ' + 10 + ' VND',
            anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-pEf-DNrDFwHjMRkUS5ctQx397lFLRoXSw&usqp=CAU',
            mau: 'Màu:' + ' Trắng'
        },

        {
            id: 5,
            msp: 'PH19987', name: 'Áo Phông nam', price: 'Giá: ' + 10 + ' VND',
            anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-pEf-DNrDFwHjMRkUS5ctQx397lFLRoXSw&usqp=CAU',
            mau: 'Màu:' + ' Đen'
        }
        //   { name: 'Product 2', price: 20 },
        //   { name: 'Product 3', price: 30 }
    ];
    res.render('list', { products });
});



app.get('/update', (req, res) => {
    res.render('update');
});
app.post('/update', (req, res) => {
    res.redirect('/list');
});
