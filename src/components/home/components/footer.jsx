import React from 'react'
import {CustomerServiceOutlined} from '@ant-design/icons'
import './footer.scss'
export const Footer = ()=>{
  return (
    <>
      <div className="footer__wrap footer__holder fix-center">
        <div className="footer__tip">已享用首月0元购买特权，价值13.25元</div>
        <div className="footer__main">
          <div className="footer__service">
            <CustomerServiceOutlined className="footer__service-icon"/>
            <div className="footer__service-name">客服</div>
          </div>
          <div className="footer__price">
            <div className="footer__price-name">0.00<span className="is-small">元（首月）</span></div>
            <div className="footer__price-desc">次月起每月13.25元</div>
          </div>
          <div className="footer__submit">
            我要投保
          </div>
        </div>
      </div>
      <div className="footer__holder"></div>
    </>
  )
}