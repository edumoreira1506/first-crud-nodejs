module.exports = function(app){
	//respondendo arquivo caso for chamado a página
	app.get('/', function(req, res){
		console.log(app)
		app.app.controllers.home.iniciar(app, req, res);
	});

	app.post('/agenda', function(req,res){
		app.app.controllers.home.agenda(app, req, res);
	})

	app.post('/contato', function(req,res){
		app.app.controllers.home.contato(app, req, res);
	})
}