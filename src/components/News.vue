<template>
    <div :class="[mobile ? 'mobile-newsList' : 'newsList']">
        <h2 id="news"> <span>##</span> yield curves in the news</h2>
        <div v-if="articles.length">
            <ul v-for="article in articles" :key="article.id">
                <ul>
                    <li><i class="far fa-arrow-alt-circle-right"></i></li>
                    <li><a :href="article.url" target="_blank"> {{ article.title | truncate }} &nbsp; <i class="fas fa-share-square"></i> </a> | {{ article.source }}</li>
                </ul>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            mobile: false,
        }
    },
    computed: {
        ...mapState(['articles'])
    },

    created() {
        this.$store.dispatch('getNews');

        if (screen.width <= 760) {
            this.mobile = true;
        } else {
            this.mobile = false
        }
    },
    filters: {
        truncate(val) {
            if (val.length < 50 ) {
                    return val
                }
                return `${val.substring(0, 50)}...`
        }
    }
    
}
</script>
