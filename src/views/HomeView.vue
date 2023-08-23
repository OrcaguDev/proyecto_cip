<template>
    <div class="contenedorHome">
        <div>
            <SidebarComponent></SidebarComponent>
        </div>
        <div class="container">
            <div>
                <h1 class="titulo m-2">Bienvenido al Sistema de Gestión de Eventos</h1>
            </div>
            <div class="contenedor-cuadros">
            <b-card bg-variant="primary" text-variant="white" header="Eventos Registrados" class="text-center cuadro-evento">
                <b-card-text>1</b-card-text>
            </b-card>

            <b-card bg-variant="secondary" text-variant="white" header="Usuarios Registrados" class="text-center cuadro-evento">
                <b-card-text>5</b-card-text>
            </b-card>

            <b-card bg-variant="success" text-variant="white" header="Constancias Emitidas" class="text-center cuadro-evento">
                <b-card-text>7</b-card-text>
            </b-card>
            </div>

            <b-calendar block locale="es-ES"></b-calendar>

        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/scss/home.scss';
</style>

<script>
import SidebarComponent from '../components/SidebarComponent.vue'
export default {
    name: 'HomeView',
    components: {
        SidebarComponent
    }
}
</script>

