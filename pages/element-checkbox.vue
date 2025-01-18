<template>
  <el-container direction="vertical">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="160px"
      class="demo-ruleForm"
    >
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone" prop="region">
        <el-select v-model="ruleForm.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="Choisissez une date"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              placeholder="Pick a time"
              v-model="ruleForm.date2"
              style="width: 100%;"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="Activity type" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="Online activities" name="type"></el-checkbox>
          <el-checkbox label="Promotion activities" name="type"></el-checkbox>
          <el-checkbox label="Offline activities" name="type"></el-checkbox>
          <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Activity single" prop="single">
        <el-checkbox
          v-model="ruleForm.single"
          label="Online activities"
          name="single"
        ></el-checkbox>
      </el-form-item>
      <el-form-item label="Resources" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="Sponsorship"></el-radio>
          <el-radio label="Venue"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >Créer</el-button
        >
        <el-button @click="resetForm('ruleForm')">Réinitialiser</el-button>
      </el-form-item>
    </el-form>
    <pug-component>
      marion
    </pug-component>
  </el-container>
</template>
<script>
import PugComponent from "../components/PugComponent.vue";

export default {
  components: { PugComponent },
  layout: "pug-layout",
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        sigle: false
      }
    };
  },
  computed: {
    rules() {
      const checkbox = {
        required: true,
        type: "enum",
        enum: ["true"],
        transform: value => (value === undefined ? "false" : value.toString()),
        trigger: "change"
      };
      return {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur"
          }
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change"
          }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change"
          }
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: "Please input activity form",
            trigger: "blur"
          }
        ],
        single: [
          {
            ...checkbox,
            message: "Please select if it's a single activity"
          }
        ]
      };
    }
  },
  methods: {
    submitForm(formName) {
      console.log(formName);
      this.$refs[formName].validate((valid, data) => {
        if (valid) {
          alert("submit!", data);
          console.log("Validated data:", data); // This will be the data passed after validation
          console.log("ruleForm data:", this.ruleForm);
        } else {
          console.log("error submit!!", data); // If validation fails, log data (should be null or incomplete)
          console.log("Current ruleForm:", this.ruleForm); // 'ruleForm' should still be accessible
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    triggerSingleValidation() {
      // Manually trigger the validation for the `single` checkbox field
      console.log("single");
      this.$refs.ruleForm.validateField("single", errorMessage => {
        console.log(errorMessage, "message");
      });
    }
  }
};
</script>
