<template>
  <div class="home">
    <mt-tab-container v-model="selected" :value="selected">
      <mt-tab-container-item id="书架">
        <mt-header fixed title="书架"></mt-header>
        <BookShelf @addBook="changeSelected" class="tab-container"></BookShelf>
      </mt-tab-container-item>
      <mt-tab-container-item id="分类">
        <mt-header fixed title="分类"></mt-header>
        <BookCategory class="tab-container"></BookCategory>
      </mt-tab-container-item>
      <mt-tab-container-item id="排行">
        <mt-header fixed title="排行"></mt-header>
        <BookRank class="tab-container"></BookRank>
      </mt-tab-container-item>
      <mt-tab-container-item id="搜索">
        <BookSearch class="tab-container"></BookSearch>
      </mt-tab-container-item>
    </mt-tab-container>


    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="书架">
        <img slot="icon" src="../assets/book.svg">
        书架
      </mt-tab-item>
      <mt-tab-item id="分类">
        <img slot="icon" src="../assets/category.svg">
        分类
      </mt-tab-item>
      <mt-tab-item id="排行">
        <img slot="icon" src="../assets/rank.svg">
        排行
      </mt-tab-item>
      <mt-tab-item id="搜索">
        <img slot="icon" src="../assets/search.svg">
        搜索
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import BookShelf from "./bookshelf/BookShelf"
  import BookCategory from "./category/BookCategory.vue"
  import BookRank from "./rank/BookRank.vue"
  import BookSearch from "./search/BookSearch.vue"
  export default {
      data(){
          return {
              selected : "书架"
          }
      },
      components : {
        BookShelf,
        BookCategory,
        BookRank,
        BookSearch
      },
      methods : {
        changeSelected(data){
          this.selected = data
        }
      }
  }
</script>

<style>
  .tab-container{
    box-sizing: border-box;
    padding-top: 2rem;
    padding-bottom: 55px;
    width: 100vw;
    min-height: 100vh;
  }
</style>
