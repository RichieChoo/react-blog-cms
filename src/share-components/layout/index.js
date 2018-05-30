import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu, Icon,Breadcrumb,Switch} from 'antd';
import getLocation from '../../utils/location';
import {logout, getSession, getStorage} from "../../utils/auth";
import msg from '../../utils/msg';
import api from '../../api';
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

    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }
    render() {
        const local = getLocation(history.location.pathname);
        const selectKey = [];
        selectKey[0] = local.key;
        const trigger = (
            <Icon
                ref="test"
                className="trigger"
                style={{padding:20,cursor:"pointer"}}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
            />
        )
        return (
            <div>
                <Layout className="base-layout">
                    <Sider
                        breakpoint="md"
                        trigger={null}
                        collapsible
                        collapsedWidth="80"
                        onCollapse = {this.toggle}
                        collapsed={this.state.collapsed}
                    >
                        <h3 style={{color:"#fff",textAlign:"center",margin:'50px auto'}}><Link to="/">{this.state.collapsed?"Fairy":"React Blog CMS"}</Link></h3>
                        {/*<div className="logo">*/}
                            {/*<img src={avatar} alt="头像"/>*/}
                        {/*</div>*/}
                        <br/>
                        <br/>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={selectKey}>
                            <Menu.Item key="1">
                                <Link to="/">
                                    <Icon type="home" />
                                    <span className="nav-text">home</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/user">
                                    <Icon type="user" />
                                    <span className="nav-text">user-info</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/about">
                                    <Icon type="book" />
                                    <span className="nav-text">about</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/other">
                                    <Icon type="wifi" />
                                    <span className="nav-text">other</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            {trigger}

                            {/*<Switch*/}
                                {/*checked={this.state.theme === 'dark'}*/}
                                {/*onChange={this.changeTheme}*/}
                                {/*checkedChildren="Dark"*/}
                                {/*unCheckedChildren="Light"*/}
                            {/*/>*/}
                        </Header>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <Breadcrumb style={{margin: '16px 0'}} separator=">">
                                {
                                    !!local.bread ? local.bread.map((item, index) => (
                                        <Breadcrumb.Item key={index}>
                                            <Link to={item.route}>{item.name}</Link>
                                        </Breadcrumb.Item>)
                                    ) : (
                                        <Breadcrumb.Item>请重新登录</Breadcrumb.Item>
                                    )
                                }
                            </Breadcrumb>

                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                {this.props.children}
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            Merci Blog CMS ©2018 Created by Richie
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
};


export default withRouter(LayoutComponent);