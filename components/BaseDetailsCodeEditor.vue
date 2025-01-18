<template lang="pug">

    el-container
      h1 editore  
      .editor.column(:lang="$i18n.locale" id="details")
      el-container(v-html="content")
        
</template>

<script>
import ace from "ace-builds";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/mode-html"; // Import the HTML mode
import "ace-builds/src-noconflict/mode-css";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  props: {
    value: { type: String, default: "" },
    noBorder: { type: Boolean, default: false },
    uploadImage: { type: Function, default: null },
    disabled: { type: Boolean, default: false }
  },
  data() {
    return {
      content: "",
      focused: false,
      editorOption: {
        placeholder: this.$t("placeholder"),
        modules: {
          toolbar: this.toolbarOptions,
          imageUploader: {
            upload: this.uploadImage
          }
        }
      }
    };
  },
  computed: {
    classList() {
      return {
        "is-focused": this.focused,
        "editor--no-border": this.noBorder
      };
    }
  },
  watch: {
    content(value) {
      this.$emit("input", value);
    }
  },
  mounted() {
    this.editor = ace.edit("details");
    this.editor.setTheme("ace/theme/twilight");
    this.editor.setShowPrintMargin(false);
    this.editor.session.setMode("ace/mode/html");
    // Set the initial value of the editor
    this.editor.setValue(this.value, 1);

    // Listen for changes in the editor
    this.editor.session.on("change", () => {
      const content = this.editor.getValue();
      console.log(content, "content");
      this.content = content;
      this.$emit("input", content);
    });
    this.editor.session.on("blur", this.onBlur);
  },
  methods: {
    onBlur() {
      this.focused = false;
      console.log(this.content, "blur");
      this.$emit("blur", this.content);
    },
    onFocus() {
      this.focused = true;
      console.log(this.content, "focus");
      this.$emit("focus", this.content);
    }
  },
  i18n: {
    messages: {
      en: {
        placeholder: "Insert your content here…"
      },
      fr: {
        placeholder: "Insérez votre contenu ici…"
      }
    }
  }
};
</script>
<style scoped>
#details {
  position: absolute;
  width: 100%;
  height: 400px;
  bottom: 0;
}
</style>
