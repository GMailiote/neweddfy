<script setup>
import { ref, onMounted } from 'vue';
import CountryService from '@/service/CountryService';
import NodeService from '@/service/NodeService';

const autoValue = ref(null);

const treeSelectNodes = ref(null);
const countryService = new CountryService();
const nodeService = new NodeService();

onMounted(() => {
    countryService.getCountries().then((data) => (autoValue.value = data));
    nodeService.getTreeNodes().then((data) => (treeSelectNodes.value = data));
});

</script>
<template>
    <div class="flex mt-5">
        <h5>Cobrar este custo automaticamente todo mês?</h5>
        <InputSwitch v-model="switchValue" />
    </div>
    <div class="flex mt-1">
        <h5>Este custo tem uma data final?</h5>
        <InputSwitch v-model="switchValue" />
    </div>
    <h5>Data</h5>
    <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue"></Calendar>
    <div style="display: flex; justify-content: flex-end; margin-top: 5%; ">
        <a style="margin-right: 1%" href="http://localhost:5173/#/uikit/menu/seat"><Button label="Voltar" class="mr-2 mb-2 p-button-warning" /></a>
        <a style="margin-right: 1%" href="http://localhost:5173/#/uikit/menu/confirmation"> <Button label="Proximo" class="p-button-info mr-2 mb-2" /></a>
        <a href="http://localhost:5173/"><Button label="Cancelar" class="p-button-danger mr-2 mb-2" /></a>
    </div>
</template>
