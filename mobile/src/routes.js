import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Rewardss from './pages/Rewardss';
import Register from './pages/Register';

const Routes = createAppContainer(
    createSwitchNavigator({
      Login,
      Rewardss,
      Register
    })
  );

export default Routes