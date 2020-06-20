<template>
  <v-card>
    <v-tabs background-color="white" color="deep-purple accent-4" left>
      <v-tab>信息汇总</v-tab>
      <v-tab>牛只列表</v-tab>
      <v-tab>添加牛只</v-tab>

      <v-tab-item v-for="n in 3" :key="n">
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="12" sm="10" md="8" lg="6">
              <v-card ref="form" v-if="n === 3">
                <v-card-text>
                  <v-text-field
                    ref="earTag"
                    v-model="earTag"
                    :rules="[() => !!earTag || '请填写耳标信息']"
                    placeholder="耳标"
                    required
                  >
                    <template #label>
                      <span class="red--text"><strong>* </strong></span>耳标
                    </template>
                  </v-text-field>
                  <v-autocomplete
                    ref="gender"
                    v-model="gender"
                    :rules="[() => !!gender || '请填写性别']"
                    :items="genders"
                    placeholder="请选择性别"
                    required
                  >
                    <template #label>
                      <span class="red--text"><strong>* </strong></span>性别
                    </template>
                  </v-autocomplete>
                  <v-autocomplete
                    ref="fence"
                    v-model="fence"
                    :rules="[() => !!fence || '请选择所属栏舍']"
                    :items="fences"
                    placeholder="请选择所属栏舍"
                    required
                  >
                    <template #label>
                      <span class="red--text"><strong>* </strong></span>栏舍
                    </template>
                  </v-autocomplete>
                  <v-autocomplete
                    ref="lair"
                    v-model="lair"
                    :items="lairs"
                    label="所属圈"
                    placeholder="请选择所属圈"
                    required
                  ></v-autocomplete>
                  <v-autocomplete
                    ref="species"
                    v-model="species"
                    :rules="[() => !!species || '请选择所属品种']"
                    :items="speciesItems"
                    placeholder="请选择所属品种"
                    required
                  >
                    <template #label>
                      <span class="red--text"><strong>* </strong></span>所属品种
                    </template>
                  </v-autocomplete>
                  <v-autocomplete
                    ref="type"
                    v-model="type"
                    :rules="[() => !!type || '请选择所属类型']"
                    :items="types"
                    placeholder="请选择所属类型"
                    required
                  >
                    <template #label>
                      <span class="red--text"><strong>* </strong></span>所属类型
                    </template></v-autocomplete
                  >
                  <v-autocomplete
                    ref="state"
                    v-model="state"
                    :rules="[() => !!state || '请选择当前状态']"
                    :items="states"
                    placeholder="请选择当前状态"
                    required
                  >
                    <template #label>
                      <span class="red--text"><strong>* </strong></span>当前状态
                    </template></v-autocomplete
                  >
                  <v-menu
                    v-model="showMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="10vw"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        ref="birth"
                        v-model="computedDateFormatted"
                        label="出生日期"
                        placeholder="请选择出生日期"
                        persistent-hint
                        append-outer-icon="mdi-calendar-range"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      locale="zh-cn"
                      v-model="date"
                      no-title
                      @input="showMenu = false"
                    ></v-date-picker>
                  </v-menu>
                  <v-text-field
                    ref="remark"
                    v-model="remark"
                    label="备注信息"
                    placeholder="备注信息"
                    required
                  ></v-text-field>
                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                  <v-btn text @click="resetForm">重填</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="submit">提交</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  name: "Feeding",
  data: () => ({
    genders: ["公", "母"],
    fences: ["1", "2", "3"],
    lairs: ["001", "002", "003"],
    speciesItems: ["牛", "奶牛", "肉牛"],
    types: ["A", "B", "C"],
    states: ["a", "b", "c", "d"],
    earTag: "",
    gender: "",
    fence: "",
    lair: "",
    species: "",
    type: "",
    state: "",
    remark: "",
    date: "",
    showMenu: false,
    notNeed: ["lair", "birth", "remark"]
  }),

  computed: {
    form() {
      return {
        earTag: this.earTag,
        gender: this.gender,
        fence: this.fence,
        lair: this.lair,
        species: this.species,
        type: this.type,
        state: this.state,
        birth: this.date,
        remark: this.remark
      };
    },
    formHasErrors: {
      get() {
        var temp = false;
        Object.keys(this.form).forEach(key => {
          if (this.notNeed.indexOf(key) === -1) {
            temp = temp || !this.form[key] || this.form[key].length === 0;
          }
        });
        return temp;
      },
      set(t) {
        return t;
      }
    },
    computedDateFormatted: {
      get() {
        return this.formatDate(this.date);
      },
      set(t) {
        return t;
      }
    }
  },

  watch: {},

  methods: {
    resetForm() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach(f => {
        this.$refs[f][0].reset();
      });
    },
    submit() {
      if (this.formHasErrors) {
        this.$message({
          message: "请将信息填写完整",
          type: "error",
          center: true
        });
        return;
      } else {
        this.$message({
          message: "提交成功",
          type: "success",
          center: true
        });
      }

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f][0].validate(true);
      });
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>
<style scoped>
.v-card {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
