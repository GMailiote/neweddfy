    <!---<h4>Resumo de Custo</h4>
    <div class="">
        <h5>Tipo: Fixo</h5>
        <h5>Categoria: Aluguel</h5>
        <h5>Descrição: Despesas com Aluguel de imóveis</h5>
        <h5>Unidade de Negócio: Loja A</h5>
        <h5>Área Responsável: Operação</h5>
        <h5>Vencimento: 23/10/2023</h5>
        <h5>Valor: R$ 500,00</h5>
        <h5>Nota Fiscal: 123</h5>
        <h5>Forma de Pagamento: PIX</h5>
        <h5>Projeto ou cliente Relacionado: nenhum</h5>
        <h5>Observações: Pagamento a vista</h5>
        <h5>Cobrar o custo automaticamente todo mês: Sim</h5>
        <h5>Este custo tem uma data final? Não</h5>

    </div>
    <div style="display: flex; justify-content: flex-end; margin-top: 5%; ">
        <a style="margin-right: 1%" href="http://localhost:5173/#/uikit/menu/payment"><Button label="Voltar" class="mr-2 mb-2 p-button-warning" /></a>
        <a style="margin-right: 1%" href="http://localhost:5173/"> <Button label="Salvar" class="p-button-success mr-2 mb-2" /></a>
        <a href="http://localhost:5173/"><Button label="Cancelar" class="p-button-danger mr-2 mb-2" /></a>
    </div>

    !--->

<script setup>
    
    const trocarTela = (tela) => {
        this.$emit('trocarTela', tela);
};
</script>
<template>
    
<h4> Resumo de Custo</h4>
<div>
    <h5 class="line-height-1 mt-1">Tipo: Fixo</h5>
    <h5 class="line-height-1 mt-1">Categoria: Aluguel</h5>
    <h5 class="line-height-1 mt-1">Descrição: Despesas com Aluguel de imóveis</h5>
    <h5 class="line-height-1 mt-1">Unidade de Negócio: Loja A</h5>
    <h5 class="line-height-1 mt-1">Área Responsável: Operação</h5>
    <h5 class="line-height-1 mt-1">Vencimento: 23/10/2023</h5>
    <h5 class="line-height-1 mt-1">Valor: R$ 500,00</h5>
    <h5 class="line-height-1 mt-1">Nota Fiscal: 123</h5>
    <h5 class="line-height-1 mt-1">Forma de Pagamento: PIX</h5>
    <h5 class="line-height-1 mt-1">Projeto ou cliente Relacionado: nenhum</h5>
    <h5 class="line-height-1 mt-1">Observações: Pagamento a vista</h5>
    <h5 class="line-height-1 mt-1">Cobrar o custo automaticamente todo mês: Sim</h5>
    <h5 class="line-height-1 mt-1">Este custo tem uma data final? Não</h5>

</div>
<div style="display: flex; justify-content: flex-end; margin-top: 5%; ">
    <a style="margin-right: 1%" href="http://localhost:5173/"><Button label="Salvar" class="mr-2 mb-2 p-button-success" /></a>
    <a style="margin-right: 1%" href="http://localhost:5173/#/uikit/menu/seat"> <Button label="Voltar" class="mr-2 mb-2 p-button-warning " /></a>
    <a href="http://localhost:5173/"><Button label="Proximo" class="mr-2 mb-2 p-button-primary" /></a>
    <a href="http://localhost:5173/"><Button label="Cancelar" class="ml-2 mb-2 p-button-danger" /></a>
</div>

</template>

