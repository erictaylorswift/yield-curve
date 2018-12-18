<template>
    <div :class="[mobile ? 'mobile-block' : 'block']">
        <div class="quote">
            <div class="quoteBlock"></div>
            <vue-markdown :source="content"></vue-markdown>
        </div>
    </div>
</template>


<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '../plugins/contentful.js'

const client = createClient()

export default {
    data() {
        return {
            mobile: false,
            title: '',
            content: ''
        }
    },
    components: {
        VueMarkdown
    },
    created() {
        let methodologyEntry = '6ImOnGEl4k6W8uwQ6Eg6CW'

        client.getEntry(methodologyEntry)
            .then((res) => {
                let text = res.fields.textField

                this.content = text
                this.title = res.fields.title

                console.log(text)
            })
            .catch((err) => {
                console.log(err)
            })

        if (screen.width <= 760) {
            this.mobile = true;
        } else {
            this.mobile = false
        }
    }
}
</script>
