<template>
  <div class="inner">
    <div class="user__container">
      <h2 class="user__message">ようこそ、{{ user.name }}さん</h2>
      <dl class="user__prof">
        <dt>
          <template v-if="isUser"> </template>
          <template v-else>
            <img src="@/assets/img/ico_user.svg" alt="" />
          </template>
        </dt>
        <dd>
          <p>
            {{ user.name }}
          </p>
        </dd>
      </dl>
    </div>
    <ModalBase v-if="isEditing" @close-modal="closeModal">
      <EditProfile />
    </ModalBase>
    <ModalBase v-if="isCreate" @close-modal="closeModal">
      <CreatePost />
    </ModalBase>
    一覧
    <AddButton @add-card="addCard" />
  </div>
</template>

<script>
import ModalBase from "~/components/ModalBase";
import EditProfile from "~/components/EditProfile";
import CreatePost from "~/components/CreatePost";
import AddButton from "~/components/AddButton";
export default {
  components: {
    ModalBase,
    EditProfile,
    CreatePost,
    AddButton,
  },
  data() {
    return {
      user: {
        name: "ユーザー1",
        image: "@/assets/img/ico_user.svg",
        posts: [
          {
            id: "1",
            image: "",
          },
        ],
      },
      isUser: false,
      isEditing: false,
      isCreate: false,
    };
  },
  methods: {
    closeModal() {
      this.isEditing = false;
      this.isCreate = false;
    },
    editProfile() {
      this.isEditing = true;
    },
    addCard() {
      this.isCreate = true;
    },
  },
};
</script>

<style lang="scss">
.user {
  &__message {
    font: {
      weight: bold;
      size: $font-lr;
    }
    color: $primary-color;
    margin-bottom: 24px;
  }
  &__prof {
    display: flex;
    dt {
      width: 120px;
    }
    dd {
      width: calc(100% - 120px);
      padding-left: 16px;
    }
  }
}
</style>