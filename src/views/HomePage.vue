<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <!-- <span class="text-uppercase page-subtitle">Parking App Name</span> -->
        <h3 class="page-title">Where do you need to park today?</h3>
      </d-col>
    </d-row>

    <!-- City Cards Blocks -->
    <d-row>
      <d-col lg v-for="(city, idx) in cityCards" :key="idx" class="mb-4">
        <city-cards :id="`city-cards-${idx}`" :image="city.image" :label="city.label" />
      </d-col>
    </d-row>

<d-row no-gutters class="page-header py-4">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <!-- <span class="text-uppercase page-subtitle">Parking App Name</span> -->
        <h3 class="page-title">Recommended for you</h3>
      </d-col>
    </d-row>
            <d-row>
                <d-col>
                    <d-card>
                        <d-card-img src="https://place-hold.it/300x200" top />
                        <d-card-body>
                            <div>this is the body contents</div>
                        </d-card-body>
                    </d-card>
                </d-col>
                <d-col>
                    <d-card>
                        <d-card-img src="https://place-hold.it/300x200" top />
                        <d-card-body>
                            <div>this is the body contents</div>
                        </d-card-body>
                    </d-card>
                </d-col>
                <d-col>
                    <d-card>
                        <d-card-img src="https://place-hold.it/300x200" top />
                        <d-card-body>
                            <div>this is the body contents</div>
                        </d-card-body>
                    </d-card>
                </d-col>
                <d-col>
                    <d-card>
                        <d-card-img src="https://place-hold.it/300x200" top />
                        <d-card-body>
                            <div>this is the body contents</div>
                        </d-card-body>
                    </d-card>
                </d-col>

            </d-row>

  </d-container>
</template>

<script>
import CityCards from '@/components/common/CityCards.vue';

export default {
  components: {
    CityCards
  },
  data() {
    return {
      dateRange: {
        from: null,
        to: null,
      },
    };
  },
  computed: {
    cityCards() {
      return [{
        label: 'Toronto',
        image: require('@/assets/images/city.jpg')
      }, {
        label: 'Vancouver',
        image: require('@/assets/images/city2.jpg')
      }, {
        label: 'Montreal',
        image: require('@/assets/images/city3.jpg')
      }, {
        label: 'Ottawa',
        image: require('@/assets/images/city.jpg')
      }, {
        label: 'New York',
        image: require('@/assets/images/city2.jpg')
      }];
    },
  },
};
</script>

