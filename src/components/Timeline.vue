<template>
    <v-app>
    <v-app-bar color="#208ea3" dark app class='title'>
      <v-toolbar-title justify='center'>講師のタイムライン</v-toolbar-title>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://github.com/cosmopolitania' v-bind="attrs" v-on="on">
                  <v-icon>mdi-github</v-icon>
              </v-btn>
          </template>
          <span>GitHub</span>
      </v-tooltip>

      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://github.com/cosmopolitania/timeline' v-bind="attrs" v-on="on">
                  <v-icon>mdi-code-tags</v-icon>
              </v-btn>
          </template>
          <span>Source Code</span>
      </v-tooltip>
    </v-app-bar>
    <v-content>
    <v-container>
    <v-timeline align-top dense class="mx-auto" >

            <item007/>
            <item005/>
            <item006/>
            <item003/>
            <item001/>
            <item002/>
            <item008/>
            <item004/>
            <item009/>
    </v-timeline>
</v-container>
</v-content>
</v-app>
</template>

<script>
    import item001 from './item/item001';
    import item002 from './item/item002';
    import item003 from './item/item003';
    import item004 from './item/item004';
    import item005 from './item/item005';
    import item006 from './item/item006';
    import item007 from './item/item007';
    import item008 from './item/item008';
    import item009 from './item/item009';

    export default {
            name: 'App',
            components: {
                    item001,
                    item002,
                    item003,
                    item004,
                    item005,
                    item006,
                    item007,
                    item008,
                    item009,
                },
        };
</script>
