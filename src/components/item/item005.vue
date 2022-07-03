<template>
    <v-hover>
        <v-timeline-item icon="mdi-racing-helmet" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2011/07</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>Renault Sport F1 へ出向</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                            念願叶い、F1エンジニアとなる。<br>  
                            V6エンジンのstructual engineer。  
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://www.amazon.co.jp/Motor-Fan-illustrated-vol-66/dp/4779614333/'
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <!-- 画像がないのでしばらく割愛
                <v-col>
                    <v-img src="./../../images/bg004.png" max-width='300' max-height='200' contain> </v-img>
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
