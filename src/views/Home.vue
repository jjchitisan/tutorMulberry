<template xmlns="http://www.w3.org/1999/html">
    <div>
        <v-carousel>
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
                             transition="fade-transition"></v-carousel-item>
        </v-carousel>
        <div>
            <router-link :to="{name: 'not'}">ครู/วิชา</router-link>

            <v-container grid-list-xl>
                <v-row>
                    <v-col cols="3">
                        <v-card class="mx-auto" max-width="400">
                            <v-img
                                    class="white--text"
                                    height="200px"
                                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            >
                                <v-card-title class="align-end fill-height">Top 10 Australian beaches</v-card-title>
                            </v-img>

                            <v-card-text>
                                <span>Number 10</span><br>
                                <span class="text--primary"><span>Whitehaven Beach</span><br><span>Whitsunday Island, Whitsunday Islands</span></span>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn text color="orange">
                                    Share
                                </v-btn>
                                <v-btn text color="orange">
                                    Explore
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-col>
                    <v-col cols="3">
                        <v-card class="mx-auto" max-width="400">
                            <v-img
                                    class="white--text"
                                    height="200px"
                                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            >
                                <v-card-title class="align-end fill-height">Top 10 Australian beaches</v-card-title>
                            </v-img>

                            <v-card-text>
                                <span>Number 10</span><br>
                                <span class="text--primary">
        <span>Whitehaven Beach</span><br>
        <span>Whitsunday Island, Whitsunday Islands</span>
      </span>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn
                                        text
                                        color="orange"
                                >
                                    Share
                                </v-btn>
                                <v-btn
                                        text
                                        color="orange"
                                >
                                    Explore
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-col>
                    <v-col cols="3">
                        <v-card class="mx-auto" max-width="400">
                            <v-img
                                    class="white--text"
                                    height="200px"
                                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            >
                                <v-card-title class="align-end fill-height">Top 10 Australian beaches</v-card-title>
                            </v-img>

                            <v-card-text>
                                <span>Number 10</span><br>
                                <span class="text--primary">
        <span>Whitehaven Beach</span><br>
        <span>Whitsunday Island, Whitsunday Islands</span>
      </span>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn
                                        text
                                        color="orange"
                                >
                                    Share
                                </v-btn>
                                <v-btn
                                        text
                                        color="orange"
                                >
                                    Explore
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-col>
                    <v-col cols="3">
                        <v-card class="mx-auto" max-width="400">
                            <v-img
                                    class="white--text"
                                    height="200px"
                                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            >
                                <v-card-title class="align-end fill-height">Top 10 Australian beaches</v-card-title>
                            </v-img>

                            <v-card-text>
                                <span>Number 10</span><br>
                                <span class="text--primary">
        <span>Whitehaven Beach</span><br>
        <span>Whitsunday Island, Whitsunday Islands</span>
      </span>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn
                                        text
                                        color="orange"
                                >
                                    Share
                                </v-btn>
                                <v-btn
                                        text
                                        color="orange"
                                >
                                    Explore
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-col>

                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        src: 'https://f.ptcdn.info/158/012/000/1384503471-5266374834-o.jpg',
                    },
                    {
                        src: require('@/assets/logo.png'),
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    },
                ],
            }
        },
    }
</script>
<style>

</style>
