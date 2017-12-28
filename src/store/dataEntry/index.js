import {observable, action, useStrict} from 'mobx';

useStrict(true)

class store {
    // 保存分类列表
    @observable name = "tom";
    @observable gender = '男';

    @action
    getData() {

    }
}

let dataEntry = new store();
export default dataEntry