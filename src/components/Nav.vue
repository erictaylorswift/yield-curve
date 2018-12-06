<template>
    <div id="nav">
        <a href="#what" class="navItemLeft"><i class="fas fa-info-circle"></i> what's a yield spread?</a>
        <dropdown :close-on-click="true" :is-icon="false" :x="12" :y="8">
            <template slot="btn" :class-name="'dropdown'">extras <i class="fas fa-rocket"></i></template>
            <template slot="body">
                <ul>
                    <li>
                        <a href="#methodology">## methodology</a>
                    </li>
                    <li>
                        <a href="#what-is-this">## what is a yield spread?</a>
                    </li>
                    <li>
                        <a href="#news">## in the news</a>
                    </li>
                </ul>
            </template>
        </dropdown>
    </div>
</template>

<script>
import Dropdown from 'bp-vuejs-dropdown'
export default {
    components: { Dropdown }
}
</script>
