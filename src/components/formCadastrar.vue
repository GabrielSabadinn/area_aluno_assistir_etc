<!--
<template>  
    <div>      
        <transition name="slide-up" mode="out-in"  >    
        <FormKit v-if="isNotCadSucess" key="formCadastrar"
          type="form"
          submit-label="Cadastrar"       
          @submit="submitForm"    
          ref="btnCadastrar" >                            
            <FormKit v-if="isAluno"
                name="nome"
                label="Nome"
                validation="required"/>            
                <FormKit 
                name="email"
                :label="'E-mail'.concat(!isAluno ? ' Empresarial' : '')"
                validation="required"/>
                <FormKit 
                name="documento"
                :label="!isAluno ? 'CNPJ' : 'CPF'"
                validation="required"
                v-maska
                :data-maska="[isAluno ? '###.###.###-##' :  '##.###.###/####-##']"/>
                <FormKit            
                type="password"
                name="senha"
                label="Senha"
                suffix-icon="eyeClosed"
                :validation="[['required'],['length',6]]"
                help="Digite sua nova senha"           
                @suffix-icon-click="handleIconClick"/>  
                <FormKit
                type="password"
                name="senha"
                label="Confirmar senha"            
                :validation="[['required'],['length',6]]"
                help="Confirme sua nova senha" />          
        </FormKit>  
                <div v-else key="avisoemail">
                    <p style="text-align: center;font-size: 18px;margin-top:40px;">Cadastro realizado com sucesso pra você</p>
                    <p style="text-align: center;font-size: 18px;font-weight: bold;margin-bottom: 40px;">Enviamos um e-mail de cofirmação para você</p>
                </div>  
       
            </transition>
    </div>
    </template>
    <script>
    import { vMaska } from "maska"
    import {mapActions,mapMutations} from 'vuex'
    export default {
        directives: { maska: vMaska },
        props:['isAluno'],   
        data(){
            return{               
                isNotCadSucess:true
            }
        },
        methods:{
            ...mapActions(['fetchCadastrar']),
            handleIconClick(node, e){
                node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
                node.props.type = node.props.type === 'password' ? 'text' : 'password'
            },
            submitForm(e){
                const obj  = this.$refs.btnCadastrar.node.value            
                return new Promise(async (r) => {
                    await this.fetchCadastrar(obj).then(response=>{
                            let ref  = this.$refs.btnCadastrar.$el.querySelector('button.formkit-input')  
                            ref.style.background = '#53ba83'  
                            ref.textContent = 'Redirecionando . . .'
                            setTimeout(()=>{                           
                                this.isNotCadSucess = false
                            },1000)
                        }).catch(e=>{
                            r(false)
                        })  
                        r(true)
                    }
                )           
            }
        }
    }
    </script>
    <style>
    
    .slide-up-enter-active,
    .slide-up-leave-active {
      transition: all 0.5s ease-out;
      
    }
    
    .slide-up-enter-from {
      opacity: 0;
      transform: translateX(150px);
    }
    
    .slide-up-leave-to {
      opacity: 0;
      transform: translateX(-150px);
    }
    
    </style>
*/
-->