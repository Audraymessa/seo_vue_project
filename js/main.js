import { createApp } from 'vue'


const routes = [
    { path: '/', component : 'introduzione'},
    {path: '/fondamenti', component: 'fondamenti'}, 
    {path: '/statistiche', component: 'statistiche'},
    {path: '/risorse', component: 'risorse'}
  ];

  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
  });


const app = createApp(App)

app.use(router)
app.mount('#app') 