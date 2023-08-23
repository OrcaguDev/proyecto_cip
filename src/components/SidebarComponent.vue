<template>
    <div class="sidebar">
        <div class="logo_details">
            <i class="bx bxs-school"></i>
            <div class="logo_name">SGE CIP</div>
            <i class="bx bx-menu"></i>
        </div>
        <ui class="nav-list">
            <li> 
                <a href="/home">
                    <i class="bx bxs-castle"></i>
                    <span class="link_name">Home</span>
                </a>
            </li>

            <li>
                <a href="/persona">
                    <i class="bx bxs-user-account"></i>
                    <span class="link_name">Personas</span>
                </a>
            </li>

            <li>
                <a href="/evento">
                    <i class="bx bx-calendar-event"></i>
                    <span class="link_name">Eventos</span>
                </a>
            </li>
            
            <li>
                <a href="usuarios">
                    <i class="bx bx-user"></i>
                    <span class="link_name">Usuarios</span>
                </a>
            </li>
        </ui>
    </div>
</template>

<style lang="scss">
@import "../assets/scss/sidebar.scss";
</style>

<script>
export default {
    name: 'SidebarComponent',
    data() {
        return {
            menu: false
        }
    }
}
</script>