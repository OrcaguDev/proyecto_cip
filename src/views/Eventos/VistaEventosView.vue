<template>
    <div class="contenedorEventos">
        <div>
            <SidebarComponent></SidebarComponent>
        </div>

        <div class="container d-block p-2">
            <b-button v-b-modal.modal-1 class="container" variant="dark" >Nuevo Evento</b-button>
        

            <!--Cards De Eventos-->
            <b.container class="row p-3">
                
                <b-card
                title="Titulo del Evento"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                >
                <b-card-text>
                    <label>Expositor</label>
                </b-card-text>

                <b-card-text>
                    <label>Lugar</label>
                </b-card-text>

                <b-card-text>
                    <label>Fecha</label>
                </b-card-text>

                <b-button-group>
                    <b-button variant="outline-primary" >Editar</b-button>
                    <b-button variant="outline-danger" >Eliminar</b-button>
                    <b-button variant="outline-success" href="/evento/inscripcion">Inscripción</b-button>
                </b-button-group>

                </b-card>

            </b.container>

        </div>
        


<!--Formulario Modal-->
        <b-modal id="modal-1" size="xl" title="Registro de Eventos" hide-footer>
                <b-row class="mb-2">
                    
                    <b-col sm="2">
                        <label for="input-small">Titulo: </label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input-small" size="sm" class="mb-2"></b-form-input>
                    </b-col>

                    <b-col sm="2">
                        <label for="input-small">Expositor: </label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input-small" size="sm" class="mb-2"></b-form-input>
                    </b-col>

                    <b-col sm="2">
                        <label for="input-small">Descripción: </label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-textarea id="input-small" size="sm" class="mb-2"></b-form-textarea>
                    </b-col>

                    <b-col sm="2">
                        <label for="input-small">Lugar: </label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input-small" size="sm" class="mb-2"></b-form-input>
                    </b-col>

                    <b-col sm="3">
                        <label for="input-small">Fecha de Inscripción: </label>
                    </b-col>
                    <b-col sm="3">
                        <b-form-input id="input-small" size="sm" type="date" class="mb-2"></b-form-input>
                    </b-col>

                    <b-col sm="3">
                        <label for="input-small">Hora de Inscripción: </label>
                    </b-col>
                    <b-col sm="3">
                        <b-form-input id="input-small" size="sm" type="time" class="mb-2"></b-form-input>
                    </b-col>

                    <b-col sm="3">
                        <label for="input-small">Fecha de Inicio: </label>
                    </b-col>
                    <b-col sm="3">
                        <b-form-input id="input-small" size="sm" type="date"></b-form-input>
                    </b-col>

                    <b-col sm="3">
                        <label for="input-small">Hora de Inicio: </label>
                    </b-col>
                    <b-col sm="3">
                        <b-form-input id="input-small" size="sm" type="time" class="mb-2"></b-form-input>
                    </b-col>

                    <b-col sm="2">
                        <label for="input-small">Imagen: </label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-file accept="image/jpg, image/png" class="mb-2"></b-form-file>
                    </b-col>

                    <b-col sm="3">
                        <label for="input-small">Fecha de Fin: </label>
                    </b-col>
                    <b-col sm="3">
                        <b-form-input id="input-small" size="sm" type="date" class="mb-2"></b-form-input>
                    </b-col>

                    <b-col sm="3">
                        <label for="input-small">Hora de Fin: </label>
                    </b-col>
                    <b-col sm="3">
                        <b-form-input id="input-small" size="sm" type="time" class="mb-2"></b-form-input>
                    </b-col>

                    <b-col sm="2">
                        <label for="input-small">Tipo: </label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input-small" size="sm" class="mb-2"></b-form-input>
                    </b-col>

                    <b-col sm="2">
                        <label for="input-small">Aforo Total: </label>
                    </b-col>
                    <b-col sm="4">
                        <b-form-input id="input-small" size="sm" type="number" class="mb-2"></b-form-input>
                    </b-col>

                    <b-col sm="2">
                        <label for="input-small">Aforo Disponible: </label>
                    </b-col>
                    <b-col sm="4">
                        <b-form-input id="input-small" size="sm" type="number" class="mb-2"></b-form-input>
                    </b-col>

                    <b-col sm="2">
                        <label for="input-small">Informe: </label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-file id="file-small" class="mb-2"></b-form-file>
                    </b-col>

                    <b-col lg="4" class="p-2">
                        <b-button pill class="mb-5" variant="outline-danger">Cancelar</b-button>
                        <b-button pill class="mb-5" variant="outline-success">Guardar</b-button>
                    </b-col>
                </b-row>
            </b-modal>
    </div>
</template>

<style lang="scss">
@import '../../assets/scss/vistaEventos.scss';
</style>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue'
export default {
    name: 'VistaEventosView',
    components: {
        SidebarComponent
    }
}
</script>
