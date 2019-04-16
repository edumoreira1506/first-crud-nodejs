module.exports = function(app){
	app.get('/agendamento', function(req, res){
		app.app.controllers.agendamento.agendamento(app, req, res);
	 });

	app.post('/agendamento/editar', function(req,res){
		app.app.controllers.agendamento.editar(app, req, res);
	})
}