<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <img alt="Vue logo" src="../assets/permanent-annuity.png" />

          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col md="8">
                  <v-text-field
                    v-model="n"
                    label="n - количество лет"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="A"
                    label="A - сколько будете вносить каждый раз"
                    required
                    type="number"
                  ></v-text-field>
                  <v-text-field
                    v-model="r"
                    label="r - годовая процентная ставка"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="m"
                    label="m - сколько раз в год выплачиваются проценты в год"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="p"
                    label="p - сколько раз будете ложить в год"
                    required
                  ></v-text-field>
                  <h3>график сравнения</h3>
                  <v-text-field
                    v-model="A2"
                    label="A2 - сколько будете вносить каждый раз"
                    required
                    type="number"
                  ></v-text-field>
                  <v-text-field
                    v-model="r2"
                    label="r2 - годовая процентная ставка"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="m2"
                    label="m2 - сколько раз в год выплачиваются проценты в год"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="p2"
                    label="p2 - сколько раз будете ложить в год"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>
        <v-col cols="12" md="6">
          {{FV}}
          <D3LineChart
            v-if="chartData.length"
            :config="chartConfig"
            :datum="chartData"
          ></D3LineChart>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  // @ is an alias to /src
  import { D3LineChart } from 'vue-d3-charts';

  export default {
    name: 'PermanentAnnuity',
    data: () => ({
      valid: false,
      n: 25,

      A: 30000,
      m: 12,
      p: 12,
      r: 0.1,

      A2: 360000,
      m2: 1,
      p2: 1,
      r2: 0.1,
      chartData: [],
      chartConfig: {
        values: ['money', 'money2'],
        date: {
          key: 'year',
          inputFormat: '%Y',
          outputFormat: '%Y',
        },
        axis: {
          yFormat: '.0f',
          yTitle: 'Накоплено денег',
        },
        margin: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 90,
        },
        color: {
          scheme: ['#55D6BE', '#ACFCD9', '#7D5BA6', '#DDDDDD', '#FC6471'],
        },
        transition: {
          ease: 'easeBounceOut',
          duration: 1000,
        },
      },
    }),
    computed: {
      FV() {
        const { n, chartData } = this;
        this.chartDataClear();
        for (let i = 0; i < n; i++) {
          chartData.push({
            money: this.getFV(i) || 0,
            money2: this.getFV2(i) || 0,
            year: i,
          });
        }

        return this.getFV(n);
      },
    },
    methods: {
      getFV(n) {
        const { A, m, p, r } = this;

        const top = (1 + r / m) ** (m * n) - 1;
        const bottom = (1 + r / m) ** (m / p) - 1;
        return Math.round(A * (top / bottom) || 0);
      },
      getFV2(n) {
        const { A2, m2, p2, r2 } = this;

        const top = (1 + r2 / m2) ** (m2 * n) - 1;
        const bottom = (1 + r2 / m2) ** (m2 / p2) - 1;
        return Math.round(A2 * (top / bottom) || 0);
      },
      chartDataClear() {
        while (this.chartData.length) {
          this.chartData.pop();
        }
      },
    },
    components: {
      D3LineChart,
    },
  };
</script>
