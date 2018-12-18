<template>
    <div :class="[mobile ? 'mobile-block' : 'block']">
        <div id="yield-spread">
            <h1 class="smallHeader">
                # {{ this.title }}
            </h1>
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
            content: '',
        }
    },
    components: {
        VueMarkdown
    },
    created() {
        let entry = '32GYqEpQqAGWcegmC66S8m'

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
