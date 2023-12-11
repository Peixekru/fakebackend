const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
const port = 80

// Middleware para salvar o diretório '/dist'
const staticFileMiddleware = express.static('dist');

// 1ª chamada para solicitações não redirecionadas
app.use(staticFileMiddleware);

// Usando o api history
// Diretório da solicitação HTTP (não é o diretório no disco)
app.use(history({
    index: '/index.html'
}));

// 2ª chamada para solicitações redirecionadas
app.use(staticFileMiddleware);

app.listen(port, function () {
    console.log('O servidor está ligado, ouvindo a porta - ' + port);
});