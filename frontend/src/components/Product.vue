<template>
    <div class="col-lg-4 m-3 p-3 rounded">
        <div class="row center-align">
            <router-link :to="'/product/'+block.id"><img class="img-fluid" :src="require('@/assets/'+block.product_name+'.png')" /></router-link>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="item_h1">{{ block.product_name }}</div>
                    </div>
                    <div class="col-6">
                        <div class="item_price">{{ block.price }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        block: Object,
    },
}
</script>

<style>
.col-lg-4.m-3 {
    transition-duration: .8s;
    border-style: solid;
    border-color: #FFC0AC;
}

.col-lg-4.m-3:hover {
    transition-duration: .8s;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, .25);
}

.col-6{
    color: #dda08a;
}

.item_h1{
    font-size: 1.5rem;
    text-align: center;
}

.item_price {
    font-size: 1.5rem;
    text-align: center;
}

.item_price::before {
    content: "$";
    font-size: 1rem;
}

.center-align{
    text-align: center;
}

</style>