<template>
  <div class="detail__container">
    <div class="inner">
      <div class="detail__userInfo">
        <dl>
          <dt><img src="@/assets/img/ico_user.svg" alt=""></dt>
          <dd>
            {{ posts.user }}
          </dd>
        </dl>
      </div>
      <p class="detail__date">{{ posts.createdAt | dateFilter }}</p>
    </div>
    <div class="detail__img">
      <img :src="posts.image" alt="">
    </div>
    <div class="inner">
      <h2 class="detail__name">{{ posts.name }}</h2>
      <h3 class="detail__menu">{{ posts.menu }}</h3>
      <p class="detail__price">{{ posts.price }}</p>
      <div class="detail__comment">
        {{ posts.comment }}
      </div>
    </div>
    <ModalBase v-if="isCreate" @close="closeModal">
      <CreatePost />
    </ModalBase>
    <AddButton @add-card="addCard" />
  </div>
</template>

<script>
import CreatePost from '~/components/CreatePost'
import AddButton from '~/components/AddButton'
import { mapState } from 'vuex'
import moment from "moment"
export default {
  components: {
    CreatePost,
    AddButton,
  },
  data(){
    return {
      isUser: false,
      isCreate: false,
    }
  },
  methods: {
    closeModal() {
      this.isCreate = false;
    },
    addCard() {
      this.isCreate = true;
    },
  },
  computed: {
    ...mapState('user', ['posts'])
  },
  filters: {
    dateFilter(createdAt) {
      return moment(createdAt).format("YYYY/MM/DD HH:mm:ss");
    },
  }
}
</script>

<style lang="scss">
.detail__userInfo{
  margin-bottom: 8px;
}
</style>