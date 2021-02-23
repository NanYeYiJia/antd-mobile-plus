/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-02-23 16:04:39
 */
import * as React from "react";
import { withError, useTracker } from "@alitajs/tracker";
import classnames from "classnames";
import { FilterItemProps, FilterItemsProps } from "../../PropsType";
import "./index.less";

const prefixCls = "alita-filter-item";

export const FilterItem: React.FC<FilterItemsProps> = (props) => {
  const { item,openFlag='up',onClick } = props;
  const {
    defalutSelect = 0,
    data = [],
    valueFieldName = "value",
    keyFieldName = "id",
    onItemClick = () => {},
  } = item as FilterItemProps;
  const [status, updateStatus] = React.useState(openFlag);
  const [active, updateActive] = React.useState(defalutSelect);

  React.useEffect(()=>{
    updateStatus(openFlag);

  },[openFlag]);

  const log = useTracker(FilterItem.displayName, {});

  return (
    <div className={`${prefixCls}`}>
      <div
        className={`${prefixCls}-content`}
        onClick={() => {
          if (status === "up") {
            updateStatus("down");
            onClick('down');
          } else {
            updateStatus("up");
            onClick('up');
          }
        }}
      >
        <div className={`${prefixCls}-active-text `}>
          {data[active][valueFieldName]}
        </div>
        <i
          className={classnames({
            [`${prefixCls}-icon-down`]: status === "down",
            [`${prefixCls}-icon-up`]: status === "up",
            [`${prefixCls}-noraml-icon`]: true,
          })}
        ></i>
      </div>
      {status === "down" ? (
        <div className={`${prefixCls}-drawer`}>
          {data.map((item: any, index: number) => {
            return (
              <div
                key={item[keyFieldName]}
                className={classnames({
                  [`${prefixCls}-drawer-item`]: true,
                  [`${prefixCls}-active-item`]: active === index,
                })}
                onClick={() => {
                  log("filter-item-click");
                  updateActive(index);
                  onItemClick(item);
                  updateStatus("up");
                }}
              >
                {item[valueFieldName]}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

FilterItem.displayName = "FilterItem";
export default withError(FilterItem);
