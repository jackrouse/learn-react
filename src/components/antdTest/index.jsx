import React, { useState, useEffect } from 'react'
import { useWhyDidYouUpdate } from 'ahooks';
import { Popover, NavBar, Icon } from 'antd-mobile';
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
export function AntdTest (){

  const [visible,visibleChange] = useState(true)
  useEffect(()=>{
    console.log('visible：',visible)
  }, [visible])

  const [selected,selectedChange] = useState('')
  useEffect(()=>{
    console.log('selected：',selected)
  }, [selected])

  const onSelect = (opt) => {
    // visibleChange(false)
    selectedChange(opt.props.value)
  };

  useWhyDidYouUpdate('useWhyDidYouUpdateComponent', { visible, selected });

  return(
    <div>
      <NavBar
        mode="light"
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={visible}
            overlay={[
              (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
              (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
              (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                <span style={{ marginRight: 5 }}>Help</span>
              </Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={()=>{visibleChange(visible)}}
            onSelect={onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
        }
      >
        NavBar
      </NavBar>
      <div>{selected}</div>
    </div>
  )
}