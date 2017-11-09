import React, { Component } from 'react';
import { Layout,Menu} from 'antd';
import { slide as SideMenu } from 'react-burger-menu'
import { Link } from 'react-router'
import '../../../styles/smartvoice-header.css';
import logo from '../../../assets/images/smartvoice-logo.png';
import { connect } from 'react-redux';
import * as actions from '../../actions';
const { Header} = Layout;


class SmartVoiceHeader extends Component {
  componentWillMount(){
  	this.state = {
  		isOpen:false
  	}
  }
  handleClick(){
  	console.log('click me');
  }
  handleLogout(e){
    e.preventDefault();
    this.props.integratorLogout();
  }
  render() {
    const authenticated = this.props.authenticated||false;
    console.log('authenticated:',authenticated);
    if (authenticated){
      return (
        <Header className="smartvoice-header">
          <Link to="/"><img className="logo" src={logo}/></Link>
          <Menu
            theme="light"
            mode="horizontal"
            style={{ lineHeight: '96px' }}
            className = "header-nav"
          >
            <Menu.Item key="1"><Link to="/integrator/resource">Resources</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/integrator/updateProfile">Update Porfile</Link></Menu.Item>
            <Menu.Item key="3"><Link to="#" onClick={this.handleLogout.bind(this)}>Logout</Link></Menu.Item>
          </Menu>
          <SideMenu right>
            <a className="menu-item" href="/resource">Resource</a>
            <a className="menu-item" href="/updateProfile">Update Porfile</a>
            <a className="menu-item" href="/logout">Logout</a>
          </SideMenu>
        </Header>
      )
    } else {
      return (
        <Header className="smartvoice-header">
          <Link to="/"><img className="logo" src={logo}/></Link>
          <Menu
            theme="light"
            mode="horizontal"
            style={{ lineHeight: '96px' }}
            className = "header-nav"
          >
            <Menu.Item key="1"><Link to="/getOurBrochure">Get Our Brochure</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/registerInterest">Register Interest</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/approvedIntegrators">Approved Integrators</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/contact">Contact</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/login">Portal Login</Link></Menu.Item>
          </Menu>
          <SideMenu right>
            <a className="menu-item" href="/">Get Our Brochure</a>
            <a className="menu-item" href="/registerInterest">Register Interest</a>
            <a className="menu-item" href="/approvedIntegrators">Approved Integrators</a>
            <a className="menu-item" href="/contact">Contact</a>
            <a className="menu-item" href="/login">Portal Login</a>
          </SideMenu>
        </Header>
      )
    }

  }
};
function mapStateToProps(state){
  console.log('authentication state:',state);
  return {authenticated:state.authentication.authenticated};
}

export default connect(mapStateToProps,actions)(SmartVoiceHeader);