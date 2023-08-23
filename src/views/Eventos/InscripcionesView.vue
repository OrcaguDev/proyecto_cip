<template>
    <div class="contenedorInscripciones">
        <!--Sidebar-->
        <div>
            <SidebarComponent></SidebarComponent>
        </div>
        <!--Contenido-->
        <div class="container">
            <b-card
            title="Inscripciones"
            style="max-width: 900px; margin: 20px auto;"
            border-variant="danger"
            >

            <b-card-body>
                <b-card-title>Titulo</b-card-title>
                <b-card-text>Expositor: <b>(Variable)</b></b-card-text>
                <b-card-text>Descripción: <b>(Variable)</b></b-card-text>
                <b-card-text>Lugar: <b>(Variable)</b></b-card-text>
                <b-card-text>Fecha: <b>(Variable)</b></b-card-text>
                <b-card-text>Aforo Disponible: <b>(Variable)</b></b-card-text>
            </b-card-body>

            <b-form>
                <b-form-input placeholder="Buscar participantes..."></b-form-input>
            </b-form>

            <b-button variant="danger" class="btn btn-block m-2">Inscribir</b-button>


            </b-card>

            <div>
                <b-table-simple hover small caption-top responsive>
                    <caption>Participantes registrados</caption>
                    
                    <b-thead head-variant="dark">
                        <b-tr>
                            <b-th>ID</b-th>
                            <b-th>Nombre</b-th>
                            <b-th>Apellidos</b-th>
                            <b-th>DNI</b-th>
                            <b-th>Telefono</b-th>
                            <b-th>Acciones</b-th>
                        </b-tr>
                    </b-thead>

                    <b-tbody>
                        <b-tr>
                            <b-td>1</b-td>
                            <b-td>Pedro</b-td>
                            <b-td>Perez Garcia</b-td>
                            <b-td>76534782</b-td>
                            <b-td>988765342</b-td>
                            <b-td>
                                <b-button-group>
                                    <b-button variant="danger" size="sm"><i class="bx bx-trash"></i></b-button>
                                    <b-button variant="warning" size="sm"><i class="bx bxs-edit"></i></b-button>
                                </b-button-group>
                            </b-td>
                        </b-tr>
                    </b-tbody>

                </b-table-simple>
            </div>


        </div>
        

    </div>
</template>

<style lang="scss">
@import '../../assets/scss/inscripciones.scss';
</style>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue';

export default {
    name: 'InscripcionesView',
    components: {
        SidebarComponent
    }
}

</script>