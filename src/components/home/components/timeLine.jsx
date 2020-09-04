import React from "react"

import './timeLine.scss'
export function TimeLine (props){
  return (
    <div className="timeline__wrap">
      <div className="timeline__item">
        <div className="timeline__left">
          <span className="timeline__num">1</span>
        </div>
        <div className="timeline__right">
          <div className="timeline__title">第一步：申请理赔</div>
          <div className="timeline__desc">拨打众安保险电话客服<span className="blue">1010-9955</span>申请理赔。</div>
        </div>
      </div>

      <div className="timeline__item">
        <div className="timeline__left">
          <span className="timeline__num">2</span>
        </div>
        <div className="timeline__right">
          <div className="timeline__title">第二步：选择维修方式</div>
          <div className="timeline__desc">
            <div>你可以自主选择邮寄给保险公司维修或者到指定的实体店维修。</div>
            <div>注：后续会开通免费上门维修，敬请期待。</div>
          </div>
        </div>
      </div>

      <div className="timeline__item">
        <div className="timeline__left">
          <span className="timeline__num">3</span>
        </div>
        <div className="timeline__right">
          <div className="timeline__title">第三步：完成维修</div>
          <div className="timeline__desc">保险公司会在1天内完成维修。</div>
        </div>
      </div>
    </div>
  )
}