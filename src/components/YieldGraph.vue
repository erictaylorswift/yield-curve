<template>
    <div id="what" v-if="!mobile">
        <div class="block">
            <h2>
                # {{ this.title }}
            </h2>
            <div class="pInfo">
                <vue-markdown :source='content'>
                </vue-markdown>
            </div>
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
        let entry = '1l44XQwKj2C628GKUqEima'

        client.getEntry(entry)
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
