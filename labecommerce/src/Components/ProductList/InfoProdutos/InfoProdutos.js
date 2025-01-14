import React, { useState } from 'react'
import {Nav } from './infoProdutosStyle'
import productList from '../../../assets/productList'

 const InfoProdutos = ( {ordination, onOrdinationChange,productsList} ) => {
  
  
  return (
    <Nav>
      
     <div>
       <select value={ordination} onChange={onOrdinationChange}>
         <option value="">Selecione a ordenação</option>
         <option value="asc">Ordem Crescente</option>
         <option value="desc">Ordem Decrescente</option>
       </select>
       <p>Quantidade de Produtos:{productList.length} </p>
     </div>
  
    </Nav>
  )
}

export default InfoProdutos
