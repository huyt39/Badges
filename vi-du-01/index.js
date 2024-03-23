const express = require("express"); //nhung express
const app = express(); //khoi tao web/app su dung express
const port = 3000; //khoi tao cong
console.log ("Ok on server"); //hien thi tren terminal do code BE

app.set('views', './views'); //dinh nghia ra phan hien thi giao dien la views nam trong thu muc views
app.set('view engine', 'pug'); //dinh nghia view engine muon dung la pug
app.use(express.static('public')); //de nhung file tinh vao, day la code cua FE

app.get("/",(req,res)=>{
    res.render("index.pug", {
        title: "Trang chu"
    });
}); //lay ra giao dien, lay trang chu=>/

app.get("/products",(req,res)=>{
    res.render("products.pug", {
        title: "Trang danh sách sản phẩm"
    });
});

app.get("/blog",(req,res)=>{
    res.render("blog.pug", {
        title: "Trang danh sách bài viết"
    });
});

app.get("/contact",(req,res)=>{
    res.send(`
    <h1>Trang lien he</h1>
    <p>Xin chao, toi la Huy</p>
    <p>SDT:<b> 0987654321</b></p>
    `);
});


app.listen(port, ()=>{
    console.log("dang chay tren cong "+port);
});

