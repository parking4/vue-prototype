<template>
    <d-card :class="['city-cards', 'card', 'card-small']">
        <d-card-body>
            <div :class="['d-flex']">
                <div :class="['city-cards__data']">
                    <span :class="['city-cards__label', 'text-uppercase']">{{ label }}</span>
                </div>
            </div>
        </d-card-body>
        <d-card-img :src="image" bottom style="max-height:100px"/>
    </d-card>
</template>

<script>
import Chart from '../../utils/chart';
import { nanoid } from '../../utils';

export default {
  name: 'd-city-cards',
  props: {
    /**
     * The element ID.
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * The label.
     */
    label: {
      type: String,
      default: 'Label',
    },
    image: {
      type: String,
      default: require('@/assets/images/city.jpg'),
    }
  },
  computed: {
    computedChartId() {
      return this.id || `city-cards-${nanoid()}`;
    }
  },
  mounted() {},
};
</script>