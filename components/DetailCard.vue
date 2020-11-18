<template>
  <dl class="card__body">
    <dt class="card__img">
      <img src="" alt="">
    </dt>
    <dd class="card__content">
      <dl class="card__user">
        <dt><img src="" alt=""></dt>
        <dd>ユーザー名</dd>
      </dl>
      <p class="card__title">店名</p>
      <p class="card__name">
        メニュー名メニュー名メニュー名メニュー名
      </p>
    </dd>
  </dl>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .card{
    &__body{
      background: #fff;
      border-radius: 8px;
      width: 100%;
    }
    &__img{
      height: 140px;
      width: 100%;
      img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px 8px 0 0;
      }
    }
    &__content{
      padding: 10px;
    }
    &__user{
      display: flex;
      margin-bottom: 10px;
      dt{
        width: 26px;
      }
    }
    &__title{
      font-size: $font-md;
      color: $primary-color;
      font-weight: bold;
      margin-bottom: 16px;
    }
    &__name{
      height: 3em;
      overflow: hidden;
    }
  }
</style>