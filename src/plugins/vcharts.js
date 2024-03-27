import Vue from "vue";
import VePie from "v-charts/lib/pie.common";
import VeHistogram from 'v-charts/lib/histogram.common'
import VeRadar from "v-charts/lib/radar.common";
import VeLine from "v-charts/lib/line.common";

Vue.component(VePie.name, VePie)
Vue.component(VeHistogram.name, VeHistogram)
Vue.component(VeRadar.name, VeRadar)
Vue.component(VeLine.name, VeLine)