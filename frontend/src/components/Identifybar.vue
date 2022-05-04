<template>
    <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
        <div class="container-md">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <router-link class="navbar-brand" to="/">
            <h1><img src="../assets/shoe_icon_sm.png" alt="珍室鞋樓">珍室鞋樓</h1>                
            </router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
        </div>
    </nav>
    <router-view />
</template>