<script setup>
import Tela1 from '../views/uikit/menu/Tela1.vue'
import Tela2 from '../views/uikit/menu/Tela2.vue'
import Tela3 from '../views/uikit/menu/Tela3.vue'
import Tela4 from '../views/uikit/menu/Tela4.vue'
import SeatDemo from '../views/uikit/menu/SeatDemo.vue'
import PersonalDemo from '../views/uikit/menu/PersonalDemo.vue'
import PaymentDemo from '../views/uikit/menu/PaymentDemo.vue'
import { ref } from 'vue';

const toolbarItems = ref([
    {
        label: 'Save',
        icon: 'pi pi-check'
    },
    {
        label: 'Update',
        icon: 'pi pi-upload'
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash'
    },
    {
        label: 'Home Page',
        icon: 'pi pi-home'
    }
]);
const cardMenu = ref([
    { label: 'Save', icon: 'pi pi-fw pi-check' },
    { label: 'Update', icon: 'pi pi-fw pi-refresh' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' }
]);
const menuRef = ref(null);

const toggle = () => {
    menuRef.value.toggle(event);
};
/*
const nestedRouteItems = ref([
    {
        label: 'Personal',
        to: '/uikit/menu'
    },
    {
        label: 'Seat',
        to: '/uikit/menu/seat'
    },
    {
        label: 'Payment',
        to: '/uikit/menu/payment'
    },
    {
        label: 'Confirmation',
        to: '/uikit/menu/confirmation'
    }
]);
*/
</script>




<template>
     <div class="card">
                <TabView>
                    
                    <TabPanel header="Identificação do Custo">
                        <p class="line-height-3 m-0">
                            <Tela1/>
                        </p>
                    </TabPanel>
                    <TabPanel header="Valores e Prazos">
                        <p class="line-height-3 m-0">
                            <Tela2/>
                        </p>
                    </TabPanel>
                    <TabPanel header="Informações Adicionais">
                        <p class="line-height-3 m-0">
                            <Tela3/>
                        </p>
                    </TabPanel>
                    <TabPanel header="Confirmação de Registro">
                        <p class="line-height-3 m-0">
                            <Tela4/>
                        </p>
                    </TabPanel>
                </TabView>
        </div>
</template>
