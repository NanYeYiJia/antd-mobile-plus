import React, { FC, Fragment, useState, useEffect } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import { TableType } from './PropsType';
import './index.less';

const prefixCls = 'alita-table';

const Table: FC<TableType> = (props) => {
  const { dataSource = [], columns = [], twoDimension = false } = props;
  const [trWidth, setTrWidth] = useState<string>('');

  useEffect(() => {
    let width = 0;
    if(Array.isArray(columns)) {
      columns.map((item) => {
        width += item.width || 0;
      });
    }
    setTrWidth(`${width}rem`);
  },[columns]);

  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-tr`} style={{ width: `${trWidth}`}}>
        {
          columns && columns.map((v, index) => {
            if (twoDimension && index === 0 && Array.isArray(v.title)) {
              return (
                <div className={classnames(`${prefixCls}-th`, `${prefixCls}-th-complex`)} key={index} style={{ width: `${v.width}rem` }}>
                  <span className="top">{v.title[0]}</span>
                  <span className="bottom">{v.title[1]}</span>
                </div>
              )
            }
            return <div className={`${prefixCls}-th`} key={index} style={{ width: `${v.width}rem` }}>{v.title}</div>
          })
        }
      </div>
      {
        dataSource && dataSource.map((v, index) => (
          <div className={`${prefixCls}-tr`} key={index} style={{ width: `${trWidth}`}}>
            {
              columns && columns.map((item, tIndex) => (
                <Fragment key={tIndex}>
                  <div
                    className={twoDimension && tIndex === 0 ? `${prefixCls}-th` : `${prefixCls}-td`}
                    style={item.align ?
                    { width: `${item.width}rem`, alignItems: `${item.align}`, justifyContent: `${item.align}` } :
                    { width: `${item.width}rem` }}>{item.render ? item.render(v[item.dataIndex], v, tIndex) : v[item.dataIndex]}</div>
                </Fragment>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

Table.displayName = 'Table';

export default withError(Table);
