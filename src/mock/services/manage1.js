import Mock from 'mockjs2'
import { builder } from '../util'

const resourcepools = () => {
  return builder({
    data: [
      {
        id: 1,
        cover: '/logo.png',
        title: 'CRM电渠资源池',
        description: 'kubernetes资源池 25节点',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 2,
        cover: '/logo.png',
        title: 'CRM营业厅资源池',
        description: 'kubernetes资源池 60节点',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 3,
        cover: '/logo.png',
        title: '计费营帐资源池',
        description: 'kubernetes资源池 30节点',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 4,
        cover: '/logo.png',
        title: 'OSS资源池',
        description: 'kubernetes资源池 50节点',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 5,
        cover: '/logo.png',
        title: '数据资源池',
        description: 'kubernetes资源池 15节点',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 5,
        cover: '/logo.png',
        title: '数据资源池',
        description: 'kubernetes资源池 15节点',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 5,
        cover: '/logo.png',
        title: '数据资源池',
        description: 'kubernetes资源池 15节点',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 5,
        cover: '/logo.png',
        title: '数据资源池',
        description: 'kubernetes资源池 15节点',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 5,
        cover: '/logo.png',
        title: '数据资源池',
        description: 'kubernetes资源池 15节点',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 5,
        cover: '/logo.png',
        title: '数据资源池',
        description: 'kubernetes资源池 15节点',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 5,
        cover: '/logo.png',
        title: '数据资源池',
        description: 'kubernetes资源池 15节点',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 5,
        cover: '/logo.png',
        title: '数据资源池',
        description: 'kubernetes资源池 15节点',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      }
    ],
    pageSize: 10,
    pageNo: 0,
    totalPage: 6,
    totalCount: 57
  })
}

const practisedata = () => {
  return builder({
    code: 1,
    data: [
      '"key":paaspaastrain001member001 "val":张三',
      'paaspaastrain001member002 李四aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      'paaspaastrain001member003 王五'
    ],
    message: 'success',
    timestamp: 1560849025158,
    name: 'PS.KAFKA'
  })
}

Mock.mock(/\/list\/search\/resourcepools/, 'get', resourcepools)
Mock.mock(/\/list\/search\/practisedata/, 'get', practisedata)
