<template>
    <v-hover>
        <v-timeline-item icon="mdi-briefcase" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2019/09</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>JDSCへ入社</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                            大学時代の知人・友人が集うAIスタートアップへ19番目の正社員としてJOIN<br>
                            2021年12月20日に東証マザーズへ上場。（現グロース市場）<br>
                        </div>
                    </div>
                </v-col>
                <!-- 画像がないのでしばらく割愛
                <v-col>
                    <v-img src="./../../images/bg003.png" max-width='300' max-height='200' contain> </v-img>
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
