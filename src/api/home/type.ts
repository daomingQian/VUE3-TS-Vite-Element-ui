//定义首页模块ts数据类型
export interface ResponseData {
    code: number,
    message: string,
    ok: boolean
}

//代表已有医院数据ts类型
export interface Hospital {
    "id": string,
    "createTime": string,
    "updateTime": string,
    "isDaleted": number
    "param": {
        "hostypeString": string,
        "fullAddress": string,
    },
    "hoscode": string,
    "hosname": string,
    "hostype": string,
}
//存储全部已有医院的数据类型
export type Content = Hospital[];
//代表已有医院接口返回的数据ts类型
export interface HospitalResponseData extends ResponseData {
    data: {
        content: Content
        "pageable": {
            "sort": {
                "sorted": boolean,
                "unsorted": boolean,
                "empty": boolean
            }
        }
    }
}


//代表医院等级或者地区数据ts类型
export interface HospitalLevelAndRegion {
    "id": number,
    "createTime": string,
    "updateTime": string,
    "isDaleted": number
    "param": {},
    "parentId": number,
    "name": string,
    "value": string,
    "dictCode": string,
    "hasChildren": boolean
}
export type HospitalLevelAndRegionArr = HospitalLevelAndRegion[];
//获取等级和医院地区接口返回数据类型
export interface HospitalLevelAndRegionResponseData extends ResponseData {
    data: HospitalLevelAndRegionArr
}