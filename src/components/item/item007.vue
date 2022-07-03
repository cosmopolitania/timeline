<template>
    <v-hover>
    <v-timeline-item  color='#208ea3' small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2016/07</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>完全帰国</strong>
                    <div class="text-caption">
                        帰国後のTimeLineは別途作成 <br>
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
