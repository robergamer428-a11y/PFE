import http from "http";

const server= http.createServer(async(req,res)=>{
    console.log("rota recebida: ", req.url);

    if(req.url === "/posts") {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        res.writeHead(200, {"content-Type": "text/plain; charset=utf-8"});
        res.end("--- gerado pela API (posts)---\n\n" + JSON.stringify(posts, null, 2));
    return;
    }

    res.writeHead(404, {"content-Type": "text/plain; charset=utf-8"});
    res.end("rota não encontrada!");
});

server.listen(3000, () => {
    console.log("servidor rodando em http://localhost:3000");
});