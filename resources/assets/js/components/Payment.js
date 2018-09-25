import React, { Component } from 'react'
import { WingBlank, WhiteSpace, Card, Modal } from 'antd-mobile'
import axios from 'axios'
import {Howl, Howler} from 'howler'
import './Home.css'
import qrcode from './qrcode.png'

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
        };

        this.showModal = this.showModal.bind(this)
        this.onClose = this.onClose.bind(this)
        this.listenSignal = this.listenSignal.bind(this)
        this.onWrapTouchStart = this.onWrapTouchStart.bind(this)
      }
      showModal() {
        const sound = new Howl({
            src: ['success.mp3']
          });
        // Play the sound.
        sound.play();
        this.setState({
          modal: true,
        });
      }
      onClose() {
        this.setState({
          modal: false,
        });
      }
      onWrapTouchStart(e) {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
          e.preventDefault();
        }
      }
    listenSignal() {
        axios.get('/api/address/123').then(function(response) {
            console.log(response)
            if (response.data.status === true) {
                this.showModal();
            }
        }.bind(this))
    }
    componentDidMount() {
        this.interval = setInterval(this.listenSignal, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
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
                    <div className="payment">
                        <div className="address">2N2Ww3E Pc9gC8h PycHn8rx ZLjy1eE fsbw5y</div>
                        <img src={qrcode} alt="qrcode" />
                    </div>
                </Card.Body>
                </Card>
                </WingBlank>
                <WhiteSpace size="lg" />
                <p className="info">请将二维码展示给商家进行付款</p>
                <Modal
                    visible={this.state.modal}
                    transparent
                    maskClosable={false}
                    onClose={this.onClose}
                    title="付款成功"
                    footer={[{ text: 'Ok', onPress: () => this.onClose() }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    >
                    <div style={{ height: 100, overflow: 'scroll' }}>
                    已向商家支付 10 BCH
                </div>
                </Modal>
            </div>
        )
    }
}
