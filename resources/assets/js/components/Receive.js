import React, { Component } from 'react'
import { WingBlank, WhiteSpace, Card, List, InputItem, Button } from 'antd-mobile'

export default class Receive extends Component {
    handleOnClick() {
        wx.scanQRCode({
            needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
                var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
            }
        });
    }
    render() {
        return (
            <div className="flex-container">
                <div className="page-title">
                    <img alt="altfolio-icon" src="https://png.icons8.com/ultraviolet/80/000000/bitcoin.png" />
                    <h2>Blipay</h2>
                </div>
                <WingBlank size="lg">
                <Card>
                <Card.Body>
                <List renderHeader={() => '请输入收款金额'}>
                <InputItem
                    placeholder="10.00"
                    extra="BCH"
                ></InputItem>
                </List>
                </Card.Body>
                </Card>
                </WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                    <Button onClick={() => this.handleOnClick()} className="gradient">扫码收款</Button>
                </WingBlank>
            </div>
        )
    }
}
