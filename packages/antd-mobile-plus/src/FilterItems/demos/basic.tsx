/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-03-23 10:11:23
 */
import * as React from "react";
import { setTracker } from "@alitajs/tracker";
import { FilterItems } from "@alitajs/antd-mobile-plus";

export default () => {
  // 这个方法应该统一添加
  setTracker({
    log(component, params, ext) {
      console.log(component); // 组件名
      console.log(params.version); // antd-mobile 版本号
      console.log(params.reactVersion); // react 版本号
      console.log(params.type); // 内置类型，分为 RENDERED(渲染), CUSTOM(组件自定义的上报)
      // 可选，组件额外的参数，比如 Button 会额外传 params.c1={type: props.type}
      console.log(params);
      // 可选，当 params.type===CUSTOM 的时候，组件可能会传的对应的数据
      // 比如 Button 点击的时候会传 ext='OnPress1'
      console.log(ext);
    },
  });

  const data = [
    {
      data: [
        { id: "1", value: "排序不限1" },
        { id: "2", value: "任务来源2" },
        { id: "3", value: "全部3" },
      ],
      filterId: "f_1",
      defaluText: "地区",
    },
    {
      data: [
        { id: "21", value: "全部2" },
        { id: "22", value: "任务来源2" },
        { id: "23", value: "全部" },
        { id: "24", value: "排序-不限2" },
      ],
      filterId: "f_2",
      defaluText:'商区'
    },
    {
      data: [
        { id: "31", value: "这个名字很长这个名字很长3" },
        { id: "32", value: "任务来源3" },
        { id: "33", value: "全部3" },
      ],
      filterId: "f_3",
    },
  ];

  return (
    <div style={{ padding: "24px 0" }}>
      <FilterItems
        data={data}
        // drawItemRender={(child)=>{
        //   return <div>11</div>
        // }}
        onItemChange={(data: any) => {
          console.log(data);
        }}
        alias={{ label: "value" }}
      />
    </div>
  );
};
