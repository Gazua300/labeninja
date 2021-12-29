import React from 'react'
import {Voltar, DetalheCard, Titulo, DivBtn} from './styled'
import axios from 'axios'
import {BASE_URL, headers} from '../../../constants/urls'

export default class Detalhe extends React.Component{
    state = {
        servico: {}
    }

    componentDidMount(){
        this.pegarServico()
    }

    pegarServico = ()=>{
        axios.get(`${BASE_URL}/jobs/${this.props.idServico}`, headers)
        .then((res)=>{
            this.setState({servico: res.data})
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err.response.data.message)
        })
    }

    render(){
        const pagamento = this.state.servico.paymentMethods && this.state.servico.paymentMethods.map((pago)=>{
            return <li key={pago}>{pago}</li>
        })
        return <div>
            <DetalheCard>
            <Titulo>{this.state.servico.title}</Titulo>
            <p><b>Descrição:</b> {this.state.servico.description} </p>
            <b>Preço:</b> R$ {this.state.servico.price}
            <p><b>Prazo:</b> {this.state.servico.dueDate} </p>
            <b>Formas de pagamento:</b> {pagamento}
            </DetalheCard>
            <DivBtn>
                <Voltar onClick={()=> this.props.mudaTela('lista')} >Voltar</Voltar>
            </DivBtn>
        </div>
    }
}