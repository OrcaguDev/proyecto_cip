<template>
    <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2>Lo sentimos, página no encontrada!</h2>
			<p>Es posible que la página que está buscando haya sido eliminada debido a un cambio de nombre o no esté disponible temporalmente.</p>
			<router-link to="/home">Regresa al inicio</router-link>
		</div>
	</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    @import '../assets/scss/notfoundpage.scss';
</style>