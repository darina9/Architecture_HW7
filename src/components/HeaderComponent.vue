<template>
    <div>
        <header class="header center">
            <div class="logo"><router-link   to="/">
<img src="../assets/img/Sushibox-Logo-Horizon-White-rs.svg"></router-link></div>
        
        <nav class="header__nav">
            <!-- <router-link class="header__right_item" to="/">Home</router-link>
            <router-link class="header__right_item" to="/Project">Project</router-link>
            <router-link class="header__right_item" to="/Blog">Blog</router-link> -->
            <ul class="header__nav_list">
                <li class="hesder__nav_item ">
                    <router-link class="link title" to="/promo-first">Акции</router-link>
                </li>
                <li class="hesder__nav_item ">
                    <a class="link title" href="#">Бесплатная доставка</a>
                </li>
                <li class="hesder__nav_item">
                    <ul class="header__nav_links">
                        <li class="header__nav_link ">
                            <a class="link title" href="#">sushiboks.rs</a>
                        </li>
                        <li class="header__nav_link ">
                            <a class="link title" href="#">+381 11 455-10-01 </a>
                        </li>
                        <li class="header__nav_link title">
                            <p>заказ суши</p>
                        </li>
                    </ul>                    
                </li>
            </ul>
        </nav>
    </header>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
@import '../style/variables';
.header{
    display: flex;
    gap:100px;
    justify-content: space-between;

    &__nav{
        &_list{
        display: flex;
        gap: 100px;
        justify-content: space-between;
        }
    }
}


</style>