const express = require('express');
const cors = require('cors');

const {Sequelize} = require('./models')

const models = require('./models');

const app = express();
app.use(cors());
app.use(express.json())

let cliente = models.Cliente;
let itempedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;
let compra = models.Compra;
let itemcompra = models.ItemCompra;
let produto = models.Produto;



app.get('/',function(req,res){
    res.send('Hello World')
})

app.get('/clientes',function(req,res){
    res.send('Sejam bem vindos a ServicesTI')
})
app.post('/servicos',async(req,res)=>{
    await servico.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Serviço criado com sucesso'

        })
       
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: 'Foi impossivel se conectar'
        })
    })
    
});
app.get('/listaclientes', async(req,res)=>{
    await cliente.findAll({
        raw:true ,                 
    }).then(function(clientes){
        res.json({clientes})
    })
})

app.get('/listaservicos', async(req,res)=>{
    await servico.findAll({
        //raw:true
        order: [['nome','ASC']]
    }).then (function(servicos){
        res.json({servicos})
    });
});

app.get('/ofertaservicos',async(req,res)=>{
    await servico.count('id').then(function(servicos){
        res.json({servicos});
    })
})

// app.get('/servico/:id', async (req,res)=>{
//     await servico.findByPk(req.params.id)
//     .then(serv =>{
//         return res.json({
//             error:false,
//             serv
//         })
//     }).catch(funtion(erro){
//         return res.status(400).json({
//             error:true
//             message:'Erro:código não encontrado'
//         })
//     })
// })

app.put('/autalizaservico', async(req,res)=>{
    await servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'Serviço foi alterado com sucesso'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message: "Houve erro na alteração do serviço"
        })
    })
})

app.get('/pedidos/:id' , async(req,res)=>{
    await pedido.findByPk(req.params.id,{include:[{all: true}]})
    .then(ped=>{
        return res.json({ped})
    })
})

app.put('/pedidos/:id/editaritem',async(req,res)=>{
    const item ={
        quantidade:req.body.quantidade,
        valor: req.body.valor
    };
    if(!await pedido.findByPk(req.params.id)){
        return res.status(400).json({
            error:true,
            message: 'Pedido não foi encontrado'
        })
    }
    if(!await servico.findByPk(req.body.ServicoId)){
        return  res.status(400).json({
            error:true,
            message: 'Serviço não foi encontrado'
        })
    }

    await itempedido.update(item,{
        where: Sequelize.and({ServicoId: req.body.ServicoId},
            {PedidoId: req.params.id})
    }).then(function(items){
        return res.json({
            error: false,
            message:'Pedido foi alterado com sucesso',
            itens
        })
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message: 'Não foi possivel alterar'
        })
    })
})

app.get('/excluircliente/:id', async(req,res)=>{
    await cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error:false,
            message: 'Cliente foi excluido com sucesso'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:'Erro ao excluir o cliente'
        })
    })
});

let port = process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001');
})