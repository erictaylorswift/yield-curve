<template>
    <div id="yield-spread">
        <h2 id="what-is-this">
            <span>##</span> {{ this.title }}
        </h2>
        <vue-markdown :source="content"></vue-markdown>
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
        let entryId = '5RtAFlL1NC4yyay64YW6sG'

        client.getEntry(entryId)
            .then((res) => {
                this.content = res.fields.textField
                this.title = res.fields.title

                console.log(res.fields.textField)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
</script>
