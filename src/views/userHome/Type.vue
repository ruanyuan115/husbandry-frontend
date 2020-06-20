<template>
  <v-card>
    <v-tabs background-color="white" color="deep-purple accent-4" left>
      <v-tab>品种汇总</v-tab>
      <v-tab>品种列表</v-tab>
      <v-tab>添加品种</v-tab>

      <v-tab-item v-for="n in 3" :key="n">
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="12" sm="10" md="8" lg="6">
              <v-card ref="form" v-if="n === 3">
                <v-card-text>
                  <v-text-field
                    ref="name"
                    v-model="name"
                    :rules="[() => !!name || '请填写品种名称']"
                    placeholder="品种名称"
                    required
                  >
                    <template #label>
                      <span class="red--text"><strong>* </strong></span>品种名称
                    </template>
                  </v-text-field>
                  
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
  name: "Type",
  data: () => ({
    name:"",
    remark: "",
    notNeed: ["remark"]
  }),

  computed: {
    form() {
      return {
        name: this.name,
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
    }
  }
};
</script>
<style scoped>
</style>
