import host from './host';

let config = {

    //线上文章管理
    getContent:`${host}/online/article/query`,                              //GET                   条件查询文章列表（传空获取全部）
    getContentMap:`${host}/online/article/allDropdown`,                     //GET                   获取Map
    addArticle:`${host}/online/article`,                                    //POST                  新建文章
    addArticleRelease:`${host}/online/article`,                             //POST                  新建文章并发布
    getArticleDetail:`${host}/online/article/`,                             //GET                   文章详情{id}
    editArticle:`${host}/online/article/`,                                  //PUT                   修改文章{id}
    queryContent:`${host}/online/`,                                         //POST                  文章属性、来源等

    multipleModifyChannel:`${host}/online/article/batchModifyChannel`,      //PUT                   批量修改频道
    multipleModifyComment:`${host}/online/article/batchModifyComment`,      //PUT                   批量修改评论
    multipleModifySwitch:`${host}/online/article/batchModifySwitch`,        //PUT                   批量修改开关
    multipleDelete:`${host}/online/article/batchDelete`,                    //DELETE                批量删除文章
    multipleHot:`${host}/online/article/batchModifyAttr?attr=coolShow`,     //DELETE                批量删除文章


    //网络文章初审
    getCheckDetail:`${host}/network/trial/get`,                           //GET                   获取稿件情况
    getCheckArticleList:`${host}/network/trial/list`,                     //POST                  获取文章列表
    getCheckRandomDetail:`${host}/network/trial/detail`,                  //POST                  随机获取一篇文章进入审核
    getCheckIdDetail:`${host}/network/trial/detailArticle`,               //GET                   指定文章进入审核{id}
    checkedAndTurn:`${host}/network/trial/audit`,                         //PUT                   提交并进入下一条

    Sensitive: {
        addSensitiveWords: `${host}/sensitive/batchSave`,                       //POST              添加敏感词
        querySensitiveWords: `${host}/sensitive/query`,                         //POST              查询敏感词列表
        getSelection: `${host}/sensitive/allDropdown`,                          //GET               获取敏感词相关下拉列表
        deleteSensitiveWords: `${host}/sensitive/`,                             //DELETE            删除敏感词
        disableSensitiveWords: `${host}/sensitive/disable/`,                    //POST              禁用敏感词
        batchDelete: `${host}/sensitive/batchDelete`,                           //POST              批量删除
        modifySensitiveWords: `${host}/sensitive/modify`,                       //POST              修改敏感词
        enableSensitiveWords: `${host}/sensitive/enable/`,                      //POST              启用敏感词
        batchEnableSensitiveWords: `${host}/sensitive/batchEnable`,             //POST              批量启用敏感词
        batchDisableSensitiveWords: `${host}/sensitive/batchDisable`,           //POST              批量禁用敏感词
        batchModifySensitiveWords: `${host}/sensitive/batchUpdate`,             //POST              批量更新敏感词
    },

    Record: {
        getRecords: `${host}/network/auditRecord/getRecords?`,                  //POST              获取审核记录
        getHistoryRecord: `${host}/network/auditRecord/getDetailRecord`,        //GET               获取历史记录
        getRecordSurvey: `${host}/network/auditRecord/get`,                     //GET               获取审核概况
        getSelection: `${host}/network/auditRecord/getComboBox`,                //GET               获取审核记录相关下拉列表
        getRecordHistory: `${host}/network/auditRecord/getDetailRecord?`,       //GET               获取审核历史记录
        getCheckMember: `${host}/platform/manage/audit/stat?`,                  //POST              获取审核成员列表
        getMemberDetail: `${host}/platform/manage/audit/record?`,               //POST              获取审核成员审核文章
    },

    PersonalCenter: {
        getUserInfo: `${host}/personal/`,                                       //GET               获取用户基本信息
        getMemberList: `${host}/user/manage/list`,                              //POST              获取成员列表
        addMember: `${host}/user/manage`,                                       //POST              添加成员
        getSelection: `${host}/user/manage/roleDropdown`,                       //GET               获取个人中心下拉列表选项
        getPersonalInfo: `${host}/user/manage/`,                                //GET               获取个人具体信息
        ableMember: `${host}/user/manage/enable?`,                              //POST              启用成员
        disableMember: `${host}/user/manage/disable?`,                          //POST              禁用成员
        modifyMember: `${host}/user/manage/modify`,                             //PUT               修改成员
        getRoleInfo: `${host}/role/manage/query`,                               //POST              获取角色列表
        getRoleTree: `${host}/role/manage/menuTree`,                            //GET               获取权限树
        addRole: `${host}/role/manage/`,                                        //POST              新增角色
        getPersonalRole: `${host}/role/manage/getByCodeExcludeTopMenu?`,        //GET               根据代码获取个人具体岗位
        modifyPerRo: `${host}/role/manage/`,                                    //PUT               修改个人具体岗位
        deleteRole: `${host}/role/manage/`,                                     //DELETE            删除角色
    },

    LogIn: {
        userLogin: `${host}/account/login/byPassword`,                          //POST              用户登录
        getUserMenu: `${host}/menu/role/treeByToken?`,                          //GET               获取用户菜单
    },

    Crawler: {
        getArticleList: `${host}/crawler/article/list`,                         //POST              获取爬虫文章列表
        getTotalCondition: `${host}/crawler/statistic/profile`,                 //POST              获取爬虫统计信息
        getSourceList: `${host}/crawler/statistic/list?`,                       //POST              获取稿件源列表
    },


    //网络文章复审
    getReCheckDetail:`${host}/network/retrial/get`,                               //GET                   获取复审稿件情况
    getReCheckArticleList:`${host}/network/retrial/getAllArticle`,                //POST                  获取复审文章列表
    getReCheckRandomDetail:`${host}/network/retrial/getArticle`,                  //POST                  随机获取一篇文章进入复审
    getReCheckIdDetail:`${host}/network/retrial/getById`,                         //GET                   指定文章进入复审{id}
    reCheckedAndTurn:`${host}/network/retrial/retrial`,                           //PUT                   提交并进入下一条复审

    //退出初审、复审
    outOfCheck:`${host}/lock/delete?articleId=`,                                  //DELETE                退出审核解锁{id}



    //constant msg
    LOAD:"loading",
    ERROR:"error",
    SUCCESS:"success",
    WARN:"warn",


    // fetch mode
    MODE:"cors",

};

module.exports = config;
