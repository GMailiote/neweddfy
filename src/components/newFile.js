import Tela1 from '../views/uikit/menu/Tela1.vue';
import { ref } from 'vue';

<script setup>
import {ref} from 'vue';

const menu = ref(null);
const contextMenu = ref(null);

const nestedMenuitems = ref([
{label}: 'Customers',
icon: 'pi pi-fw pi-table',
items: [
{label}: 'New',
icon: 'pi pi-fw pi-user-plus',
items: [
{label}: 'Customer',
icon: 'pi pi-fw pi-plus'
                    },
{label}: 'Duplicate',
icon: 'pi pi-fw pi-copy'
                    }
]
            },
{label}: 'Edit',
icon: 'pi pi-fw pi-user-edit'
            }
]
    },
{label}: 'Orders',
icon: 'pi pi-fw pi-shopping-cart',
items: [
{label}: 'View',
icon: 'pi pi-fw pi-list'
            },
{label}: 'Search',
icon: 'pi pi-fw pi-search'
            }
]
    },
{label}: 'Shipments',
icon: 'pi pi-fw pi-envelope',
items: [
{label}: 'Tracker',
icon: 'pi pi-fw pi-compass'
            },
{label}: 'Map',
icon: 'pi pi-fw pi-map-marker'
            },
{label}: 'Manage',
icon: 'pi pi-fw pi-pencil'
            }
]
    },
{label}: 'Profile',
icon: 'pi pi-fw pi-user',
items: [
{label}: 'Settings',
icon: 'pi pi-fw pi-cog'
            },
{label}: 'Billing',
icon: 'pi pi-fw pi-file'
            }
]
    },
{label}: 'Quit',
icon: 'pi pi-fw pi-sign-out'
    }
]);
const breadcrumbHome = ref({icon}: 'pi pi-home', to: '/' });
const breadcrumbItems = ref([{label}: 'Computer' }, {label}: 'Notebook' }, {label}: 'Accessories' }, {label}: 'Backpacks' }, {label}: 'Item' }]);
const nestedRouteItems = ref([
{label}: 'Personal',
to: '/uikit/menu'
    },
{label}: 'Seat',
to: '/uikit/menu/seat'
    },
{label}: 'Payment',
to: '/uikit/menu/payment'
    },
{label}: 'Confirmation',
to: '/uikit/menu/confirmation'
    }
]);
const tieredMenuItems = ref([
{label}: 'Customers',
icon: 'pi pi-fw pi-table',
items: [
{label}: 'New',
icon: 'pi pi-fw pi-user-plus',
items: [
{label}: 'Customer',
icon: 'pi pi-fw pi-plus'
                    },
{label}: 'Duplicate',
icon: 'pi pi-fw pi-copy'
                    }
]
            },
{label}: 'Edit',
icon: 'pi pi-fw pi-user-edit'
            }
]
    },
{label}: 'Orders',
icon: 'pi pi-fw pi-shopping-cart',
items: [
{label}: 'View',
icon: 'pi pi-fw pi-list'
            },
{label}: 'Search',
icon: 'pi pi-fw pi-search'
            }
]
    },
{label}: 'Shipments',
icon: 'pi pi-fw pi-envelope',
items: [
{label}: 'Tracker',
icon: 'pi pi-fw pi-compass'
            },
{label}: 'Map',
icon: 'pi pi-fw pi-map-marker'
            },
{label}: 'Manage',
icon: 'pi pi-fw pi-pencil'
            }
]
    },
{label}: 'Profile',
icon: 'pi pi-fw pi-user',
items: [
{label}: 'Settings',
icon: 'pi pi-fw pi-cog'
            },
{label}: 'Billing',
icon: 'pi pi-fw pi-file'
            }
]
    },
{separator}: true
    },
{label}: 'Quit',
icon: 'pi pi-fw pi-sign-out'
    }
]);
const overlayMenuItems = ref([
{label}: 'Save',
icon: 'pi pi-save'
    },
{label}: 'Update',
icon: 'pi pi-refresh'
    },
{label}: 'Delete',
icon: 'pi pi-trash'
    },
{separator}: true
    },
{label}: 'Home',
icon: 'pi pi-home'
    }
]);
const menuitems = ref([
{label}: 'Customers',
items: [
{label}: 'New',
icon: 'pi pi-fw pi-plus'
            },
{label}: 'Edit',
icon: 'pi pi-fw pi-user-edit'
            }
]
    },
{label}: 'Orders',
items: [
{label}: 'View',
icon: 'pi pi-fw pi-list'
            },
{label}: 'Search',
icon: 'pi pi-fw pi-search'
            }
]
    }
]);
const contextMenuItems = ref([
{label}: 'Save',
icon: 'pi pi-save'
    },
{label}: 'Update',
icon: 'pi pi-refresh'
    },
{label}: 'Delete',
icon: 'pi pi-trash'
    },
{separator}: true
    },
{label}: 'Options',
icon: 'pi pi-cog'
    }
]);
const megamenuItems = ref([
{label}: 'Fashion',
icon: 'pi pi-fw pi-tag',
items: [
[
{label}: 'Woman',
items: [{label}: 'Woman Item' }, {label}: 'Woman Item' }, {label}: 'Woman Item' }]
                },
{label}: 'Men',
items: [{label}: 'Men Item' }, {label}: 'Men Item' }, {label}: 'Men Item' }]
                }
],
[
{label}: 'Kids',
items: [{label}: 'Kids Item' }, {label}: 'Kids Item' }]
                },
{label}: 'Luggage',
items: [{label}: 'Luggage Item' }, {label}: 'Luggage Item' }, {label}: 'Luggage Item' }]
                }
]
]
    },
{label}: 'Electronics',
icon: 'pi pi-fw pi-desktop',
items: [
[
{label}: 'Computer',
items: [{label}: 'Computer Item' }, {label}: 'Computer Item' }]
                },
{label}: 'Camcorder',
items: [{label}: 'Camcorder Item' }, {label}: 'Camcorder Item' }, {label}: 'Camcorder Item' }]
                }
],
[
{label}: 'TV',
items: [{label}: 'TV Item' }, {label}: 'TV Item' }]
                },
{label}: 'Audio',
items: [{label}: 'Audio Item' }, {label}: 'Audio Item' }, {label}: 'Audio Item' }]
                }
],
[
{label}: 'Sports.7',
items: [{label}: 'Sports.7.1' }, {label}: 'Sports.7.2' }]
                }
]
]
    },
{label}: 'Furniture',
icon: 'pi pi-fw pi-image',
items: [
[
{label}: 'Living Room',
items: [{label}: 'Living Room Item' }, {label}: 'Living Room Item' }]
                },
{label}: 'Kitchen',
items: [{label}: 'Kitchen Item' }, {label}: 'Kitchen Item' }, {label}: 'Kitchen Item' }]
                }
],
[
{label}: 'Bedroom',
items: [{label}: 'Bedroom Item' }, {label}: 'Bedroom Item' }]
                },
{label}: 'Outdoor',
items: [{label}: 'Outdoor Item' }, {label}: 'Outdoor Item' }, {label}: 'Outdoor Item' }]
                }
]
]
    },
{label}: 'Sports',
icon: 'pi pi-fw pi-star',
items: [
[
{label}: 'Basketball',
items: [{label}: 'Basketball Item' }, {label}: 'Basketball Item' }]
                },
{label}: 'Football',
items: [{label}: 'Football Item' }, {label}: 'Football Item' }, {label}: 'Football Item' }]
                }
],
[
{label}: 'Tennis',
items: [{label}: 'Tennis Item' }, {label}: 'Tennis Item' }]
                }
]
]
    }
]);
const panelMenuitems = ref([
{label}: 'Customers',
icon: 'pi pi-fw pi-table',
items: [
{label}: 'New',
icon: 'pi pi-fw pi-user-plus',
items: [
{label}: 'Customer',
icon: 'pi pi-fw pi-plus'
                    },
{label}: 'Duplicate',
icon: 'pi pi-fw pi-copy'
                    }
]
            },
{label}: 'Edit',
icon: 'pi pi-fw pi-user-edit'
            }
]
    },
{label}: 'Orders',
icon: 'pi pi-fw pi-shopping-cart',
items: [
{label}: 'View',
icon: 'pi pi-fw pi-list'
            },
{label}: 'Search',
icon: 'pi pi-fw pi-search'
            }
]
    },
{label}: 'Shipments',
icon: 'pi pi-fw pi-envelope',
items: [
{label}: 'Tracker',
icon: 'pi pi-fw pi-compass'
            },
{label}: 'Map',
icon: 'pi pi-fw pi-map-marker'
            },
{label}: 'Manage',
icon: 'pi pi-fw pi-pencil'
            }
]
    },
{label}: 'Profile',
icon: 'pi pi-fw pi-user',
items: [
{label}: 'Settings',
icon: 'pi pi-fw pi-cog'
            },
{label}: 'Billing',
icon: 'pi pi-fw pi-file'
            }
]
    }
]);

const toolbarItems = ref([
{label}: 'Save',
icon: 'pi pi-check'
    },
{label}: 'Update',
icon: 'pi pi-upload'
    },
{label}: 'Delete',
icon: 'pi pi-trash'
    },
{label}: 'Home Page',
icon: 'pi pi-home'
    }
]);
const cardMenu = ref([
{label}: 'Save', icon: 'pi pi-fw pi-check' },
{label}: 'Update', icon: 'pi pi-fw pi-refresh' },
{label}: 'Delete', icon: 'pi pi-fw pi-trash' }
]);
const menuRef = ref(null);

const toggle = () => {menuRef.value.toggle(event)};
};
/*
const nestedRouteItems = ref([
    {label}: 'Personal',
to: '/uikit/menu'
    },
{label}: 'Seat',
to: '/uikit/menu/seat'
    },
{label}: 'Payment',
to: '/uikit/menu/payment'
    },
{label}: 'Confirmation',
to: '/uikit/menu/confirmation'
    }
]);
*/

const __VLS_componentsOption = ;

let __VLS_name!: 'CreateCost';
function __VLS_template() {let} __VLS_ctx!: InstanceType<__VLS_PickNotAny /><typeof __VLS_internalComponent />, new () => >> & ;
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends {...components} />: infer C } ? C : > & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name />, typeof __VLS_internalComponent & (new () => {$slots}: typeof __VLS_slots })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own />, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = ;
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!:
& __VLS_WithComponent< />'Steps', typeof __VLS_localComponents, "Steps", "Steps", "Steps">
& __VLS_WithComponent< />'RouterView', typeof __VLS_localComponents, "RouterView", "routerView", "router-view">
& __VLS_WithComponent< />'TabView', typeof __VLS_localComponents, "TabView", "TabView", "TabView">
& __VLS_WithComponent< />'TabPanel', typeof __VLS_localComponents, "TabPanel", "TabPanel", "TabPanel">
& __VLS_WithComponent< />'Tela1', typeof __VLS_localComponents, "Tela1", "Tela1", "Tela1">
;
( as __VLS_IntrinsicElements).div;( as __VLS_IntrinsicElements).div;( as __VLS_IntrinsicElements).div;( as __VLS_IntrinsicElements).div;( as __VLS_IntrinsicElements).div;( as __VLS_IntrinsicElements).div;
( as __VLS_IntrinsicElements).h5;( as __VLS_IntrinsicElements).h5;
( as __VLS_IntrinsicElements).p;( as __VLS_IntrinsicElements).p;( as __VLS_IntrinsicElements).p;( as __VLS_IntrinsicElements).p;( as __VLS_IntrinsicElements).p;( as __VLS_IntrinsicElements).p;
__VLS_components.Steps;
// @ts-ignore
[Steps,];
__VLS_components.RouterView;__VLS_components.routerView;__VLS_components["router-view"];
// @ts-ignore
[RouterView,];
__VLS_components.TabView;__VLS_components.TabView;
// @ts-ignore
[TabView,TabView,];
__VLS_components.TabPanel;__VLS_components.TabPanel;__VLS_components.TabPanel;__VLS_components.TabPanel;__VLS_components.TabPanel;__VLS_components.TabPanel;
// @ts-ignore
[TabPanel,TabPanel,TabPanel,TabPanel,TabPanel,TabPanel,];
__VLS_components.Tela1;
// @ts-ignore
[Tela1,];
{ }
const __VLS_0 = ( as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
( as __VLS_IntrinsicElements).div;
( as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({...{}, class { }}: ("card"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_0 />, typeof __VLS_2> & Record<string />, unknown>) => void)({...{}, class { }}: ("card"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3 />.emit>;
{ }
const __VLS_5 = ( as __VLS_IntrinsicElements)["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
( as __VLS_IntrinsicElements).div;
( as __VLS_IntrinsicElements).div;
const __VLS_7 = __VLS_6({...{}, class { }}: ("col-12 md:col-6"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_5 />, typeof __VLS_7> & Record<string />, unknown>) => void)({...{}, class { }}: ("col-12 md:col-6"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8 />.emit>;
{ }
const __VLS_10 = ( as __VLS_IntrinsicElements)["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
( as __VLS_IntrinsicElements).div;
( as __VLS_IntrinsicElements).div;
const __VLS_12 = __VLS_11({...{}, class { }}: ("card card-w-title"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_10 />, typeof __VLS_12> & Record<string />, unknown>) => void)({...{}, class { }}: ("card card-w-title"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13 />.emit>;
{ }
const __VLS_15 = ( as __VLS_IntrinsicElements)["h5"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
( as __VLS_IntrinsicElements).h5;
( as __VLS_IntrinsicElements).h5;
const __VLS_17 = __VLS_16({...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_15 />, typeof __VLS_17> & Record<string />, unknown>) => void)({...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18 />.emit>;
(__VLS_18.slots!).default;
}
{ }
const __VLS_20 = ( as __VLS_IntrinsicElements)["p"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
( as __VLS_IntrinsicElements).p;
( as __VLS_IntrinsicElements).p;
const __VLS_22 = __VLS_21({...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_20 />, typeof __VLS_22> & Record<string />, unknown>) => void)({...{}, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23 />.emit>;
(__VLS_23.slots!).default;
}
{let} __VLS_25!: 'Steps' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Steps : typeof __VLS_resolvedLocalAndGlobalComponents['Steps'];
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({...{}, model}: ((__VLS_ctx.nestedRouteItems)), readonly: ((false)), }));
( as {Steps}: typeof __VLS_25 }).Steps;
const __VLS_27 = __VLS_26({...{}, model}: ((__VLS_ctx.nestedRouteItems)), readonly: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_25 />, typeof __VLS_27> & Record<string />, unknown>) => void)({...{}, model}: ((__VLS_ctx.nestedRouteItems)), readonly: ((false)), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28 />.emit>;
}
{let} __VLS_30!: 'RouterView' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.RouterView : 'routerView' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.routerView : 'router-view' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['router-view'] : typeof __VLS_resolvedLocalAndGlobalComponents['RouterView'];
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({...{}, }));
( as {RouterView}: typeof __VLS_30 }).RouterView;
const __VLS_32 = __VLS_31({...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_30 />, typeof __VLS_32> & Record<string />, unknown>) => void)({...{}, });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33 />.emit>;
}
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
{let} __VLS_35!: 'TabView' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.TabView : typeof __VLS_resolvedLocalAndGlobalComponents['TabView'];
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({...{}, }));
( as {TabView}: typeof __VLS_35 }).TabView;
( as {TabView}: typeof __VLS_35 }).TabView;
const __VLS_37 = __VLS_36({...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_35 />, typeof __VLS_37> & Record<string />, unknown>) => void)({...{}, });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38 />.emit>;
{let} __VLS_40!: 'TabPanel' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.TabPanel : typeof __VLS_resolvedLocalAndGlobalComponents['TabPanel'];
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({...{}, header}: ("Identificação do Custo"), }));
( as {TabPanel}: typeof __VLS_40 }).TabPanel;
( as {TabPanel}: typeof __VLS_40 }).TabPanel;
const __VLS_42 = __VLS_41({...{}, header}: ("Identificação do Custo"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_40 />, typeof __VLS_42> & Record<string />, unknown>) => void)({...{}, header}: ("Identificação do Custo"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43 />.emit>;
{ }
const __VLS_45 = ( as __VLS_IntrinsicElements)["p"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
( as __VLS_IntrinsicElements).p;
( as __VLS_IntrinsicElements).p;
const __VLS_47 = __VLS_46({...{}, class { }}: ("line-height-3 m-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_45 />, typeof __VLS_47> & Record<string />, unknown>) => void)({...{}, class { }}: ("line-height-3 m-0"), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48 />.emit>;
{let} __VLS_50!: 'Tela1' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tela1 : typeof __VLS_resolvedLocalAndGlobalComponents['Tela1'];
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({...{}, }));
( as {Tela1}: typeof __VLS_50 }).Tela1;
const __VLS_52 = __VLS_51({...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_50 />, typeof __VLS_52> & Record<string />, unknown>) => void)({...{}, });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53 />.emit>;
}
(__VLS_48.slots!).default;
}
(__VLS_43.slots!).default;
}
{let} __VLS_55!: 'TabPanel' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.TabPanel : typeof __VLS_resolvedLocalAndGlobalComponents['TabPanel'];
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({...{}, header}: ("Header II"), }));
( as {TabPanel}: typeof __VLS_55 }).TabPanel;
( as {TabPanel}: typeof __VLS_55 }).TabPanel;
const __VLS_57 = __VLS_56({...{}, header}: ("Header II"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_55 />, typeof __VLS_57> & Record<string />, unknown>) => void)({...{}, header}: ("Header II"), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58 />.emit>;
}
{let} __VLS_60!: 'TabPanel' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.TabPanel : typeof __VLS_resolvedLocalAndGlobalComponents['TabPanel'];
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({...{}, header}: ("Header III"), }));
( as {TabPanel}: typeof __VLS_60 }).TabPanel;
( as {TabPanel}: typeof __VLS_60 }).TabPanel;
const __VLS_62 = __VLS_61({...{}, header}: ("Header III"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_60 />, typeof __VLS_62> & Record<string />, unknown>) => void)({...{}, header}: ("Header III"), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63 />.emit>;
{ }
const __VLS_65 = ( as __VLS_IntrinsicElements)["p"];
const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
( as __VLS_IntrinsicElements).p;
( as __VLS_IntrinsicElements).p;
const __VLS_67 = __VLS_66({...{}, class { }}: ("line-height-3 m-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_65 />, typeof __VLS_67> & Record<string />, unknown>) => void)({...{}, class { }}: ("line-height-3 m-0"), });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68 />.emit>;
(__VLS_68.slots!).default;
}
(__VLS_63.slots!).default;
}
(__VLS_38.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses))
var __VLS_slots!:;
// @ts-ignore
[nestedRouteItems,nestedRouteItems,nestedRouteItems,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({setup()} { }
return {Tela1}: Tela1 as typeof Tela1,
};
},
});
export default (await import('vue')).defineComponent({setup()} { }
return ;
},
});


</>;
