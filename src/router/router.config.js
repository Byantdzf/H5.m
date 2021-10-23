/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    redirect: 'welcome'
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/views/welcome'),
    meta: {
      title: '福恋智能',
      keepAlive: false
    }
  }
]
