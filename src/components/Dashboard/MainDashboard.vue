<template>
  <div>
    <v-main height="70">
      <v-card-text class="text-left">
        <v-icon class="mt-2" large>mdi-message-text-outline</v-icon>
        <span class="font-weight-bold mt-0">
          This conversation is just between the two of you </span
        ><br />
        <span class="ml-10">
          Here you send messages and share files with
          <span class="text-color"
            >@{{
              getDatachannelId ? getDatachannelId.name : "does not exist"
            }}</span
          >
        </span>
        <v-divider></v-divider>
        <div
          v-for="message in getMessagesByChannel"
          :key="message.id"
          class="message ml-2 mt-3"
        >
          <div class="allusers d-flex">
            <v-avatar>
              <v-img
                src="https://app.whistleit.io/img/system-profile.2229f54a.png"
                alt=""
              ></v-img>
            </v-avatar>
            <h3 class="mt-3 ml-3">{{ getDatachannelId.name }}</h3>
            <v-spacer></v-spacer>
            <div>
              
              <div class="hover-option mt-1 mx-2">
                
                <v-btn
                  depressed
                  plain
                  min-width="0"
                  height="25"
                  rounded
                  class="pa-0"
                >
                  <v-icon class="pl-2 pr-1" color="black"
                    >mdi-emoticon-happy-outline</v-icon
                  ></v-btn
                >
                <v-btn
                  depressed
                  plain
                  min-width="0"
                  height="25"
                  rounded
                  class="pa-0"
                >
                  <v-icon class="px-1">mdi-content-copy</v-icon></v-btn
                >
                <v-btn
                  depressed
                  plain
                  min-width="0"
                  height="25"
                  rounded
                  class="pa-0"
                >
                  <v-icon class="px-1">mdi-pin-outline</v-icon>
                </v-btn>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      class="hover-option pa-0"
                      depressed
                      plain
                      height="25"
                      min-width="0"
                      rounded
                    >
                      <v-icon class="pr-2 pl-1">mdi-dots-horizontal</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      class="dropdown"
                      @click="editMessage(message.id)"
                    >
                      <v-list-item-title>Edit</v-list-item-title>
                      <v-icon>mdi-pencil-outline</v-icon>
                    </v-list-item>
                    <v-list-item @click="confirmDelete(message.id)">
                      <v-list-item-title>Delete</v-list-item-title>
                      <v-icon>mdi-delete-outline</v-icon>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </div>

          <!-- all the messages from footer text-field  show here in v-html we use v-html 
          here due to tiptap  -->

          <div v-html="message.text" class="allmessage pl-14"></div>
        </div>
        
      </v-card-text>
    </v-main>

    <!------------------------ this is dashboard footer component call here ------------------------>

    <div class="footer">
    <the-dashboard-footer-vue /></div>

    <!-- Confirmation Dialog -->
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="headline">Confirm Delete</v-card-title>
        <v-card-text>Are you sure you want to delete this message?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  text @click="dialog = false"
            >Cancel</v-btn
          >
          <v-btn color="error" @click="confirmDeleteMessage"
            >Confirm</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Edit Form -->

    <v-dialog v-model="editDialog" max-width="500">
      <v-card>
        <v-card-title class="headline">Edit Message</v-card-title>
        <v-card-text class="py-0">
          <!-- TipTap Editor below  -->
           <div >
          <editor-content :editor="editor" id="custom-editor" /></div>
          <div class="formating-text">
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
        </v-card-text>
        <v-card-actions class="pt-8">
          <v-spacer></v-spacer>
          <v-btn text @click="editDialog = false">Cancel</v-btn>
          <v-btn color="primary" depressed @click="saveEditedMessage">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TheDashboardFooterVue from './TheDashboardFooter.vue'
import { EditorContent, Editor} from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'


export default {
  name: 'MainDashboard',
  components: {
    TheDashboardFooterVue,
    EditorContent,
  },
  data() {
    return {
      dialog: false,
      editDialog: false,
      messageIdToDelete: null,
      editedMessage: { id: null, text: '' },
      editor: null,
    }
  },
  computed: {
    ...mapGetters([
      'showChannelUserName',
      'showMessageUserName',
      'getDatachannelId',
      'getMessagesByChannel',
    ]),
  },
  methods: {
    ...mapActions(['deleteMessage', 'setEditedMessage', 'updateMessage']),

     /**
     * this confirmdelete is called when user click on delete button
     * Sets the messageIdToDelete and opens the confirmation dialog
     * @param messageId -> parameter that equal to messageToDelete
     * @returns {void}
     */

    confirmDelete(messageId) {
      this.messageIdToDelete = messageId
      this.dialog = true
    },

    /**
     * This confirmDeleteMessage is called when the user confirms the deletion in the confirmation dialog.
     * it calls the deleteMessage action where apply the logic
     *  @param {void} -> parameter that equal to messageToDelete
     *  @returns {void}
     */

    confirmDeleteMessage() {
      this.deleteMessage(this.messageIdToDelete)
      this.dialog = false
      this.messageIdToDelete = null
    },

    /**
     *  this below editmessage run when the user click on the edit btn this go to 
     *  getmessagebychannel and find msg.id equal to messageId if it's equal then
     *  the editedmessage hold the previous message and show with the updated message
     *  and the editdialog is true
     * @param messageId -> this messageId is parameter that is equal to msg.id 
     * @returns {void}
     */

    editMessage(messageId) {
      const message = this.getMessagesByChannel.find((msg) => msg.id === messageId)
      if (message) {
        this.editedMessage = { ...message }
        this.editor.commands.setContent(this.editedMessage.text)
        this.editDialog = true
      }
    },

    /**
     * this below saveEditedMessage run when user click on save btn it
     * save the editedmessage in the tiptap editor that get getHTML()
     * and updatedmessage action is run and editdialog is false
     * Clear Previous Data: It ensures that when the user opens the
     * edit dialog again, it doesn't show the data from the previously 
     * edited message. 
     */

    saveEditedMessage() {
      this.editedMessage.text = this.editor.getHTML()
      this.updateMessage(this.editedMessage)
      this.editDialog = false
      this.editedMessage = { id: null, text: '' }
    },
  },
  /**
   * this mounted hook is used in tiptap  to mount data
   * and with all extenion of starterkit when mounted hook run 
   */
  mounted() {
    this.editor = new Editor({
      content: "",
      extensions: [
        StarterKit,
        Underline,
      ],
    });
  },

}
</script>

<style scoped>
#custom-editor{
  overflow-x: hidden;
}
.formating-text{
  background-color: #EEEFF7;
  margin-top: 20px;
}
.text-color {
  color: blue;
}
.footer{
  height: 70px;
}
.allusers:hover{

  background-color: #eeeff7;
}
.allusers:hover .hover-option{
  display: flex;
}
.allmessage {
  background-color: #eeeff7;
}
.hover-option {
  height: 25px;
  background-color: white !important;
  border-radius: 5px;
  display: none;
}
.hover-option .v-icon { 
  font-size: 20px;
}
.dropdown {
  width: 150px;
}

</style>
