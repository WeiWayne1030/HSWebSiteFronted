<script setup>
  import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue';
  import LayoutNav from '@/views/Layout/components/LayoutNav.vue';
  import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue';
  import ItemsNavPills from '@/components/ItemsNavPills.vue';
  import ItemCard from '@/components/ItemCard.vue';

// const dummyData = {
//   "items": [
//         {
//             "id": 1,
//             "name": "甜心極美背後扭結螺紋彈力Bratop",
//             "state": 1,
//             "price": 150,
//             "image": "https://imgur.com/4q0jgMB",
//             "description": "Aliquam dolorem dolor.",
//             "CategoryId": 1,
//             "createdAt": "2023-07-23T13:27:37.000Z",
//             "updatedAt": "2023-07-23T13:27:37.000Z",
//             "Category": {
//                 "id": 1,
//                 "name": "Brotop",
//                 "createdAt": "2023-07-23T13:27:37.000Z",
//                 "updatedAt": "2023-07-23T13:27:37.000Z"
//             }
//         },
//         {
//             "id": 2,
//             "name": "透膚多穿天絲薄款短襯衫(罩衫)",
//             "state": 1,
//             "price": 250,
//             "image": "https://imgur.com/HhnKscI",
//             "description": "Explicabo et non veniam et reprehenderit maxime minima temporibus.",
//             "CategoryId": 1,
//             "createdAt": "2023-07-23T13:27:37.000Z",
//             "updatedAt": "2023-07-23T13:27:37.000Z",
//             "Category": {
//                 "id": 1,
//                 "name": "Brotop",
//                 "createdAt": "2023-07-23T13:27:37.000Z",
//                 "updatedAt": "2023-07-23T13:27:37.000Z"
//             }
//         },
//         {
//             "id": 3,
//             "name": "天絲背鏤空設計襯衫搭配斜肩條紋吊帶小背心兩件式套裝",
//             "state": 0,
//             "price": 500,
//             "image": "https://imgur.com/IfxgyFI",
//             "description": "Voluptatem et voluptatem assumenda qui.",
//             "CategoryId": 5,
//             "createdAt": "2023-07-23T13:27:37.000Z",
//             "updatedAt": "2023-07-23T13:27:37.000Z",
//             "Category": {
//                 "id": 5,
//                 "name": "套裝 & 連身褲",
//                 "createdAt": "2023-07-23T13:27:37.000Z",
//                 "updatedAt": "2023-07-23T13:27:37.000Z"
//             }
//         },
//         {
//             "id": 4,
//             "name": "不悶熱涼感滑雪紡抽繩垂墜工裝褲(工裝長褲)",
//             "state": 1,
//             "price": 350,
//             "image": "https://imgur.com/QvIm1lW",
//             "description": "Perspiciatis ipsa voluptatibus necessitatibus dolor laboriosam qui recusandae blanditiis aut.",
//             "CategoryId": 3,
//             "createdAt": "2023-07-23T13:27:37.000Z",
//             "updatedAt": "2023-07-23T13:27:37.000Z",
//             "Category": {
//                 "id": 3,
//                 "name": "下身",
//                 "createdAt": "2023-07-23T13:27:37.000Z",
//                 "updatedAt": "2023-07-23T13:27:37.000Z"
//             }
//         }
//     ],
//     "categories": [
//         {
//             "id": 1,
//             "name": "Brotop",
//             "createdAt": "2023-07-23T13:27:37.000Z",
//             "updatedAt": "2023-07-23T13:27:37.000Z"
//         },
//         {
//             "id": 2,
//             "name": "上衣",
//             "createdAt": "2023-07-23T13:27:37.000Z",
//             "updatedAt": "2023-07-23T13:27:37.000Z"
//         },
//         {
//             "id": 3,
//             "name": "下身",
//             "createdAt": "2023-07-23T13:27:37.000Z",
//             "updatedAt": "2023-07-23T13:27:37.000Z"
//         },
//         {
//             "id": 4,
//             "name": "洋裝",
//             "createdAt": "2023-07-23T13:27:37.000Z",
//             "updatedAt": "2023-07-23T13:27:37.000Z"
//         },
//         {
//             "id": 5,
//             "name": "套裝 & 連身褲",
//             "createdAt": "2023-07-23T13:27:37.000Z",
//             "updatedAt": "2023-07-23T13:27:37.000Z"
//         },
//         {
//             "id": 6,
//             "name": "外套 & 罩衫",
//             "createdAt": "2023-07-23T13:27:37.000Z",
//             "updatedAt": "2023-07-23T13:27:37.000Z"
//         },
//         {
//             "id": 7,
//             "name": "配件",
//             "createdAt": "2023-07-23T13:27:37.000Z",
//             "updatedAt": "2023-07-23T13:27:37.000Z"
//         },
//         {
//             "id": 8,
//             "name": "鞋子",
//             "createdAt": "2023-07-23T13:27:37.000Z",
//             "updatedAt": "2023-07-23T13:27:37.000Z"
//         }
//     ],
//     "categoryId": null
// }

// const categories = dummyData.categories
// const items = dummyData.items
// const categoryId = dummyData.categoryId

// categories.values = categories.map(category => {
//   return {
//     ...category,
//     active: category.id === Number(categoryId)
//   }
// })

// const filteredItems = items.filter(item => {
//   return categoryId ? item.CategoryId === Number(categoryId) : true
// })


</script>
<template>
  <div>
    <LayoutNav />
    <LayoutHeader />
    <ItemsNavPills :categories="categories" />
     <div class="row">
      <ItemCard />
    </div>
    <LayoutFooter />
  </div>
</template>