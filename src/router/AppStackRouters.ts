import { StackRouterType } from '!/powpow/navigation';

import Login from '!/src/router/screen/login';

import User from '!/src/router/screen/user';


const StackRoutersUnlogined: StackRouterType[] = [
    { name: '登录', component: Login },
];
const StackRoutersLogined: StackRouterType[] = [
    { name: '用户', component: User },
];

export {
    StackRoutersUnlogined, StackRoutersLogined
}