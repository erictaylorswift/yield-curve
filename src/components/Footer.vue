<template>
    <div :class="[mobile ? 'mobile-footer' : 'footer']" >
        <p>project by <a href="https://twitter.com/marshalletaylor?lang=en" target="_blank" >@marshalletaylor</a> and eric taylor</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mobile: false
        }
    },

    created() {
        if (screen.width <= 760) {
            this.mobile = true;
        } else {
            this.mobile = false
        }
    }
}
</script>

