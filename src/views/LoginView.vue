<template>
    <div>
        <div class="sidenav">
            <div class="login-main-text">
                <h2>COLEGIO DE<br> INGENIEROS DEL<br> PERÚ</h2>
            </div>
        </div>
        <div class="main">
            <div class="col-md-6 col-sm-12">
                <div class="login-form">
                <form action="./home">
                    <div class="form-group">
                        <label>Usuario</label>
                        <input type="text" class="form-control" placeholder="Usuario">
                    </div>
                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="password" class="form-control" placeholder="Contraseña">
                    </div>
                    <button type="submit" class="btn btn-black">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/scss/login.scss';
</style>