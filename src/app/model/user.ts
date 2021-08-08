export class User {

	id: Number;
	login: String;
	nome: String;
	cpf: String;
	senha: String;

	User(id: number, login: string, nome: string, cpf: string, senha: string) {
		this.id = id;
		this.login = login;
		this.nome = nome;
		this.cpf = cpf;
		this.senha = senha;
	}
}
