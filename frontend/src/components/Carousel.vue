<template>
    <div class="container-lg">
        <div class="col-lg-12 px-3 py-3 my-3 rounded">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://picsum.photos/1280/780?1" class="d-block mx-auto h-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/1280/780?2" class="d-block mx-auto h-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/1280/780?3" class="d-block mx-auto h-100" alt="...">
                    </div>                </div>
                <button class="carousel-control-prev h-100" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next h-100" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style>
.col-lg-12.px-3.py-3.my-3 {
    border-style: solid;
    border-color: #FFC0AC;
}
</style>