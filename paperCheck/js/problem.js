var problems = {
  "填空题": [
    {
      "id": "f1",
      "problem": "UML 的中文全称是：",
      "answer": "统一建模语言",
      "value": 1
    },
    {
      "id": "f2",
      "problem": "对象最突出的特征是：",
      "answer": "封装性、继承性、多态性",
      "value": 1
    },
  ],
  "选择题": [
    {
      "id": "c1",
      "problem": "UML 与软件工程的关系是：",
      "choice": ["（A）UML 就是软件工程",
        "（B）UML 参与到软件工程中软件开发过程的几个阶段",
        "（C）UML 与软件工程无关",
        "（D）UML 是软件工程的一部分"],
      "answer": [1],
      "value": 2
    },
    {
      "id": "c2",
      "problem": "Java 语言支持：",
      "choice": ["（A）单继承",
        "（B）多继承",
        "（C）单继承和多继承都支持",
        "（D）单继承和多继承都不支持"]
      , "answer": [0],
      "value": 2
    }],
  "多选题": [{
    "id": "mc1",
    "problem": "用例的粒度分为以下哪三种。",
    "choice": ["（A）概述级",
      "（B）需求级",
      "（C）用户目标级",
      "（D）子功能级"],
    "answer": [0, 1, 3],
    "value": 2
  },
    {
      "id": "mc2",
      "problem": "类图由以下哪三部分组成。",
      "choice": ["（A）名称(Name)",
        "（B）属性(Attribute)",
        "（C）操作(Operation)",
        "（D）方法（Function）"],
      "answer": [0, 1, 2],
      "value": 2
    }],
  "判断题": [
    {
      "id": "tf1",
      "problem": "用例图只是用于和客户交流和沟通的，用于确定需求。",
      "answer": [],//false=[]
      "value": 2
    },
    {
      "id": "tf2",
      "problem": "在状态图中，终止状态在一个状态图中允许有任意多个。",
      "answer": [0],//true=[0]
      "value": 2
    }
  ],
  "简答题": [{
    "id": "q1",
    "problem": "简述什么是模型以及模型的表现形式?",
    "answer": "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。",
    "value": 5
  }
  ]
};
