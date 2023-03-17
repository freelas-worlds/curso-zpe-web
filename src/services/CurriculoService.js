import Api from 'src/services/Api';

export default function CurriculoService() {

  const { listar, recuperar, salvar, deletar, atualizar } = Api('/curriculo');

  return {
    listar,
    recuperar,
    salvar,
    deletar,
    atualizar
  };

}
