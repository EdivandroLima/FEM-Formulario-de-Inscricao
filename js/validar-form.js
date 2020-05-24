function validarForm(valor,id) {
	// Função com estilo do input
	function styleErro(id) {
		document.form[id].style.borderColor="#dc3545"
		document.form[id].style.backgroundPosition="right 15px center"
		document.form.enviar.type="button";
		document.form.enviar.style.cursor="not-allowed";
	}
	// Variaveis
	var msg= document.getElementById("erro-"+id);
	var a= document.form[id];
	var enviar= document.form.enviar;
	// Se estiver vazio
	if (valor == "") {
		msg.innerHTML="O "+id+" não pode estar vazio";
		styleErro(id);
	}
	// Se email estiver errado
	else if ((id == "email") && (valor.indexOf('@') == -1 ||
			valor.indexOf('.') == -1 ||
			valor.indexOf(' ') != -1 ||
			valor.split('@')[1].indexOf('.') == -1)) {
		msg.innerHTML="O "+id+" está errado";
		styleErro(id);
	}
	// Se senha for menor de 8 caracteres
	else if(id == "senha" && valor.length < 8) {
		msg.innerHTML="A "+id+" tem que ter no minimo 8 caracteres";
		styleErro(id);
	}
	// Se estiver tudo ok
	else {
		msg.innerHTML="";
		a.style.borderColor="#d5d5d5";
		a.style.backgroundPosition="right -80px center";
		enviar.type="submit";
		enviar.style.cursor="pointer";
	}
}
// Se campos estiverem vazios
function enviarSubmit() {
	doc= document.form;
	if (doc.nome.value == "") {
		validarForm("","nome");
		doc.enviar.type="button";
	}
	if (doc.sobrenome.value == "") {
		validarForm("","sobrenome");
		doc.enviar.type="button";
	}
	if (doc.email.value == "") {
		validarForm("","email");
		doc.enviar.type="button";
	}
	if (doc.senha.value == "") {
		validarForm("","senha");
		doc.enviar.type="button";
	}
}
