<script setup>
import { ref, onMounted } from 'vue';
import CountryService from '@/service/CountryService';
import NodeService from '@/service/NodeService';

const autoValue = ref(null);
const selectedAutoValue = ref(null);
const autoFilteredValue = ref([]);

const treeSelectNodes = ref(null);
const countryService = new CountryService();
const nodeService = new NodeService();

onMounted(() => {
    countryService.getCountries().then((data) => (autoValue.value = data));
    nodeService.getTreeNodes().then((data) => (treeSelectNodes.value = data));
});

const searchCountry = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            autoFilteredValue.value = [...autoValue.value];
        } else {
            autoFilteredValue.value = autoValue.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
};
</script>
<template>
<div>
    <div style="display: flex; justify-content: space-between; margin-top:1%;">
        <div class="w-auto">
            <h5>Categoria</h5>
            <AutoComplete
                style="display: flex; justify-content: space-between"
                placeholder="Search"
                id="dd"
                :dropdown="true"
                :multiple="true"
                v-model="selectedAutoValue"
                :suggestions="autoFilteredValue"
                @complete="searchCountry($event)"
                field="name"
            />
        </div>
        <div style="width: 45%;">
            <h5>Descrição</h5>
            <AutoComplete placeholder="Search" id="dd" :dropdown="true" :multiple="true" v-model="selectedAutoValue" :suggestions="autoFilteredValue" @complete="searchCountry($event)" field="name" />
        </div>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top:1%;">
        <div style="width: 45%;">
            <h5>Unidade</h5>
            <AutoComplete
                style="display: flex; justify-content: space-around;"
                placeholder="Search"
                id="dd"
                :dropdown="true"
                :multiple="true"
                v-model="selectedAutoValue"
                :suggestions="autoFilteredValue"
                @complete="searchCountry($event)"
                field="name"
            />
        </div>
        <div style="width: 45%;">
            <h5>Área ou Responsável</h5>
            <AutoComplete placeholder="Search" id="dd" :dropdown="true" :multiple="true" v-model="selectedAutoValue" :suggestions="autoFilteredValue" @complete="searchCountry($event)" field="name" />
        </div>
    </div>
    <h5>Observações</h5>
    <Textarea placeholder="Your Message" :autoResize="true" rows="3" cols="30" />
    <div style="display: flex; justify-content: flex-end; margin-top: 5%; ">
        <a style="margin-right: 1%" href="http://localhost:5173/"><Button label="Voltar" class="mr-2 mb-2 p-button-warning" /></a>
        <a style="margin-right: 1%" href="http://localhost:5173/#/uikit/menu/seat"> <Button label="Proximo" class="p-button-info mr-2 mb-2" /></a>
        <a href="http://localhost:5173/"><Button label="Cancelar" class="p-button-danger mr-2 mb-2" /></a>
    </div>
</div>
</template>
