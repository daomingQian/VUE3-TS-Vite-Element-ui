// 统一管理首页模块接口
import request from '@/utils/request.ts';
import { HospitalResponseData, HospitalLevelAndRegionResponseData } from '@/api/home/type.ts';
//通过枚举管理首页模块的接口地址
enum API {
    //获取已有的医院的数据接口地址
    HOSTITAL_URL = '/hosp/hospital/',
    //获取医院的等级和地区接口
    HOSPITALLEVELANDREGION = '/cmn/dict/findByDictCode/'

}

//获取医院的数据
export const reqHostpital = (page: number, limit: number, hostype = '', districtCode = '') =>
request.get <any, HospitalResponseData> (API.HOSTITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`);

//获取医院的等级或者地区的数据
export const reqHostpitalLevelAndRegion = (dictCode: string) =>
request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVELANDREGION + dictCode)