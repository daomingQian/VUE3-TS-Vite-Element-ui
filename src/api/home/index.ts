// 统一管理首页模块接口
import request from '@/utils/request.ts';

//通过枚举管理首页模块的接口地址
enum API {
    //获取已有的医院的数据接口地址
    HOSTITAL_URL = '/hosp/hospital/'
}

//获取医院的数据
export const reqHostpital = (page: number, limit: number) => request.get(API.HOSTITAL_URL + `${page}/${limit}`);