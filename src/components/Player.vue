<template>
    <div class="playerWrapper" v-if="!mobile">
        <img src="https://media.npr.org/assets/img/2018/07/09/yield-curve-d1747367bbe8042e007fa6dad3ecf2174afb8ada-s800-c85.jpg" alt="" class="podcastImg">
        <div class="podcastInfo">
            <a href="https://www.npr.org/2018/07/20/630742900/explaining-the-yield-curve">explaining the 'yield curve'</a>
            <h4 class="smallHeader">planet money | july 20, 2018</h4>
            <audio controls preload="auto" style="width:300px;">
	            <source src="https://firebasestorage.googleapis.com/v0/b/yield-curve.appspot.com/o/20180720_me_explaining_the_yield_curve.mp3?alt=media&token=81ea602e-1e6d-40b1-b9c2-e9e7d6bb4777" type="audio/mpeg">
            </audio>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            mobile: false
        }
    },

    mounted() {
        if (screen.width <= 760) {
                this.mobile = true;
            } else {
                this.mobile = false
            }
    }
}
</script>

