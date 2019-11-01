import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/components/Book'
import Category from '@/components/Category'
import Rank from '@/components/Rank'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : "*",
      redirect : "/"
    },
    {
      path: '/',
      name: 'book',
      meta : {
        title : "hello"
      },
      component: Book
    },
    {
      path: '/category',
      name: 'category',
      meta : {
        title : "word"
      },
      component: Category
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ],
  mode : "history"
})
