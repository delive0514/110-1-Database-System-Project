<template>
    <div class="col-6">
        <img class="img-fluid" :src="require('@/assets/'+block.product_name+'.png')" />
    </div>
    <div class="col-6">
        <div class="col-12">{{ block.product_name }}</div>
        <div class="col-12">尺寸:{{ block.size }}cm</div>
        <div class="col-12">描述:{{ block.description }}</div>
        <div class="col-12">價格:{{ block.price }}</div>
    </div>
</template>

<script>
export default {
    props: {
        block: Object,
    },
}
</script>

<style scoped>
.col-6{
    color: #DDA08A;
    text-align: center;

}
.col-12{
    margin-top: 80px;
    margin-bottom: 80px;
    font-size: 36px;
}
</style>