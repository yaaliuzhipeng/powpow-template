import { useEffect, useState } from "react"
import CodePush from "react-native-code-push"

const useCodePushReady = () => {
    const [isCodePushReady,setCodePushReady] = useState(false);
    useEffect(() => {
        CodePush.getUpdateMetadata(CodePush.UpdateState.RUNNING).then(rs => {
            if (rs?.isFirstRun === true) {
                //running the latest bundle for the first time;
                //take some delay before app get ready
                setTimeout(() => {
                    setCodePushReady(true);
                }, 250);
            } else {
                requestAnimationFrame(() => {setCodePushReady(true);})
            }
        }).catch(e => {
            //get app ready
            requestAnimationFrame(() => {setCodePushReady(true);})
        })
    }, [])
    return isCodePushReady;
}
export default useCodePushReady;