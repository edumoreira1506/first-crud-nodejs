module.exports.iniciar = function(app, req, res){
	res.render('home/index');
}

module.exports.agenda = function(app, req, res){
	var connection = app.config.dbConnection();
	var agendaModel =  new app.app.models.AgendaDAO(connection);
	//executando a função que o db connection está retornando

	agendaModel.getAgenda(function(error, result){
		//passando tudo pra view
		res.render("agenda/agenda", {agenda : result});
	});
}

module.exports.contato = function(app, req, res){
	res.render('admin/form_add_agendamento', {validacao:{}, agendamento : {}});
}