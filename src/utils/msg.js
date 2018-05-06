/**
 * Created by Richie on 09/11/2017
 */
import { message } from 'antd';

export default  (type , msg) => {
    if (arguments[0])
    switch (type){
        case "success" :
            return msg?message.success(msg+"！",1):message.success("操作成功！");
        case "error" :
            return msg?message.error(msg+"！",1):message.error("请检查网络！");
        case "loading":
            return msg?message.loading(msg,1):message.loading("加载中");
        case "warn" :
            return msg?message.warn(msg +"!",1):message.warn("操作失败！");
        default:
            return message.destroy();
    }
}

