import Mock from 'mockjs2'
import { builder } from '../util'

const appTemplateTree = () => {
  return builder([{
    'key': 'key-01',
    'title': '公共商店',
    'icon': 'mail',
    'children': [{
      'key': 'key-01-01',
      'title': '开源',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-01-01',
        'title': 'kafka',
        'icon': null
      },
      {
        'key': 'key-01-01-02',
        'title': 'redis',
        'icon': null
      },
      {
        'key': 'key-01-01-03',
        'title': 'elasticsearch',
        'icon': null
      }
      ]
    }, {
      'key': 'key-01-02',
      'title': '集团',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-02-01',
        'title': 'ctgmq',
        'icon': null
      },
      {
        'key': 'key-01-02-02',
        'title': 'ctgcache',
        'icon': null
      },
      {
        'key': 'key-01-02-03',
        'title': 'udal',
        'icon': null
      }
      ]
    }]
  }, {
    'key': 'key-02',
    'title': '私有商店',
    'icon': 'dollar',
    'children': [{
      'key': 'key-02-01',
      'title': '数据',
      'icon': null
    }, {
      'key': 'key-02-02',
      'title': '计费',
      'icon': null
    }, {
      'key': 'key-02-03',
      'title': 'CRM',
      'icon': null,
      'children': [{
        'key': 'key-02-03-01',
        'title': 'crm-hlog',
        'icon': null
      },
      {
        'key': 'key-02-03-02',
        'title': 'crm-amc',
        'icon': null
      }
      ]
    }]
  }])
}

const resourcePoolsTree = () => {
  return builder([{
    'key': 'key-01',
    'title': '资源池',
    'icon': 'mail',
    'children': [{
      'key': 'key-01-01',
      'title': '二长',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-01-01',
        'title': '计费1',
        'icon': null
      },
      {
        'key': 'key-01-01-02',
        'title': '计费2',
        'icon': null
      },
      {
        'key': 'key-01-01-03',
        'title': '计费3',
        'icon': null
      }
      ]
    }, {
      'key': 'key-01-02',
      'title': '吉山',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-02-01',
        'title': '数据1',
        'icon': null
      },
      {
        'key': 'key-01-02-02',
        'title': '数据2',
        'icon': null
      },
      {
        'key': 'key-01-02-03',
        'title': '数据3',
        'icon': null
      }
      ]
    }]
  }, {
    'key': 'key-02',
    'title': '鼓楼',
    'icon': 'dollar',
    'children': [{
      'key': 'key-02-01',
      'title': '电渠受理',
      'icon': null
    }, {
      'key': 'key-02-02',
      'title': 'SOAP',
      'icon': null
    }, {
      'key': 'key-02-03',
      'title': '营业厅受理',
      'icon': null,
      'children': [{
        'key': 'key-02-03-01',
        'title': 'SO',
        'icon': null
      },
      {
        'key': 'key-02-03-02',
        'title': '测试',
        'icon': null
      }
      ]
    }]
  }])
}

const appTree = () => {
  return builder([{
    'key': 'key-01',
    'title': '我的应用',
    'icon': 'mail',
    'children': [{
      'key': 'key-01-01',
      'title': '计费',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-01-01',
        'title': '充值中心',
        'icon': null
      },
      {
        'key': 'key-01-01-02',
        'title': '查询中心',
        'icon': null
      },
      {
        'key': 'key-01-01-03',
        'title': '缴费中心',
        'icon': null
      }
      ]
    }, {
      'key': 'key-01-02',
      'title': '数据',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-02-01',
        'title': 'CSS',
        'icon': null
      },
      {
        'key': 'key-01-02-02',
        'title': '事件中心',
        'icon': null
      },
      {
        'key': 'key-01-02-03',
        'title': '营销中心',
        'icon': null
      }
      ]
    }]
  }, {
    'key': 'key-02',
    'title': 'CRM',
    'icon': 'dollar',
    'children': [{
      'key': 'key-02-01',
      'title': 'PPM',
      'icon': null
    }, {
      'key': 'key-02-02',
      'title': 'SOAP',
      'icon': null
    }, {
      'key': 'key-02-03',
      'title': '营业受理',
      'icon': null,
      'children': [{
        'key': 'key-02-03-01',
        'title': 'SO',
        'icon': null
      },
      {
        'key': 'key-02-03-02',
        'title': 'ORDER',
        'icon': null
      }
      ]
    }]
  }])
}

Mock.mock(/\/app\/tree/, 'get', appTree)
Mock.mock(/\/appTemplate\/tree/, 'get', appTemplateTree)
Mock.mock(/\/resourcePools\/tree/, 'get', resourcePoolsTree)
