import { api } from 'boot/axios';

export default function Api(url) {

  const listar = async() => {
    try {
      const curriculos = await api.get(url);
      return curriculos.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  const recuperar = async(id) => {
    try {
      return await api.get(`${url}/${id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  const salvar = async(itens) => {
    try {
      return await api.post(url, itens);
    } catch (error) {
      throw error.response.data;
    }
  }

  const atualizar = async(itens) => {
    try {
      return await api.put(`${url}/${itens.id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  const deletar = async(id) => {
    try {
      return await api.delete(`${url}/${id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  return {
    listar,
    recuperar,
    salvar,
    atualizar,
    deletar
  }

}
