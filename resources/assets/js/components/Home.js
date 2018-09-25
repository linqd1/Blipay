import React, { Component } from 'react'
import { WingBlank, WhiteSpace, Card, Flex, List } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './Home.css'

const Item = List.Item;

const actionIcons = [{
    icon: 'https://png.icons8.com/ios/80/ffffff/qr-code.png',
    text: '快捷付款',
    link: '/pay'
}, {
    icon: 'https://png.icons8.com/ios/80/ffffff/portrait-mode-scanning.png',
    text: '扫码收款',
    link: '/receive'
}]

export default class Home extends Component {
    render() {
        return (
            <div className="flex-container">
                <div className="page-title">
                    <img alt="altfolio-icon" src="https://png.icons8.com/ultraviolet/80/000000/bitcoin.png" />
                    <h2>Blipay</h2>
                </div>
                <WingBlank size="lg">
                <Card>
                <Card.Header
                    title="Satoshi"
                    thumb="https://png.icons8.com/ultraviolet/80/000000/user.png"
                    extra={<div><p>2N2Ww3E Pc9gC8hP</p><p>ycHn8rxZLj y1eEfsbw5y</p></div>}
                />
                <Card.Body>
                    <div>
                        <span>余额（BCH）</span>
                        <h2>1112.09376662</h2>
                    </div>
                </Card.Body>
                </Card>
                </WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                <Card>
                <Card.Body>
                    <Flex justify="center">
                    <Flex.Item style={{textAlign: 'center'}}><Link to='/pay'>
                        <img src={'https://png.icons8.com/ios/80/ffffff/qr-code.png'} style={{ width: '36px', height: '36px', marginTop: '6px' }} alt="qrcode" />
                        <div style={{ color: '#fff', fontSize: '12px', marginTop: '12px' }}>
                            <span>快捷付款</span>
                        </div>
                        </Link></Flex.Item>
                    <Flex.Item style={{textAlign: 'center'}}><Link to='/receive'>
                        <img src={'https://png.icons8.com/ios/80/ffffff/portrait-mode-scanning.png'} style={{ width: '36px', height: '36px', marginTop: '6px' }} alt="scan" />
                        <div style={{ color: '#fff', fontSize: '12px', marginTop: '12px' }}>
                            <span>扫码收款</span>
                        </div>
                        </Link></Flex.Item>
                    </Flex>
                </Card.Body>
                </Card>
                </WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                <List renderHeader={() => '交易记录'} className="payment-list">
                    <Item><span>12:12</span> 向 吴忌寒 付款 10 BCH</Item>
                    <Item><span>11:55</span> 向 江卓尔 付款 55 BCH</Item>
                    <Item><span>10:36</span> 向 杨海坡 付款 25 BCH</Item>
                </List>
                </WingBlank>
            </div>
        )
    }
}
