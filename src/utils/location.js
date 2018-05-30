/**
 * Created by Richie on 2018/4/8
 */

function getRoute(url) {
    let route = url.split('/');
    route.shift();
    if (route.length > 1)
        route.pop();
    return route.join("/");

}

export default (url) => {
    let location = {};
    let route = getRoute(url);
    let key;
    let name;
    switch (route) {
        case "":
            key = '1';
            name ='首页';
            break;
        case "user":
            key = '2';
            name ='个人信息';
            break;
        case "about":
            key = '3';
            name ='关于';
            break;
        case "other":
            key = '4';
            name ='其他';
            break;
        default:
            key = '1';
            name ='首页';
            break;

    }
    location.key = key;
    location.bread = [{route:"/"+route,name:name}]
    console.warn(location)
    return location
};