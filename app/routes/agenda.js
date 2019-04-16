module.exports = function(app){
	app.get('/agenda', function(req, res){
		app.app.controllers.agenda.listarAgenda(app, req, res);
	 });

	app.post('/agenda/delete', function(req,res){
		app.app.controllers.agenda.deletarContato(app, req, res);
	})

	app.post('/agenda/pesquisar', function(req,res){
		app.app.controllers.agenda.pesquisarContato(app, req, res);
	})

	app.post('/agenda/editar', function(req,res){
		app.app.controllers.agenda.editarContato(app, req, res);
	})

	app.post('/adicionar', function(req,res){
		app.app.controllers.agenda.adicionarContato(app, req, res);
	})
}