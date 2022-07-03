<template>
    <v-hover>
        <v-timeline-item icon="mdi-briefcase" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2016/09</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>日産自動車へ入社</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                            ルノーからのフランス人出向者5名とともに、完全新規の電気自動車プラットフォーム共同開発プロジェクトへ配属<br>
                            2017年、Alliance Awardをチームで受賞<br>
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
