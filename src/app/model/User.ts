import { Profissao } from './Profissao';
import { Telefone } from './Telefone';

export class User {

	id: Number;
	login: String;
	nome: String;
	cpf: String;
	senha: String;
	nascimento: String;
	salario: DoubleRange;

	telefones: Array<Telefone>;
	profissao: Profissao = new Profissao();

}
