import{r as i,b as t,c as V,d as P,e,f as l,g as N,i as K}from"./index-8951ab37.js";const L={class:"grid p-fluid"},E={class:"col-12"},F={class:"card card-w-title"},R=e("h5",null,"Menubar",-1),A={class:"p-input-icon-left"},D=e("i",{class:"pi pi-search"},null,-1),W={class:"col-12"},H={class:"card card-w-title"},Q=e("h5",null,"Breadcrumb",-1),U={class:"col-12 md:col-6"},z={class:"card card-w-title"},j=e("h5",null,"Steps",-1),q=e("p",null,"Steps and TabMenu are integrated with the same child routes.",-1),G={class:"col-12 md:col-6"},J={class:"card card-w-title"},X=e("h5",null,"TabMenu",-1),Y=e("p",null,"Steps and TabMenu are integrated with the same child routes.",-1),Z={class:"col-12 md:col-4"},$={class:"card"},ee=e("h5",null,"Tiered Menu",-1),le={class:"col-12 md:col-4"},ie={class:"card"},te=e("h5",null,"Plain Menu",-1),oe={class:"col-12 md:col-4"},ae={class:"card"},ne=e("h5",null,"Overlay Menu",-1),se=e("h5",null,"ContextMenu",-1),pe={class:"col-12 md:col-6"},ce={class:"card"},me=e("h5",null,"MegaMenu - Horizontal",-1),re=e("h5",{style:{"margin-top":"1.55em"}},"MegaMenu - Vertical",-1),ue={class:"col-12 md:col-6"},de={class:"card"},be=e("h5",null,"PanelMenu",-1),we={__name:"Menu",setup(_e){const a=i(null),n=i(null),u=i([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),d=i({icon:"pi pi-home",to:"/"}),b=i([{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}]),s=i([{label:"Personal",to:"/uikit/menu"},{label:"Seat",to:"/uikit/menu/seat"},{label:"Payment",to:"/uikit/menu/payment"},{label:"Confirmation",to:"/uikit/menu/confirmation"}]),_=i([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),h=i([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Home",icon:"pi pi-home"}]),f=i([{label:"Customers",items:[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]}]),w=i([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Options",icon:"pi pi-cog"}]),p=i([{label:"Fashion",icon:"pi pi-fw pi-tag",items:[[{label:"Woman",items:[{label:"Woman Item"},{label:"Woman Item"},{label:"Woman Item"}]},{label:"Men",items:[{label:"Men Item"},{label:"Men Item"},{label:"Men Item"}]}],[{label:"Kids",items:[{label:"Kids Item"},{label:"Kids Item"}]},{label:"Luggage",items:[{label:"Luggage Item"},{label:"Luggage Item"},{label:"Luggage Item"}]}]]},{label:"Electronics",icon:"pi pi-fw pi-desktop",items:[[{label:"Computer",items:[{label:"Computer Item"},{label:"Computer Item"}]},{label:"Camcorder",items:[{label:"Camcorder Item"},{label:"Camcorder Item"},{label:"Camcorder Item"}]}],[{label:"TV",items:[{label:"TV Item"},{label:"TV Item"}]},{label:"Audio",items:[{label:"Audio Item"},{label:"Audio Item"},{label:"Audio Item"}]}],[{label:"Sports.7",items:[{label:"Sports.7.1"},{label:"Sports.7.2"}]}]]},{label:"Furniture",icon:"pi pi-fw pi-image",items:[[{label:"Living Room",items:[{label:"Living Room Item"},{label:"Living Room Item"}]},{label:"Kitchen",items:[{label:"Kitchen Item"},{label:"Kitchen Item"},{label:"Kitchen Item"}]}],[{label:"Bedroom",items:[{label:"Bedroom Item"},{label:"Bedroom Item"}]},{label:"Outdoor",items:[{label:"Outdoor Item"},{label:"Outdoor Item"},{label:"Outdoor Item"}]}]]},{label:"Sports",icon:"pi pi-fw pi-star",items:[[{label:"Basketball",items:[{label:"Basketball Item"},{label:"Basketball Item"}]},{label:"Football",items:[{label:"Football Item"},{label:"Football Item"},{label:"Football Item"}]}],[{label:"Tennis",items:[{label:"Tennis Item"},{label:"Tennis Item"}]}]]}]),g=i([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]}]),v=o=>{a.value.toggle(o)},M=o=>{n.value.show(o)};return(o,he)=>{const I=t("InputText"),C=t("Menubar"),k=t("Breadcrumb"),S=t("Steps"),c=t("router-view"),T=t("TabMenu"),B=t("TieredMenu"),m=t("Menu",!0),x=t("Button"),y=t("ContextMenu"),r=t("MegaMenu"),O=t("PanelMenu");return V(),P("div",L,[e("div",E,[e("div",F,[R,l(C,{model:u.value},{end:N(()=>[e("span",A,[D,l(I,{type:"text",placeholder:"Search"})])]),_:1},8,["model"])])]),e("div",W,[e("div",H,[Q,l(k,{home:d.value,model:b.value},null,8,["home","model"])])]),e("div",U,[e("div",z,[j,q,l(S,{model:s.value,readonly:!1},null,8,["model"]),l(c)])]),e("div",G,[e("div",J,[X,Y,l(T,{model:s.value},null,8,["model"]),l(c)])]),e("div",Z,[e("div",$,[ee,l(B,{model:_.value},null,8,["model"])])]),e("div",le,[e("div",ie,[te,l(m,{model:f.value},null,8,["model"])])]),e("div",oe,[e("div",ae,[ne,l(m,{ref_key:"menu",ref:a,model:h.value,popup:!0},null,8,["model"]),l(x,{type:"button",label:"Options",icon:"pi pi-angle-down",onClick:v,style:{width:"auto"}})]),e("div",{class:"card",onContextmenu:M},[se,K(" Right click to display. "),l(y,{ref_key:"contextMenu",ref:n,model:w.value},null,8,["model"])],32)]),e("div",pe,[e("div",ce,[me,l(r,{model:p.value},null,8,["model"]),re,l(r,{model:p.value,orientation:"vertical"},null,8,["model"])])]),e("div",ue,[e("div",de,[be,l(O,{model:g.value},null,8,["model"])])])])}}};export{we as default};
