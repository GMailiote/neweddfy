<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Hierarchy',
        items: [
            {
                label: 'RELATÓRIOS',
                icon: 'pi pi-chart-bar',
                items: [
                    {label: 'FINANCEIRO',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'RESUMO FINANCEIRO',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'PERFORMANCE DO NEGÓCIO',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'DESPESAS DETALHADAS',icon: 'pi pi-fw pi-bookmark'},
                ]
            },
            {
                label: 'ORÇAMENTOS',
                icon: 'pi pi-fw pi-chart-line',
                items: [

                    {label: 'CUSTOS',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'RESUMO FINANCEIRO',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'VENDAS',icon: 'pi pi-fw pi-bookmark'},
                ]
            },
            {
                label: 'CUSTOS',
                icon: 'pi pi-fw pi-window-minimize',
                items: [

                    {label: 'NOVO CUSTO',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'SUMÁRIO DE CUSTOS',icon: 'pi pi-fw pi-bookmark'},
                ]
            },  
            {
                label: 'PRODUTOS',
                icon: 'pi pi-fw pi-box',
                items: [

                    {label: 'NOVO PRODUTO',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'SUMÁRIO DE PRODUTOS',icon: 'pi pi-fw pi-bookmark'},
                ]
            },
            {
                label: 'COMPRAS',
                icon: 'pi pi-fw pi-briefcase',
                items: [

                    {label: 'NOVA COMPRA',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'SUMÁRIO DE COMPRAS',icon: 'pi pi-fw pi-bookmark'},
                ]
            },
            {
                label: 'FORNECEDORES',
                icon: 'pi pi-fw pi-building',
                items: [

                    {label: 'NOVO FORNECEDOR',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'LISTA DE FORNECEDORES',icon: 'pi pi-fw pi-bookmark'},
                ]
            },
            {
                label: 'VENDAS',
                icon: 'pi pi-fw pi-dollar',
                items: [

                    {label: 'NOVA VENDA',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'SUMÁRIO DE VENDAS',icon: 'pi pi-fw pi-bookmark'},
                ]
            },
            {
                label: 'CLIENTES',
                icon: 'pi pi-fw pi-users',
                items: [

                    {label: 'NOVO CLIENTE',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'LISTA DE CLIENTES',icon: 'pi pi-fw pi-bookmark'},
                ]
            },
            {
                label: 'COLABORADORES',
                icon: 'pi pi-fw pi-users',
                items: [

                    {label: ' NOVO COLABORADOR',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'LISTA DE COLABORADORES',icon: 'pi pi-fw pi-bookmark'},
                ]
            },
            {
                label: 'MINHA CONTA',
                icon: 'pi pi-fw pi-user',
                items: [

                    {label: 'SOBRE VOCÊ',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'SUA EMPRESA',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'SUA ASSINATURA',icon: 'pi pi-fw pi-bookmark'},
                    {label: 'SUPORTE TÉCNICO',icon: 'pi pi-fw pi-bookmark'},
                ]
            }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
