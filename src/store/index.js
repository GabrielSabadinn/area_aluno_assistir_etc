/*
import Vuex from 'vuex'
import axios from 'axios';
const store = new Vuex.Store({
  state: {
    acessToken:'',
    filtros:{
      modalidade:[],
      area:[],
      pontuacaoEPC:[]
    },
    carrinho:[],
    countCarrinho:0,
    usuario: null,
    cursos:[]
  },
  actions:{
    async fetchEsqueciSenha({commit},email){      
      return axios.post('http://localhost:3001/api/pagamento/esquecisenha',{email})
    },
    async fetchLogar({commit},data){      
      return axios.post('http://localhost:3001/api/pagamento/logar',data)
    },
    async fetchCadastrar({commit},data){      
      return axios.post('http://localhost:3001/api/pagamento/cadastrar',data)
    },
    async fetchDataCursos({commit}){
      await axios.get('https://www.cursoslefisc.com.br/api/home/cursos/cards')
      .then(response=>{
        for(let item of response.data[0]){
          let dataTpm = item.data_inicio.toString().split('-')
          item.data_inicio = dataTpm[2].substring(0,2)+'/'+dataTpm[1]
          commit('setFiltros', item);  
        }
        commit('setCursos', response.data[0]);
      })
      .catch(e=>console.log(e))
    },
    async fetchPerfilUser({commit}){
      await axios.get('https://www.cursoslefisc.com.br/api/sandbox/aluno/perfil')
      .then(response=>{      
        commit('setUsuario', response.data);
      })
      .catch(e=>{
        console.log(e)
      })
    }
  },
  mutations: {
    setFiltros(state,curso){      
      let existeModalidade = state.filtros.modalidade.find(e=> e?.modalidade == curso.modalidade)
      if(existeModalidade == undefined){
        state.filtros.modalidade.push({"modalidade":curso.modalidade,"id_modalidade":curso.id_modalidade})
      }
      let existepontuacaoEPC = state.filtros.pontuacaoEPC.find(e=> e?.pontuacao_cfc == curso.pontuacao_cfc)
      if(existepontuacaoEPC == undefined){
        state.filtros.pontuacaoEPC.push({"pontuacao_cfc":curso.pontuacao_cfc})
      }
      let existepontuacaoArea = state.filtros.area.find(e=> e?.area == curso.categoria)
      if(existepontuacaoArea == undefined){
        state.filtros.area.push({"area":curso.categoria})
      } 
    },
    setCarrinho(state,carrinho){
      state.carrinho = carrinho
    },
    setUsuario(state,usuario){      
      state.usuario = usuario
    },
    setAcessToken(state,acessToken){      
      state.acessToken = acessToken
    },
    setCursoCarrinho(state,id){
      let curso = state.cursos.find(e=>e.id == id)
      if(state.carrinho.length == 0){
        curso.quantidade = 1
        state.carrinho.push(curso)
      }else{
        let existeCurso = state.carrinho.findIndex(e=>e.id == curso.id)
        if(existeCurso == -1){
          curso.quantidade = 1
          state.carrinho.push(curso)
        }
      }      
      localStorage.setItem('carrrinhoCurso',JSON.stringify(state.carrinho))
    },    
    setCoutCarrinho(state, countCarrinho) {
      state.countCarrinho = countCarrinho;
    },
    setCursos(state,cursos){
      state.cursos = cursos;
    }
  },  
  getters: {
    getCountCarrinho: state => state.countCarrinho,
    getCursos: state => state.cursos,
    getCursosCarrinho: state => state.carrinho,
    getFiltros: state => state.filtros,
    getUsuario: state => state.usuario,
    getAcessToken: state => state.acessToken
  },
});

export default store;
*/