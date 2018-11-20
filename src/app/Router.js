import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Base from './Base'

// cookie
import HomeCookie from './cookie/Home'
import MessagesCookie from './cookie/Messages'
import TimelineCookie from './cookie/Timeline'
import FriendsCookie from './cookie/Friends'
import UserCookie from './cookie/User'

// coffee
import HomeCoffee from './coffee/Home'
import MessagesCoffee from './coffee/Messages'
import TimelineCoffee from './coffee/Timeline'
import FriendsCoffee from './coffee/Friends'


const Router = () => (
  <Switch>
    <Route exact path='/' component={Base}/>
    <Route exact path='/cookie' component={HomeCookie}/>
    <Route path='/cookie/timeline' component={TimelineCookie}/>
    <Route path='/cookie/friends' component={FriendsCookie}/>
    <Route path='/cookie/messages' component={MessagesCookie}/>
    <Route path='/cookie/users/:id' component={UserCookie}/>

    <Route exact path='/coffee' component={HomeCoffee}/>
    <Route path='/coffee/timeline' component={TimelineCoffee}/>
    <Route path='/coffee/friends' component={FriendsCoffee}/>
    <Route path='/coffee/messages' component={MessagesCoffee}/>
  </Switch>
)
export default Router