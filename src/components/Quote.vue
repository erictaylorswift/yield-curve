<template>
    <div id="yield-spread">
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
    }
}
</script>
