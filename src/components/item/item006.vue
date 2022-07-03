<template>
    <v-hover>
    <v-timeline-item  color='#208ea3' small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2007/11</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>Renault s.a.s.へ転籍(CDI、本国正社員化)に伴い、渡仏</strong>
                    <div class="text-caption">
                        Boulogne-Billancourtで2016/7まで9年を過ごす。
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
