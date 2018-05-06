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
    switch (route) {
        case "":
            location.menu = "sub1";
            location.key = '1';
            location.bread = [{route: "/", name: '线上内容管理'}];
            return location;
        case "first-check":
            location.href = "/" + route;
            location.menu = "sub1";
            location.key = '2';
            location.bread = [{route: "/first-check", name: '网络文章初审'}];
            return location;
        case "member":
            location.href = "/" + route;
            location.menu = "sub3";
            location.key = '6';
            location.bread = [{route: "/member", name: '审核成员管理'}];
            return location;
        case "record":
            location.href = "/" + route;
            location.menu = "sub3";
            location.key = '5';
            location.bread = [{route: "/record", name: '审核记录查询'}];
            return location;
        case "repeat-check":
            location.href = "/" + route;
            location.menu = "sub1";
            location.key = "3";
            location.bread = [{route: "/repeat-check", name: '网络文章复审'}];
            return location;
        case "sensitive-words":
            location.href = "/" + route;
            location.menu = "sub2";
            location.key = '4';
            location.bread = [{route: "/sensitive-words", name: '敏感词管理'}];
            return location;
        case "add-article":
            location.href = "/" + route;
            location.menu = "sub1";
            location.key = '1';
            location.bread = [{route: "/", name: '线上内容管理'}, {route: "/add-article", name: '新建文章'}];
            return location;
        case "edit-article":
            location.href = "/" + route;
            location.menu = "sub1";
            location.key = "1";
            location.bread = [{route: "/", name: '线上内容管理'}, {route: "/edit-article", name: '编辑文章'}];
            return location;
        case "check-detail":
            location.href = "/" + route;
            location.menu = "sub1";
            location.key = '2';
            location.bread = [{route: "/first-check", name: '网络文章初审'}, {route: "/check-detail", name: '审核详情页'}];
            return location;
        case "repeat-check-detail":
            location.href = "/" + route;
            location.menu = "sub1";
            location.key = '3';
            location.bread = [{route: "/repeat-check", name: '网络文章复审'}, {route: "/repeat-check-detail", name: '审核详情页'}];
            return location;
        case "record-history":
            location.href = "/" + route;
            location.menu = "sub3";
            location.key = '5';
            location.bread = [{route: "/record", name: '审核记录查询'}, {route: "/record-history", name: '历史记录查看'}];
            return location;
        case "personal-center":
            location.href = "/" + route;
            location.menu = "sub4";
            location.key = '7';
            location.bread = [{route: "/personal-center", name: '个人中心'}];
            return location;
        case "mem-mana":
            location.href = "/" + route;
            location.menu = "sub4";
            location.key = '9';
            location.bread = [{route: "/mem-mana", name: '成员管理'}];
            return location;
        case "char-mana":
            location.href = "/" + route;
            location.menu = "sub4";
            location.key = '8';
            location.bread = [{route: "/char-mana", name: '角色管理'}];
            return location;
        case "record-member-history":
            location.href = "/" + route;
            location.menu = "sub3";
            location.key = '6';
            location.bread = [{route: "/member", name: '审核成员管理'}, {route: "/record-member-history", name: '审核成员历史查询'}];
            return location;
        case "total-condition":
            location.href = "/" + route;
            location.menu = "sub5";
            location.key = '10';
            location.bread = [{route: "/total-condition", name: '总体概览'}];
            return location;
        case "crawler-list":
            location.href = "/" + route;
            location.menu = "sub5";
            location.key = "11";
            location.bread = [{route: "/crawler-list", name: '网络爬虫文章列表'}];
            return location;
        case "crawler-detail":
            location.href = "/" + route;
            location.menu = "sub5";
            location.key = "11";
            location.bread = [{route: "/crawler-list", name: '网络爬虫文章列表'}, {route: "/crawler-detail", name: "文章详情"}];
            return location;
        default:
            return "ERROR"
    }
};