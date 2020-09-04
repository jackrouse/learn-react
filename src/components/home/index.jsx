import React, { useState } from 'react'
import { connect } from 'react-redux'
import './index.scss'
import { store } from '@/reducers'
import {SelectOption,SelectWrap} from './components/select'
import {TimeLine} from './components/timeLine'
import {CheckOutlined} from '@ant-design/icons'
import {Footer} from './components/footer'
import { Button,Modal } from 'antd-mobile'
function Home(props) {
  const a = store.getState()
  console.log(a)
  const [selectedValue,selectChange] = useState(2)
  const [modal,modelChange] = useState(false)
  const handSelectChange = (e)=>{
    if(e){
      selectChange(e.value)
    }else{
      selectChange('')
    }
  }

  const handleClick = (e)=>{
    console.log(e)
  }
  return (
    <div className="home-wrap">
      <div className="banner" onClick={props.onClick}>
        {/* 123123
        div
        {a.count.count}
        {props.countState.count} */}
        <div className="banner__content">
          <div className="banner__tip">中国人保</div>
          <div className="banner__title">眼镜险{props.countState.count}</div>
          <div className="banner__desc">眼镜有保障，镜片破碎没风险</div>
        </div>

      </div>

      <div className="card__wrap card-top">
        <div className="card-top__col">
          <div className="card-top__title">破碎免费换新</div>
          <div className="card-top__desc">原厂参考价1350元</div>
        </div>
        <div className="card-top__line"></div>
        <div className="card-top__col">
          <div className="card-top__title blue">按月缴费</div>
          <div className="card-top__desc">每月13.25元起</div>
        </div>
      </div>

        
      <div className="card__wrap">
        <div className="card__title">保障详情</div> 
        <div className="card__row">
          <div className="card__label">破碎免费换新</div>
          <div className="card__value is-right">1次</div>
        </div>
        <div className="card__footer">
          请阅读<span className="blue">《投保须知》《保险条款》《服务协议》《付款授权》</span>
        </div>
      </div>

      <div className="card__wrap">
        <div className="card__title">投保信息</div> 
        <div className="card__row full-right-border">
          <div className="card__label">保障手机</div>
          <div className="card__value">本机</div>
        </div>

        <div className="card__row is-column">
          <div className="card__label">屏幕类型</div>
          <div className="card__value">
            <SelectWrap className="card__select-wrap" selectedValue={selectedValue} onChange={handSelectChange}>
              <SelectOption label="name" value={1} className="card__select-item">
                <span className="card__select-name">严选屏幕</span>
                <span className="card__select-desc">市场参考价1485元</span>
                <CheckOutlined className="card__select-icon"/>
              </SelectOption>
              <SelectOption label="阿哥" value={2} className="card__select-item">
                <span className="card__select-name">原厂屏幕</span>
                <span className="card__select-desc">市场参考价1350元</span>
                <CheckOutlined className="card__select-icon"/>
              </SelectOption>
              <SelectOption label="顶顶顶顶" value={3} className="card__select-item">
                顶顶顶顶
                <CheckOutlined className="card__select-icon"/>
              </SelectOption>
            </SelectWrap>
          </div>
        </div>

        <div className="card__row is-column">
          <div className="card__label">屏幕类型</div>
          <div className="card__value">
            <SelectWrap className="card__select-wrap" selectedValue={selectedValue} onChange={handSelectChange}>
              <SelectOption label="name" value={1} className="card__select-item">
                <span className="card__select-name">严选屏幕</span>
                <span className="card__select-desc">市场参考价1485元</span>
                <CheckOutlined className="card__select-icon"/>
              </SelectOption>
              <SelectOption label="阿哥" value={2} className="card__select-item">
                <span className="card__select-name">原厂屏幕</span>
                <span className="card__select-desc">市场参考价1350元</span>
                <CheckOutlined className="card__select-icon"/>
              </SelectOption>
              <SelectOption label="顶顶顶顶" value={3} className="card__select-item">
                顶顶顶顶
                <CheckOutlined className="card__select-icon"/>
              </SelectOption>
            </SelectWrap>
          </div>
        </div>

        <div className="card__row full-right-border">
          <div className="card__label">保障手机</div>
          <div className="card__value">本机</div>
        </div>

        <div className="card__row full-right-border">
          <div className="card__label">保障手机</div>
          <div className="card__value">本机</div>
        </div>

        <div className="card__row full-right-border">
          <div className="card__label">保障手机</div>
          <div className="card__value">本机</div>
        </div>
            
      </div>

      <div className="card__wrap img-detail__wrap">
        <img className="img-detail" src={require('./images/details.jpg')} alt=""/>
      </div>


      <div className="card__wrap">
        <div className="card__title">到期自动续保<span className="card__title-tag">推荐开通</span></div>
        <div className="card__row no-border">
          <SelectWrap className="card__select-wrap" selectedValue={selectedValue} onChange={handSelectChange}>
            <SelectOption label="name" value={1} className="card__select-item">
              <span className="card__select-name">免费开通</span>
              <CheckOutlined className="card__select-icon"/>
            </SelectOption>
            <SelectOption label="阿哥" value={2} className="card__select-item">
              <span className="card__select-name">暂不开通</span>
              <CheckOutlined className="card__select-icon"/>
            </SelectOption>
          </SelectWrap>
        </div>

        <div className="card__row is-column">
          <div className="card__label width-auto">开通后享有以下特权</div>
          <div className="card__value privileges__wrap">
            <div className="privileges__item">保障到期不中断！续保价格跟优惠！</div>
            <div className="privileges__item">保障到期不中断！续保价格跟优惠！</div>
            <div className="privileges__item">保障到期不中断！续保价格跟优惠！</div>
            <div className="privileges__item">保障到期不中断！续保价格跟优惠！</div>
            <div className="privileges__item">保障到期不中断！续保价格跟优惠！</div>
            <div className="privileges__item">续费时按 <span className="blue">《自动续保服务及费率表》</span>自动扣款。</div>
            <div className="privileges__item">阅读并同意<span className="blue">《付款授权》</span>。</div>
          </div>
        </div>
      </div>


      <div className="card__wrap compensation__wrap">
        <div className="card__title">理赔说明</div>
        <div className="card__row">
          <TimeLine></TimeLine>
        </div>
      </div>


        <Button type="primary" inline loading onClick={()=>modelChange(true)}>small</Button>
        <Modal  
          visible={modal}
          transparent
          maskClosable={false}
          onClose={()=>modelChange(false)}
          title="Title"
          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); modelChange(false); } }]}
          // wrapProps={{ onTouchStart: this.onWrapTouchStart }}
          afterClose={() => { alert('afterClose'); }}>
            的撒旦法发撒而非阿瑟发烧发萨尔冯绍峰seafood阿瑟发阿瑟发阿瑟发阿瑟发而是分色分阿瑟发涩费萨尔肤色暗发烧分萨尔粉色
        </Modal>
        <Footer></Footer>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    countState: state.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({
        type: 'increment'
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)