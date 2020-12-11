<template>
  <div class="detail__container">
    <div v-for="post in user.posts" :key="post.id">
      <div class="inner">
        <div class="detail__userInfo">
          <dl>
            <dt><img src="@/assets/img/ico_user.svg" alt="" /></dt>
            <dd>
              {{ post.user }}
            </dd>
          </dl>
          <p class="detail__date">{{ post.createdAt.toDate() | dateFilter }}</p>
        </div>
        <div class="detail__btns">
          <Button label="編集" @event="editPost" />
          <Button label="削除" :style="deleteClass" @event="deletePost" />
        </div>
      </div>
      <div class="detail__img">
        <img :src="post.image" alt="" />
      </div>
      <div class="inner">
        <h2 class="detail__name">{{ post.name }}</h2>
        <h3 class="detail__menu">{{ post.menu }}</h3>
        <p class="detail__price">{{ post.price }}円</p>
        <div class="detail__comment">
          {{ post.comment }}
        </div>
      </div>
    </div>
    <ModalBase v-if="isPostEdit" @close="closeModal">
      <EditPost />
    </ModalBase>
  </div>
</template>

<script>
import moment from "moment";
import EditPost from "~/components/EditPost";
import Button from "~/components/Button";
export default {
  async mounted() {
    const _this = this;
    const pageID = this.$route.params.id;
    this.$fireAuth.onAuthStateChanged(function (user) {
      if (user) {
        const uid = user.uid;
        try {
          _this.$firestore
            .collection("lunch")
            .doc(pageID)
            .get()
            .then((doc) => {
              const id = doc.id;
              const data = doc.data();
              _this.user.posts.push({
                id,
                ...data,
              });
            });
        } catch (error) {
          console.log(error);
        }
      } else {
        this.$router.push("/login");
      }
    });
  },
  asyncData() {
    return {
      user: {
        name: "",
        posts: [],
      },
    };
  },
  components: {
    EditPost,
    Button,
  },
  data() {
    return {
      isUser: false,
      isPostEdit: false,
      deleteClass: {
        background: "#a2a2a2",
        marginRight: 0,
      },
    };
  },
  methods: {
    closeModal() {
      this.isPostEdit = false;
    },
    editPost() {
      this.isPostEdit = true;
    },
    async deletePost() {
      const _this = this;
      const user = this.$fireAuth.currentUser.uid
      const pageID = this.$route.params.id;
      const msg = confirm("投稿を削除しますか？")
      if(msg && user){
        try {
          this.$firestore
            .collection("lunch")
            .doc(pageID)
            .delete()
            .then(function () {
              alert('投稿を削除しました')
              _this.$router.push(`/user/${user}`)
            })
        }catch(error){
          alert('問題が発生しました')
          console.log(error);
        }
      }
    },
  },
  filters: {
    dateFilter(createdAt) {
      return moment(createdAt).format("YYYY/MM/DD HH:mm:ss");
    },
  },
};
</script>

<style lang="scss">
</style>