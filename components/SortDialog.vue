<template>
  <div class="dialog">
    <p class="dialog__text">並び替え</p>
    <select class="dialog__select" name="" id="">
      <option value="1" selected>新着↑↑↑</option>
      <option value="2">新着↓↓↓</option>
    </select>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .dialog{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    &__text {
      font-weight: bold;
    }
    &__select{
      width: 60%;
      padding: 8px 16px;
      color: $light-gray;
      border: 1px solid $light-gray;
      border-radius: 8px;
    }
  }
</style>