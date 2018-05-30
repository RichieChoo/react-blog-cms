/**
 * Created by Richie on 2018/4/12
 */
export const getSession = () => JSON.parse(localStorage.getItem('session'));

export const getToken = () => {
    if(!!JSON.parse(localStorage.getItem('session'))){
        return JSON.parse(localStorage.getItem('session')).token;
    }else {
        return false
    }

};

export const isLoggedIn = (test) => {
    if(test){
        return true
    }
    return !!getSession('session')
};
export const saveSession = (session) => {
    localStorage.removeItem('session');
    localStorage.setItem("session",JSON.stringify(session))
};
export const logout = () => {
        localStorage.removeItem('session');
        localStorage.removeItem('menu');
};

export const getStorage =(key) => JSON.parse(localStorage.getItem(key));

export const setStorage  =(key,val) => localStorage.setItem(key,JSON.stringify(val));