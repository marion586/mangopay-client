<template lang="pug">
.editor.column(:lang="$i18n.locale" :class="classList")
  div(
    v-model="content"
    v-quill:myQuillEditor="editorOption"
    :disabled="disabled"
    @blur="onBlur"
    @focus="onFocus")
</template>

<script>
import Vue from "vue";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

/* eslint-disable */
if (process.browser && !Vue.__quill_editor) {
  // Register modules
  const Quill = require("quill");
  const { default: ImageUploader } = require("quill-image-uploader");
  Quill.register("modules/imageUploader", ImageUploader);

  // Register Quill for vue
  Vue.__quill_editor = true;
  const VueQuillEditor = require("vue-quill-editor/dist/ssr");
  Vue.use(VueQuillEditor);
}

export default {
  props: {
    value: { type: String, default: "" },
    noBorder: { type: Boolean, default: false },
    uploadImage: { type: Function, default: null },
    toolbarOptions: {
      type: Array,
      default: () => [
        ["bold", "italic", "underline"],
        [{ header: [1, 2, 3, false] }],
        [{ size: [false, "large", "huge"] }],
        ["blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ align: [] }],
        ["clean"],
        ["link", "image", "video"]
      ]
    },
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
  created() {
    this.content = this.value;
    if (
      this.toolbarOptions.find(section => section.includes("image")) &&
      !this.uploadImage
    ) {
      console.error("Please provide the upload image function"); // eslint-disable-line
    }
  },
  methods: {
    onBlur() {
      this.focused = false;
      this.$emit("blur", this.content);
    },
    onFocus() {
      this.focused = true;
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

<style lang="css">
.el-form-item.is-error .editor {
  border-color: var(--color-danger) !important;
}

.el-form-item.is-success .editor {
  border-color: var(--color-success) !important;
}

.editor {
  line-height: normal;
  border-color: var(--color-border-base);
}

.editor.is-focused {
  border-color: var(--color-primary);
}

.editor * {
  outline: 0;
}

.editor .ql-toolbar,
.editor .ql-container {
  border-color: inherit;
  transition: border-color var(--transition-borderColor-base);
}

.editor .ql-toolbar {
  border-top-left-radius: var(--borderRadius-base);
  border-top-right-radius: var(--borderRadius-base);
  padding: 16px;
}

.editor .ql-toolbar.ql-snow .ql-picker-options {
  max-height: 120px;
  overflow: auto;
}

.editor .ql-container {
  border-bottom-left-radius: var(--borderRadius-base);
  border-bottom-right-radius: var(--borderRadius-base);
}

.editor .ql-editor {
  min-height: 120px;
}

.editor .ql-editor.ql-blank::before {
  left: 25px;
}

.editor.editor--no-border {
  background-color: #fff;
  border-color: var(--color-border-base);
}

.editor.editor--no-border .ql-toolbar {
  border-top: 0;
  border-left: 0;
  border-right: 0;
}

.editor.editor--no-border .ql-container {
  border: 0;
}

.editor .ql-editor {
  padding: 16px 25px;
}

.editor .ql-editor.ql-blank::before {
  left: 25px;
}

.editor [lang="fr"] .ql-header .ql-picker-label,
.editor [lang="fr"] .ql-header .ql-picker-item {
  content: "Normal";
}

.editor [lang="fr"] .ql-size .ql-picker-label::before {
  content: "Taille";
}

.editor [lang="fr"] .ql-size .ql-picker-item::before {
  content: "Normale";
}

.editor [lang="fr"] .ql-header .ql-picker-label[data-value="1"]::before,
.editor [lang="fr"] .ql-header .ql-picker-item[data-value="1"]::before {
  content: "Titre 1";
}

.editor [lang="fr"] .ql-header .ql-picker-label[data-value="2"]::before,
.editor [lang="fr"] .ql-header .ql-picker-item[data-value="2"]::before {
  content: "Titre 2";
}

.editor [lang="fr"] .ql-header .ql-picker-label[data-value="3"]::before,
.editor [lang="fr"] .ql-header .ql-picker-item[data-value="3"]::before {
  content: "Titre 3";
}

.editor [lang="fr"] .ql-header .ql-picker-label[data-value="4"]::before,
.editor [lang="fr"] .ql-header .ql-picker-item[data-value="4"]::before {
  content: "Titre 4";
}

.editor [lang="fr"] .ql-header .ql-picker-label[data-value="5"]::before,
.editor [lang="fr"] .ql-header .ql-picker-item[data-value="5"]::before {
  content: "Titre 5";
}

.editor [lang="fr"] .ql-header .ql-picker-label[data-value="6"]::before,
.editor [lang="fr"] .ql-header .ql-picker-item[data-value="6"]::before {
  content: "Titre 6";
}

.editor [lang="fr"] .ql-size .ql-picker-item[data-value="small"]::before {
  content: "Petite";
}

.editor [lang="fr"] .ql-size .ql-picker-item[data-value="large"]::before {
  content: "Grande";
}

.editor [lang="fr"] .ql-size .ql-picker-item[data-value="huge"]::before {
  content: "Très grande";
}

.editor [lang="fr"] .ql-snow .ql-tooltip::before {
  content: "Visiter le lien :";
}

.editor [lang="fr"] .ql-snow .ql-tooltip[data-mode="link"]::before {
  content: "Lien :";
}

.editor [lang="fr"] .ql-snow .ql-tooltip[data-mode="video"]::before {
  content: "Lien vers la vidéo :";
}

.editor [lang="fr"] .ql-snow .ql-tooltip a.ql-action::after {
  content: "Editer";
}

.editor [lang="fr"] .ql-snow .ql-tooltip a.ql-remove::before {
  content: "Supprimer";
}

.editor [lang="fr"] .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  content: "Valider";
}
</style>
