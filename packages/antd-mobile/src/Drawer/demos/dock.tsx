import React from 'react';
import { Drawer, List, NavBar, Icon } from '@alitajs/antd-mobile';
import './index.less';
class App extends React.Component {
  state = {
    docked: false,
  };
  onDock = (d) => {
    this.setState({
      [d]: !this.state[d],
    });
  };
  render() {
    const sidebar = (
      <List>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
          (i, index) => {
            if (index === 0) {
              return (
                <List.Item
                  key={index}
                  thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                  multipleLine
                >
                  Category
                </List.Item>
              );
            }
            return (
              <List.Item
                key={index}
                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              >
                Category{index}
              </List.Item>
            );
          },
        )}
      </List>
    );

    return (
      <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
        <NavBar
          icon={<Icon type="ellipsis" />}
          onLeftClick={() => this.onDock('docked')}
        >
          Docked in document
        </NavBar>
        <div style={{ position: 'relative' }}>
          <Drawer
            className="my-drawer"
            style={{ minHeight: document.documentElement.clientHeight }}
            contentStyle={{
              color: '#A6A6A6',
              textAlign: 'center',
            }}
            sidebarStyle={{ border: '1px solid #ddd' }}
            sidebar={sidebar}
            docked={this.state.docked}
          >
            Click upper-left corner
          </Drawer>
        </div>
      </div>
    );
  }
}

export default App;
