<template>
  <div class="inner">
    <div class="user__container">
      <h2 class="user__message">ようこそ、{{ userName }}さん</h2>
      <dl class="user__prof">
        <dt>
          <template v-if="userIcon">
            <img :src="userIcon" alt="" />
          </template>
          <template v-else>
            <img src="@/assets/img/ico_user.svg" alt="" />
          </template>
        </dt>
        <dd>
          <h3 class="user__name">
            {{ userName }}
          </h3>
          <Button label="プロフィール編集" @event="editProfile" />
        </dd>
      </dl>
    </div>
    <template>
      <div class="user__post-title">
        <h4 class="title">投稿したランチ</h4>
        <p class="count">{{ user.posts.length }}件</p>
      </div>
      <ul class="user__posts">
        <li
          v-for="(post, index) in user.posts"
          class="user__item"
          :key="post.id"
          @click="showDetail(post.id)"
        >
          <img :src="post.image" alt="" />
        </li>
      </ul>
    </template>
    <!-- <template v-else>
      <p>まだ投稿がありません</p>
    </template> -->

    <ModalBase v-if="isEditing" @close="closeModal">
      <EditProfile label="プロフィール編集" />
    </ModalBase>
    <ModalBase v-if="isCreate" @close="closeModal">
      <CreatePost />
    </ModalBase>
    <AddButton @add-card="addCard" />
  </div>
</template>

<script>
import ModalBase from "~/components/ModalBase";
import EditProfile from "~/components/EditProfile";
import CreatePost from "~/components/CreatePost";
import AddButton from "~/components/AddButton";
import Button from "~/components/Button";
import { mapGetters } from "vuex";
export default {
  // middleware: ['checkLogin'],
  components: {
    ModalBase,
    EditProfile,
    CreatePost,
    AddButton,
    Button,
  },
  asyncData(){
    return{
      user: {
          name: "",
          posts: [],
      }
    }
  },
  data() {
    return {
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
    showDetail(id){
      this.$router.push(`/user/list/${id}`)
    },
  },
  // computed: {
  //   ...mapGetters('user', ['userName', 'userIcon']),
  // },
  async mounted() {
    const _this = this;
    this.$fireAuth.onAuthStateChanged(function (user) {
      if (user) {
        const uid = user.uid
        try {
          _this.$firestore
            .collection('lunch')
            .where("user", "==", uid)
            .get()
            .then((snapshot) => {
              snapshot.forEach((doc) => {
                const id = doc.id;
                const data = doc.data();
                _this.user.posts.push({
                  id,
                  ...data,
                });
              });
            });
        }catch(error){
          console.log(error);
        }
      } else {
        this.$router.push("/login");
      }
    });
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
    margin-bottom: 40px;
    dt {
      width: 120px;
    }
    dd {
      width: calc(100% - 120px);
      padding-left: 16px;
    }
  }
  &__name {
    @include title($font-color);
  }
  &__posts {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  &__post-title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 8px;
    width: 100%;
    .count {
      font-size: $font-sm;
      color: $light-gray;
    }
    .title {
      font-size: $font-lg;
      font-weight: bold;
    }
  }
  &__item {
    position: relative;
    width: calc((100% / 3) - (16px / 3));
    margin-bottom: 8px;
    &:not(:nth-child(3n)) {
      margin-right: 8px;
    }
    &::before {
      content: "";
      display: block;
      padding-top: 100%;
    }
    img {
      position: absolute;
      @extend %psedo-all;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
}
</style>