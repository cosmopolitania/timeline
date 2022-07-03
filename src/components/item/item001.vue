<template>
    <v-hover>
        <v-timeline-item icon="mdi-school" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2004/03</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>東京大学工学部航空宇宙工学科を卒業</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                            工学部航空宇宙工学科中須賀研究室
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href="https://www.space.t.u-tokyo.ac.jp/nlab/index.html"
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <!-- 画像がないのでしばらく割愛
                <v-col>
                    <v-img src="./../../images/bg005.png" max-width='300' max-height='200' contain> </v-img>
                </v-col>
                -->
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
