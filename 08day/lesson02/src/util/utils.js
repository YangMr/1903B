var obj = {
    //封装获取本地存储的数据
    getLocalStorageData(key){
        if(!window.localStorage.getItem(key)){
            return null;
        }else{
            return JSON.parse(window.localStorage.getItem(key));
        }
    },
    //设置存储本地的数据
    setLocalStorageData(key,value){
        window.localStorage.setItem(key,JSON.stringify(value));
    }
};

export default obj;
