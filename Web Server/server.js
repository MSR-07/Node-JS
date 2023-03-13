// Web Server with Parameters
const http = require("http");
const PORT = 3000;
const server = http.createServer();

const colleagues = [
  {
    id: 0,
    name: "Ahmed Bhi",
  },
  {
    id: 1,
    name: "Umer Bhi",
  },
  {
    id: 2,
    name: "Hamza Bhi",
  },
];
server.on("request", (req, res) => {
  const items = req.url.split("/");
  if (req.method === "POST" && items[1] === "friend") {
    req.on("data", (data) => {
      const friend = data.toString();
      console.log(`Request:${friend}`);
      colleagues.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "friend") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      const colleagueIndex = Number(items[2]);
      res.end(JSON.stringify(colleagues[colleagueIndex]));
    } else {
      res.end(JSON.stringify(colleagues));
    }
  } else if (req.method === "POST" && items[1] === "message") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello, Buddy....!</li>");
    res.write("<li>How Are You......</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}....`);
});
// fetch("http://localhost:3000/friend", {
//   method: "POST",
//   body: JSON.stringify({ id: 3, name: "Sulman Bhi" }),
// });

// ----------------As Stream---------------
// fetch('http://localhost:3000/friend',{
//     method:'POST',
// body:JSON.stringify({id:3,name:'Sulman Bhi'})
// }).then((response)=> response.json())
// .then((friend)=>console.log(friend))
