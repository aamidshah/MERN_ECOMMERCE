// // creating first web server  using node

// const http = require("http");
// const fs = require("fs");
// const { isUtf8 } = require("buffer");

// // const index = fs.readFileSync('index.html', isUtf8)

// let index;
// try {
//   index = fs.readFileSync("index.html", "utf8");
// } catch (err) {
//   console.error("Error reading index.html:", err);
//   process.exit(1);
// }

// const data = JSON.parse(fs.readFileSync("data.json", isUtf8));
// const products = data.products;

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method)

//   if(req.url.startsWith('/product')){
//     const id = req.url.split('/')[2]
//     const product  = products.find(p=> p.id ==(+id) )
  

//     if (!product) {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("Product not found");
//       return;
//     }else{
//     res.setHeader("Content-Type", "text/html");
//       let modifiedIndex = index
//         .replace("**name**", product.name)
//         .replace("**basePrice**", product.basePrice)
//         .replace("**featuredImage**", product.featuredImage)
//         .replace("**brand**", product.brand)
//         .replace("**stock**", product.stock);
//       res.end(modifiedIndex);
//       return
//     }
//   }


//   switch (req.url) {
//     case "/":
//       res.setHeader("Content-Type", "text/html");
//       res.end(index);
//       break;

//     case "/api":
//       res.setHeader("Content-Type", "application/json");
//       res.end(JSON.stringify(data));
//       break;

  


//     default:
//       res.writeHead(404, "not found");
//       res.end();
//   }
// });

// server.listen(8080);

// // console.log(req.url)

// //   console.log("server started")
// //   res.setHeader('Dummy', 'Value')
// //   // res.end(JSON.stringify(data))
// //   res.end('<h1>hello</h1>')\
// // res.setHeader('Content-Type','application/json')
// //
// // res.end(data)
