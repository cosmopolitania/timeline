<template>
    <v-hover>
        <v-timeline-item icon="mdi-rocket" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>1994/10</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>アポロ13を鑑賞</strong>
                    <div class="text-caption">
                        ロケットを打ち上げる人に憧れる。<br>
                        3回見ても宇宙飛行士役の役者の顔と名前が覚えられなかった。
                    </div>
                </v-col>
            </v-row>
    </v-timeline-item>
    </v-hover>
</template>

<script>
    export default {}
</script>

<style>
@import "./../../css/mycss.css";
</style>
