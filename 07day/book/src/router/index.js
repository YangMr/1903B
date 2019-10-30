import Vue from 'vue'
import Router from 'vue-router'

import Book from "../components/Book"
import Category from "../components/Category"
import Rank from "../components/Rank"
import Search from "../components/Search"

Vue.use(Router)

export default new Router({
  routes: [
    {
        path : "/",
        component :Book
    },
    {
        path : "/category",
        component :Category
    },
    {
        path : "/rank",
        component :Rank
    },
    {
        path : "/search",
        component :Search
    }

  ]
})
