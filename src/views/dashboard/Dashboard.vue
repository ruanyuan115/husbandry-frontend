<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row justify="space-between">
      <v-col cols="12" lg="6">
        <base-material-chart-card
          :data="stockOfCattle.data"
          :options="stockOfCattle.options"
          :responsive-options="stockOfCattle.responsiveOptions"
          color="#E91E63"
          hover-reveal
          type="Bar"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="info" icon v-on="on">
                  <v-icon color="info">
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            牛存栏情况
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Stock of cattle
          </p>

          <template v-slot:actions>
            <v-icon class="mr-1" small>
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light"
              >updated just now</span
            >
          </template>
        </base-material-chart-card>
      </v-col>
      <v-col cols="12" lg="">
        <base-material-chart-card
          :data="budget.data"
          :options="budget.options"
          :responsive-options="budget.responsiveOptions"
          color="info"
          hover-reveal
          type="Bar"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="info" icon v-on="on">
                  <v-icon color="info">
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            上月销售支出
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Budget and Expenses of last month
          </p>

          <template v-slot:actions>
            <v-icon class="mr-1" small>
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light"
              >updated just now</span
            >
          </template>
        </base-material-chart-card>
      </v-col>
      <v-col cols="12" lg="6">
        <base-material-chart-card
          :data="thisMonthData.data"
          :options="thisMonthData.options"
          type="Bar"
          color="#F7C112"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="info" icon v-on="on">
                  <v-icon color="info">
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            上月数据-本月数据
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Data of last month and this month
          </p>

          <template v-slot:actions>
            <v-icon class="mr-1" small>
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light"
              >updated just now</span
            >
          </template>
        </base-material-chart-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DashboardDashboard",

  data() {
    return {
      thisMonthData: {
        data: {
          labels: ["出生", "死淘", "出售"],
          series: [
            { name: "上月数据", data: [11, 2, 38] },
            { name: "本月数据", data: [8, 3, 43] }
          ]
        },
        options: {
          plugins: [
            this.$chartist.plugins.tooltip(),
            this.$chartist.plugins.legend()
          ]
        }
      },
      budget: {
        data: {
          labels: ["销售合计", "支出合计"],
          series: [[8200, 3700]]
        },
        options: {
          plugins: [this.$chartist.plugins.tooltip()],
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 10000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      stockOfCattle: {
        data: {
          labels: [
            "基础母牛",
            "后备母牛",
            "配种公牛",
            "后备公牛",
            "育肥肉牛",
            "犊牛"
          ],
          series: [[542, 443, 320, 780, 553, 453]]
        },
        options: {
          plugins: [this.$chartist.plugins.tooltip()],
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      }
    };
  },
  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    },
    largestOfArray(arr) {
      return arr.map(Function.apply.bind(Math.max, null));
    }
  }
};
</script>
<style lang="scss">
$ct-series-colors: (
  rgba(255, 255, 255, 0.8),
  #f05b4f,
  #f4c63d,
  #d17905,
  #453d3f,
  #59922b,
  #0544d3,
  #6b0392,
  #f05b4f,
  #dda458,
  #eacf7d,
  #86797d,
  #b2c326,
  #6188e2,
  #a748ca
) !default;
.ct-legend {
  position: relative;
  z-index: 10;
  top: 8.3rem;
  right: 2rem;
  color: #5c6f75;
  width: 8rem;

  li {
    position: relative;
    padding-left: 1rem;
  }

  li:before {
    width: 12px;
    height: 12px;
    position: absolute;
    left: 0;
    content: "";
    border: 3px solid transparent;
    border-radius: 2px;
  }

  li.inactive:before {
    background: transparent;
  }

  &.ct-legend-inside {
    position: absolute;
    top: 0;
    right: 0;
  }

  @for $i from 0 to length($ct-series-colors) {
    .ct-series-#{$i}:before {
      background-color: nth($ct-series-colors, $i + 1);
      border-color: nth($ct-series-colors, $i + 1);
    }
  }
}
</style>
<style>
/* .v-card{
  margin-top: 30px;
  margin-bottom: 15px;
  } */
.chartist-tooltip {
  position: absolute;
  display: inline-block;
  opacity: 0;
  min-width: 5em;
  padding: .5em;
  background: #57C7E0;
  color: #453D3F;
  font-family: Oxygen, Helvetica, Arial, sans-serif;
  font-weight: 700;
  text-align: center;
  pointer-events: none;
  z-index: 1;
  -webkit-transition: opacity .2s linear;
  -moz-transition: opacity .2s linear;
  -o-transition: opacity .2s linear;
  transition: opacity .2s linear; }
  .chartist-tooltip:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -15px;
    border: 15px solid transparent;
    border-top-color: #57C7E0; }
  .chartist-tooltip.tooltip-show {
    opacity: 1; }

.ct-area, .ct-line {
  pointer-events: none; }
</style>
