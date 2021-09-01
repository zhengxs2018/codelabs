<template>
  <vdn-designer :schema="schema" :sources="sources">
    <vdn-design-toolbar />
    <vdn-viewport />
  </vdn-designer>
</template>

<script>
export default {
  name: "Demo",
  data() {
    this.sources = [
      {
        title: "基础",
        items: ["input", "button"],
      },
      {
        title: "表单",
        items: ["form", "field"],
      },
      {
        title: "布局",
        items: ["grid"],
      },
    ];

    return {
      schema: [
        {
          type: "form",
          key: "l30h3jf6-ueru-fuel-59hr-l0n4but1m6ql",
          children: [
            {
              label: "用户名",
              placeholder: "请输入",
              type: "field",
              key: "njf4iika-9u90-6ho2-h21e-eek277llbj90",
              children: [],
            },
            {
              label: "密码",
              placeholder: "请输入",
              type: "field",
              key: "6eq06b8b-ifec-micn-k7ff-6r0isgm6crgp",
              children: [],
            },
            {
              columns: [
                {
                  span: 8,
                  children: [
                    {
                      label: "省",
                      type: "field",
                      key: "7he8t3hc-ubgq-m6ms-8ot8-pmkugt3tbid9",
                      children: [],
                    },
                  ],
                  key: "l71c94cl-t5pg-1v4j-8l94-m8t23sa240oe",
                },
                {
                  span: 8,
                  children: [
                    {
                      label: "市",
                      type: "field",
                      key: "7he8t3hc-ubgq-m6ms-8ot8-pmkugt3tb3d2",
                      children: [],
                    },
                  ],
                  key: "hj9k8fdj-o7g9-7f1d-fn1a-kmt8nhrl7dci",
                },
                {
                  span: 8,
                  children: [
                    {
                      label: "区",
                      type: "field",
                      key: "7he8t3hc-ubgq-m6ms-8ot8-pmkugt3tcid2",
                      children: [],
                    },
                  ],
                  key: "duimrokd-9fs7-34s2-01u4-e30mlkoapb1g",
                },
              ],
              type: "grid",
              key: "3c262ggc-i4oj-n90m-4ugn-2hh564o4ptv3",
              children: [],
            },
          ],
        },
      ],
    };
  },
};
</script>
