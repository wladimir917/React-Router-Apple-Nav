import React from 'react'
import {Route, Link } from 'react-router-dom'
import './App.css';
import NavWrapper from './components/Nav/NavWrapper';
import Content from './components/Content/Content';
import SubNavContainer from './components/Nav/SubNavContainer';



const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Body = () => (
    <div>
      <NavWrapper />
      <div>
        <Route path="/mac/" component={SubNavContainer}/>
      </div>
      <div>
        <Route exact path="/" render={() => <Content content="https://www.apple.com/v/home/dq/images/heroes/iphone-x/iphone_x_largetall.jpg"/>} />
        <Route path="/mac/" render={() => <Content content="https://www.apple.com/v/mac/home/y/images/home/imac_pro_03_medium.jpg"/>} />
        <Route path="/Ipad/" render={() => <Content content="https://www.apple.com/v/ipad/home/ag/images/home/hero_medium.jpg"/>} />
        <Route path="/Watch/" render={() => <Content content="https://www.apple.com/v/watch/home/i/images/hero_medium.jpg"/>} />
        <Route path="/macbook/" render={() => <Content content="https://www.apple.com/v/macbook/g/images/overview/hero_medium.jpg"/>} />
        <Route exact path="/macbook-air/" render={() => <Content content="https://images.apple.com/macbook-air/overview/hero/image_medium.jpg"/>} />
      </div>
    </div>
)
export default Body