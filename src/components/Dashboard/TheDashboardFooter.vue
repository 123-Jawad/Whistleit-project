<template>
  <div>
    <v-footer
      v-if="editor"
      app
      width="80%"
      inset
      elevation="2"
      class="ml-4 pa-0 mb-4"
    >
      <v-sheet color="#eeeff7" width="100%" class="align-center justify-center">
        <div class="text-field d-flex">
          <editor-content :editor="editor" />
          <v-btn @click="sendMessage" class="sendbtn pa-6" plain min-width="0" depressed 
           ><v-icon>mdi-send-outline</v-icon></v-btn>
        </div>
        <div class="d-flex icons">
          <div>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#EEEFF7"
                  min-width="0"
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  class="pl-2 pa-0 text--secondary"
                  @click="editor.chain().focus().toggleBold().run()"
                  :class="{ 'is-active': editor.isActive('bold') }"
                >
                  <v-icon class="mx-1">mdi-format-bold</v-icon></v-btn
                >
              </template>
              <span>Bold</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#EEEFF7"
                  min-width="0"
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  class="pa-0 text--secondary"
                  @click="editor.chain().focus().toggleItalic().run()"
                   :class="{ 'is-active': editor.isActive('italic') }"
                >
                  <v-icon class="mx-1">mdi-format-italic</v-icon></v-btn
                >
              </template>
              <span>Italic</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#EEEFF7"
                  min-width="0"
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  class="pl-2 pa-0 text--secondary"
                  @click="editor.chain().focus().toggleStrike().run()" 
                  :class="{ 'is-active': editor.isActive('strike') }"
                >
                  <v-icon class="mx-1">mdi-format-strikethrough</v-icon></v-btn
                >
              </template>
              <span>Strike</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#EEEFF7"
                  min-width="0"
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  class="pl-2 pa-0 text--secondary"
                  @click="editor.chain().focus().toggleUnderline().run()" 
                  :class="{ 'is-active': editor.isActive('underline') }"
                >
                  <v-icon class="mx-1">mdi-format-underline</v-icon></v-btn
                >
              </template>
              <span>Underline</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#EEEFF7"
                  min-width="0"
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  class="pl-2 pa-0 text--secondary"
                  @click="editor.chain().focus().toggleCodeBlock().run()"
                   :class="{ 'is-active': editor.isActive('codeBlock') }"
                >
                  <v-icon class="mx-1">mdi-xml</v-icon></v-btn
                >
              </template>
              <span>Code</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#EEEFF7"
                  min-width="0"
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  class="pl-2 pa-0 text--secondary"
                  @click="editor.chain().focus().toggleBulletList().run()" 
                  :class="{ 'is-active': editor.isActive('bulletList') }"
                >
                  <v-icon class="mx-1">mdi-format-list-bulleted</v-icon></v-btn
                >
              </template>
              <span>Unorder List</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#EEEFF7"
                  min-width="0"
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  class="pl-2 pa-0 text--secondary"
                  @click="editor.chain().focus().toggleOrderedList().run()" 
                  :class="{ 'is-active': editor.isActive('orderedList') }"
                >
                  <v-icon class="mx-1">mdi-format-list-checkbox</v-icon></v-btn
                >
              </template>
              <span>Order List</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#EEEFF7"
                  min-width="0"
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  class="pl-2 pa-0 text--secondary"
                >
                  <v-icon class="mx-1">mdi-email-alert-outline</v-icon></v-btn
                >
              </template>
              <span>Important Message</span>
            </v-tooltip>
          </div>
          <v-spacer></v-spacer>
          <div>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#EEEFF7"
                  min-width="0"
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  class="pl-2 pa-0 text--secondary"
                >
                  <v-icon class="mx-1">mdi-emotion</v-icon></v-btn
                >
              </template>
              <span>Important Message</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#EEEFF7"
                  min-width="0"
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  class="pl-2 pa-0 text--secondary"
                >
                  <v-icon class="mx-1"
                    >mdi-emoticon-happy-outline</v-icon
                  ></v-btn
                >
              </template>
              <span>Emoji</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#EEEFF7"
                  min-width="0"
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  class="pl-2 pa-0 text--secondary"
                >
                  <v-icon class="mx-1">mdi-file-multiple-outline</v-icon></v-btn
                >
              </template>
              <span>Recent Files</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#EEEFF7"
                  min-width="0"
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  class="pl-2 pa-0 text--secondary"
                >
                  <v-icon class="mx-1">mdi-paperclip</v-icon></v-btn
                >
              </template>
              <span>Attach Files</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#EEEFF7"
                  min-width="0"
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  class="pl-2 pa-0 text--secondary"
                >
                  <v-icon class="mx-1">mdi-video-account</v-icon></v-btn
                >
              </template>
              <span>Screen Recording</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#EEEFF7"
                  min-width="0"
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  class="pr-2 pa-0 text--secondary"
                >
                  <v-icon class="mx-1">mdi-microphone</v-icon></v-btn
                >
              </template>
              <span>Audio</span>
            </v-tooltip>
          </div>
        </div>
      </v-sheet>
    </v-footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from '@tiptap/extension-underline'

export default {
  name: "TheDashboardFooter",
  components: {
    EditorContent,
  },
  data() {
    return {
      message: "",
      editor: null,
    };
  },
  /**
   * this mounted is used for tiptap editor with all the extensions
   * and starterkit underline and placeholder 
   */
  mounted() {
    this.editor = new Editor({
      content: "",
      extensions: [
        StarterKit,
        Underline,
        Placeholder.configure({
          placeholder: "Type your message here...",
        }),
      ],
    });
  },
  methods: {
    ...mapActions(["setsendMessage"]),
    /**
     * The sendMessage method is responsible for sending a new message using
     * the content from the TipTap editor.This line checks the content of
     * the TipTap editor is not empty.trim (mean remove the before and after
     * content whitespaces) A varaiable with newmessage where the text of editor is 
     * saved in this and used to send the message with newmessage variable
     */
    sendMessage() {
      if (this.editor.getHTML().trim() !== "") {
        const newMessage = {
          text: this.editor.getHTML(),
        };
        this.setsendMessage(newMessage);
      }
      this.editor.commands.clearContent();
    },
  },
};
</script>

<style lang="scss">
.icons .v-icon {
  font-size: 20px !important;
}
.sendbtn{
  background-color: white;
  padding: 20px;
}
.tiptap {
  background-color: white;
  width: 75vw;
  padding: 5px;
  outline: none;
  :first-child {
    margin-top: 0;
  }

  /* List styles */
  ul,
  ol {
    padding: 0 1rem;
    margin: 1.25rem 1rem 1.25rem 0.4rem;

    li p {
      margin-top: 0.25em;
      margin-bottom: 0.25em;
    }
  }

  /* Heading styles */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    margin-top: 2.5rem;
  }

  h1,
  h2 {
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  h4,
  h5,
  h6 {
    font-size: 1rem;
  }

  /* Code and preformatted text styles */
  code {
    background-color: purple;
    border-radius: 0.4rem;
    color: black;
    font-size: 0.85rem;
    padding: 0.25em 0.3em;
  }

  pre {
    background: black;
    border-radius: 0.5rem;
    color: white  ;
    font-family: "JetBrainsMono", monospace;
    margin: 1.5rem 0;
    padding: 0.75rem 1rem;

    code {
      background: none;
      color: inherit;
      font-size: 0.8rem;
      padding: 0;
    }
  }

  blockquote {
    border-left: 3px solid var(--gray-3);
    margin: 1.5rem 0;
    padding-left: 1rem;
  }

  hr {
    border: none;
    border-top: 1px solid var(--gray-2);
    margin: 2rem 0;
  }

  /* Placeholder (at the top) */
  p.is-editor-empty:first-child::before {
    color: #9093B7;
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }

  /* Placeholder (on every new line) */
  // .is-empty::before {
  //   color: red;
  //   content: attr(data-placeholder);
  //   float: left;
  //   height: 0;
  //   pointer-events: none;
  // } 
}
</style>
