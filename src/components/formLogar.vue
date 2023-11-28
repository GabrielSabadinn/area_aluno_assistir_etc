<!--
<template> 
    <FormKit  
          type="form"
          submit-label="Entrar"   
          @submit="submitForm"  ref="btnEntrar">                            
            <FormKit
                name="usuario"
                :label="isAluno ? 'E-mail ou CPF' : 'CNPJ'"
                validation="required" />
            <FormKit                
                type="password"
                name="senha"
                label="Senha"
                suffix-icon="eyeClosed"
                :validation="[['required'],['length',6]]"                    
                @suffix-icon-click="handleIconClick"/>  
                <p @click="changeForm()" style="color: rgb(17, 85, 204); font-size: 14px;text-align: right;margin-top: 10px;margin-bottom: 10px;font-size: 13px;cursor: pointer;">Esqueceu sua senha</p>
        </FormKit> 
</template>
<script>
import {mapActions} from 'vuex'
export default {      
props:['isAluno'],
data(){
    return{       
        esqueceuSenha:false,      
        textErro:''
    }
},
methods:{        
    ...mapActions(['fetchLogar']),      
    handleIconClick(node, e){
        node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
        node.props.type = node.props.type === 'password' ? 'text' : 'password'
    },
    changeForm(){               
        this.$emit('getIdComponente',3)        
    },
    submitSenha(e){
        let ref  = this.$refs.btnEsqueceuSenha.$el
        console.log(ref)
    },
    submitForm(e){
        const obj  = this.$refs.btnEntrar.node.value
        return new Promise(async (r) => {
            await this.fetchLogar(obj).then(response=>{
                    let ref  = this.$refs.btnEntrar.$el.querySelector('button.formkit-input')  
                    ref.style.background = '#53ba83'  
                    ref.textContent = 'Redirecionando . . .'  
                    setTimeout(()=>{                           
                        window.location.reload()                           
                    },1400)
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
[data-type="submit"] button.formkit-input{
background: #ff822e ;
}
</style>
-->