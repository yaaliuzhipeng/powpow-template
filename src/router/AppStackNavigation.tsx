import React, { useMemo } from "react";
import { observer } from "mobx-react";
import { StackNavigation } from '!/powpow/navigation'
import { StackRoutersLogined, StackRoutersUnlogined } from './AppStackRouters';

import AppBottomTabNavigation from './AppBottomTabNavigation';

const AppStackNavigation = observer((props: any) => {

    const onStateChange = (state:any) => {

    }
    return (
        <StackNavigation
            native={false}
            isLogined={true}
            routersLogined={StackRoutersLogined}
            // routersUnlogined={StackRoutersUnlogined}
            bottomTabNavigation={{name: '底部导航',component: AppBottomTabNavigation}}
            onStateChange={onStateChange}
        />
    )
});

export default AppStackNavigation;