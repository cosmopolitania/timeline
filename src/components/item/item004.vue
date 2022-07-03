<template>
    <v-hover>
        <v-timeline-item icon="mdi-racing-helmet" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong contents-title>1995/12</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>深夜に放送されていたF1総集編をたまたま見る</strong>
                    <div class="text-caption">
                        Ayrton Senna(の走行)を知らない世代。<br>  
                        尊敬するF1ドライバーはMichael Schumacher。1995年第11戦ベルギーGP。<br>
                        尊敬するF1エンジニアはAdrian Newey。
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
