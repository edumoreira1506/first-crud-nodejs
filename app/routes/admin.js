module.exports = function(app){
	app.get('/formulario_inclusao_agendamento', function(req, res){
		app.app.controllers.admin.novoAgendamento(app, req, res);
	});

	app.post('/agenda/salvar', function(req, res){
		app.app.controllers.admin.salvarAgendamento(app, req, res);
	});
}