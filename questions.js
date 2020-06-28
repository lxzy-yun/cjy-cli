module.exports=[
  {
    type: 'checkbox',
    name: 'type',
    message: '请选择项目类型',
    choices: [
      'a.React后台项目',
      'b.大屏幕类型项目',
      'c.Taro小程序项目',
      'd.老系统加新页面',
    ],
    validate: val => {
      let len = val.length
      if (len) {
        if (len > 1) {
          return '只能选择一项'
        }
        return true
      }
      return '至少选择一项';
    }
  },
  {
    type: 'input',
    name: 'name',
    message: '请输入项目名称',
    validate: val => {
      if (val) {
        return true
      }
      return '请输入项目名称';
    }
  }
]
