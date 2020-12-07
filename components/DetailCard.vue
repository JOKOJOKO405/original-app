<template>
  <ul class="list__container">
    <li class="list__item" v-for="item in items" :key="item.id">
      <dl class="card__body" @click="showDetail(item.id)">
        <dt class="card__img">
          <img :src="item.image" alt="" />
        </dt>
        <dd class="card__content">
          <dl class="card__user">
            <dt><img src="" alt="" /></dt>
            <dd>{{ item.user }}</dd>
          </dl>
          <p class="card__title">{{ item.name }}</p>
          <p class="card__name">
            {{ item.menu }}
          </p>
        </dd>
      </dl>
    </li>
  </ul>
</template>

<script>
export default {
  async mounted() {
    await this.$firestore
      .collection("lunch")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const id = doc.id
          const data = doc.data()
          this.items.push({
            id,
            ...data
          })
        });
      });
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    showDetail(id){
      this.$store.dispatch('user/showDetail', id)
      this.$router.push(`/list/${id}`)
    },
  },
};
</script>

<style lang="scss">
.list {
  &__container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  &__item {
    &:not(:nth-child(2n)) {
      margin-right: 16px;
    }
    margin-bottom: 16px;
    width: calc(50% - 8px);
  }
}
.card {
  &__body {
    background: #fff;
    border-radius: 8px;
    width: 100%;
  }
  &__img {
    height: 140px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px 8px 0 0;
    }
  }
  &__content {
    padding: 10px;
    word-break: break-all;
  }
  &__user {
    display: flex;
    margin-bottom: 10px;
    dt {
      width: 26px;
    }
  }
  &__title {
    font-size: $font-md;
    color: $primary-color;
    font-weight: bold;
    margin-bottom: 16px;
  }
  &__name {
    height: 3em;
    overflow: hidden;
  }
}
</style>