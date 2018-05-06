import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
import {logout, getSession, getStorage} from "../../utils/auth";
import msg from '../../utils/msg';
import api from '../../api-interface';
import {withRouter} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {history} from "../../history";
import  './style.css';
const { Header, Content, Footer, Sider } = Layout;
class LayoutComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            defaultSelect:['1'],
        };

    }



    componentDidMount() {
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    handleLogout = () => {
        msg(api.LOAD, "登出中");
        setTimeout(this.handleSafeLogout, 900)

    };
    handleSafeLogout = () => {
        logout();
        this.props.history.replace('/login');
    };

    handleClick = ({ item, key, keyPath }) => {
        console.warn({ item, key, keyPath });
        let arr  = [];
        arr[0] = key;
        this.setState({
            defaultSelect:arr
        })
    };
    render() {

        return (
            <div>
                <Layout className="base-layout">
                    <Sider
                        breakpoint="lg"
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <div className="logo">Merci Blog CMS</div>
                        <Menu theme="dark" mode="inline" selectedKeys={this.state.defaultSelect}>
                            <Menu.Item key="1" onClick={this.handleClick}>
                                <Link to="/user">
                                    <Icon type="user" />
                                    <span className="nav-text">user-info</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2" onClick={this.handleClick}>
                                <Link to="/">
                                </Link>
                                <Icon type="home" />
                                <span className="nav-text">home</span>
                            </Menu.Item>
                            <Menu.Item key="3" onClick={this.handleClick}>
                                <Link to="/about">
                                    <Icon type="book" />
                                    <span className="nav-text">about</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4" onClick={this.handleClick}>
                                <Link to="/">
                                    <Icon type="wifi" />
                                    <span className="nav-text">other</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background:'#fff'}}/>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                {this.props.children}
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            Merci Blog CMS ©2018 Created by Richie Weird
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
};


export default withRouter(LayoutComponent);