import http from 'http'
import fs from 'fs'

function serveStaticFile(response, path, contentTpye, responseCode){
  fs.readFile(path, function(err, data){
    if(err){
      response.writeHead(500,{'content-type':'text/plain'})
      response.end('500-Internal Error')
    } else {
      response.writeHead(responseCode, {'content-type':contentTpye})
      response.end(data)
    }
  })
} //serveStaticFile 끝

const server = http.createServer(function(request, response){
  const url = request.url.toLowerCase();
  switch (url) {
    case '/':
      serveStaticFile(response, './server/index.html','text/html',200);
      console.log(url)
      break;
    case '/about':
      serveStaticFile(response, './server/about.html','text/html',200);
      break;
    case '/contact':
      serveStaticFile(response, './server/contact.html','text/html',200);
      break;
    case '/style.css':
      serveStaticFile(response, './server/style.css','text/css',200);
      break;
    case 'script.js':
      serveStaticFile(response, './server/script.js','text/javascript',200);
      break;
    default: //만약에 위의 조건에 부합하지 않는것이 있을 경우 default를 띄워준다.
      serveStaticFile(response, './server/404.html','text/html',404);
      break;
  } //switch 끝
}) //server 끝

server.listen(2080, ()=>{
  console.log('2080포트 정상작동중')
})