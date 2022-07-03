<template>
    <v-hover>
        <v-timeline-item icon="mdi-racing-helmet" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2003/09</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>第1回 全日本 学生フォーミュラ大会 総合3位</strong>
                    <div class="text-caption">
                         <div class='contents-text'>
                            仲間達と、何もないところから車を作る<br>
                            サスペンション、制御担当。<br>
                            総合3位の報奨として第37回東京モーターショーに車を展示。そこで人生最初の上司と出会う。
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href="https://www.jsae.or.jp/formula/jp/1st/result.html"
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
