<template>
    <v-hover>
        <v-timeline-item icon="mdi-rocket" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2003/10</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>第11回衛星設計コンテスト 設計の部 優勝</strong>
                    <div class="text-caption">
                         <div class='contents-text'>
                            赤外線位置天文観測衛星 あさがお（Astrometry Satellite for Galaxy Observation）<br>
                            Nano-JASMINE(2022年打ち上げ予定)の初期コンセプトモデル。<br>
                            http://jasmine.nao.ac.jp/
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href="http://www.satcon.jp/history/list11.html'"
                            >
                            Learn More
                    </v-btn>
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
