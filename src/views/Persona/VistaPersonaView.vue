<template>
    <!--Contenedor de la página-->
    <div class="contenedorPersona">
        <!--Importacion del Sidebar-->
        <div>
            <SidebarComponent></SidebarComponent>
        </div>
        
        <!--Contenido de la página Persona-->

        <div class="container">
            <div class="col-7">                
                <b-form-input id="Buscar" type="search" placeholder="Buscar.." class="m-4"></b-form-input>
            </div>
            <div class="col-5">
                <b-button variant="outline-primary" class="m-2">Nuevo</b-button>
            </div>
            <b-table striped hover :items="items"></b-table>
        </div>



    </div>
</template>

<style lang="scss">
@import '@/assets/scss/vistaPersona.scss'
</style>


<script>
import SidebarComponent from '@/components/SidebarComponent.vue'
export default {
    name: 'VistaPersonaView',
    components: {
        SidebarComponent
    },
    data() {
        return {
            items: [
            { id: 1, DNI: 12345678, Nombre: 'Dickerson', A_Paterno: 'Macdonald', A_Materno: 'Macdonald', Sexo: 'Masculino', Domicilio:'Trujillo', Tipo:'Colegiado', CIP:'0702' },
            { id: 2, DNI: 12312312, Nombre: 'Hugo', A_Paterno: 'Rosales', A_Materno: 'Alvino', Sexo: 'Masculino', Domicilio:'Trujillo', Tipo:'Colegiado', CIP:'3455' },
            { id: 3, DNI: 23423423, Nombre: 'Orlando', A_Paterno: 'Castillo', A_Materno: 'Fernandez', Sexo: 'Masculino', Domicilio:'Trujillo', Tipo:'Publico', CIP:'7567' },
            { id: 4, DNI: 53453455, Nombre: 'Rosa', A_Paterno: 'Rodriguez', A_Materno: 'Acuña', Sexo: 'Femenino', Domicilio:'Trujillo', Tipo:'Colegiado', CIP:'1234' },
            { id: 5, DNI: 12342344, Nombre: 'Junior', A_Paterno: 'Zavaleta', A_Materno: 'Acosta', Sexo: 'Masculino', Domicilio:'Trujillo', Tipo:'Publico', CIP:'5436' },

            ]
        }
    }
}
</script>