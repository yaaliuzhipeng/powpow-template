import MMStorage,{ PreciseType } from "react-native-mmstorage";

class KvsKey {
    public keyName;
    public keyType;
    constructor(name:string,type: PreciseType){
        this.keyName = name;
        this.keyType = type;
    }
}

class Kvs {

    private keys = {
        TAB_PAGE_HEIGHT: new KvsKey('tph','DOUBLE'),
    }
    constructor(){}

    checkKeys(){
        let kns:string[] = [];
        for(let k of Object.keys(this.keys)){
            let kn = this.keys[k].keyName;
            if(kns.indexOf(kn) === -1){
                kns.push(kn)
            }else{
                if(__DEV__) console.error('existed the same keyname : ',kn);
                break;
            }
        }
        if(__DEV__) console.log('MMStorage KVS Keys Checked✅');
    }

    tabPageHeightKV(){
        return ({
            get: async () => {
                return MMStorage.getValue(this.keys.TAB_PAGE_HEIGHT.keyName,this.keys.TAB_PAGE_HEIGHT.keyType)
            },
            set: async (v:number) => {
                return MMStorage.setValue(this.keys.TAB_PAGE_HEIGHT.keyName,v,this.keys.TAB_PAGE_HEIGHT.keyType)
            }
        })
    }
}

const kvs = new Kvs();
export default kvs;



