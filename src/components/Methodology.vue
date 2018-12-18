<template>
    <div :class="[mobile ? 'mobile-block' : 'block']">
        <h2 id="methodology">
            <span>##</span> {{ this.title }}
        </h2>
        <vue-markdown :source='content'>
        </vue-markdown>
    </div>
</template>


<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '../plugins/contentful.js'

const client = createClient()

export default {
    data() {
        return {
            title: '',
            content: ''
        }
    },
    components: {
        VueMarkdown
    },
    created() {
        let methodologyEntry = '2z4AQxWFickSOUIWyWiO8k'

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
