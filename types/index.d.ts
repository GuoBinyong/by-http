import axios, {AxiosPromise} from 'axios'
import  {NamedDoneCountManager,DoneCount,DoneCountManager,DoneCountProps,DoneNamesOrNum,ConflictPolicy,AutoDeleteTarget,AutoDeleteMode,DoneAgainOptions,NamedDoneCount} from 'done-count'
import "es-expand"

/**
 * loadingDoneAgain 和 requestDoneAgain 配置对象 代理 DoneCountManager 属性列表
 */
declare const _doneAgainProxyProps:string[];


type PublicDataGet = (reqOptions:ReqOptions)=>object;

type ReqTransformFun = (reqOptions:ReqOptions)=>ReqOptions;
type ReqTransforms = ReqTransformFun[];

type ResTransformFun = (response:Response,reqOptions:ReqOptions)=>Response;

type ResTransforms = ResTransformFun[];

type MainDataGet = (responseData:ResponseData)=>ResponseData;

type PromptHandle = (info:any,success:boolean)=>void;

interface StartLoadingInfo {
  showCount:number;
  globalShowCount:number;
  doneCount:DoneCount;
  doneCountManager:DoneCountManager;
  http:HttpRequest;
}


interface EndLoadingInfo {
showCount:number;
globalShowCount:number;
doneCount:DoneCount;
doneCountOnFail:DoneCount;
doneCountManager:DoneCountManager;
http:HttpRequest;
}


type StartLoadingHandle = (loadText:string,reqOptions:ReqOptions,loadInfo:StartLoadingInfo)=>number | undefined

type EndLoadingHandle = (succeed:boolean,reqOptions:ReqOptions,resData:ResponseData,loadInfo:EndLoadingInfo)=>number | void

type StartRequestHandle = (reqOptions:ReqOptions,addInfo:RequestHandleAddInfo)=>void;

type EndRequestHandle =  (succeed:boolean,reqOptions:ReqOptions,resData:ResponseData,addInfo:RequestHandleAddInfo)=>void;

type DependResultHandle = (result:ResponseData,reqOptions:ReqOptions)=>  ReqOptions | boolean | null | undefined ;

type Status = number | string;

type ValidateHttpStatus = Status | Array<Status> | ((status: number)=>boolean);
type ValidateDataStatus = (responseData:ResponseData ,reqOptions:ReqOptions) => boolean;

interface HttpConfig {
  baseURL ?: string;    //基URL
method  ?: string;    //默认的请求方式
publicData ?: object | PublicDataGet; //公共的参数 或者是 用来获取公共参数的函数，会对所有请求都追加些参数
reqTransforms ?: ReqTransforms;  //转换请求选项的转换函数数组，用于对reqOptions进行转换，也可以在函数里给数据添加一些公共的参数
resTransforms ?: ResTransforms;  //转换响应的转换函数数组，用于对 response 进行转换；
headers  ?: object;    //默认的请求头对象
responseType ?: string;         //表明服务器返回的数据类型，如：'json','text' 等等
responsetype ?: string;         //同上；表明服务器返回的数据类型，如：'json','text' 等等
mainData  ?: boolean;    //当请求成功时，是否返回经过 mainDataGet 处理过的数据；
mainDataGet  ?: MainDataGet;    //如果 mainData 设置为 true，当请求成功时，会返回被 mainDataGet 处理过的数据；
successPrompt ?: boolean;    //是否启用全局的成功提示；
promptHandle ?: PromptHandle;    //请求成功或者失败的回调函数
failPrompt  ?: boolean;    //是启用用全局的失败提示;
showLoading  ?: boolean;    //是否启用加载状态指示；默认值为 true
loadingDelay  ?: number;    //加载状态指示的延时显示时间，单位：毫秒；默认值：0
loadText  ?: string;   //加载的提示文本
startLoadingHandle ?:StartLoadingHandle; //(loadText:string,reqOptions:ReqOptions,{showCount:number,globalShowCount:number,doneCount:DoneCount,doneCountManager:DoneCountManager,http:HttpRequest})=>showCountIncrStep : number | undefined  开始显示 loading 的回调函数；返回 加载状态指示显示计数 loadingShowCount 的 增加量；
endLoadingHandle  ?: EndLoadingHandle;   //结束显示 loading 的回调函数；返回 加载状态指示显示计数 loadingShowCount 的 减少量；
startRequestHandle ?: StartRequestHandle;     //请求开始的回调函数
endRequestHandle ?:  EndRequestHandle    //请求结束的回调函数；
dependent ?: boolean;   //设置请求是否依赖 dependentPro
dependentPro ?: Promise<any>; //请求的依赖项，当请求有依赖时，请求会 等到 dependentPro 解决之后触发
dependResultHandle ?: DependResultHandle;    //依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；




  validateHttpStatus ?: ValidateHttpStatus ;   //定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
 validateDataStatus ?: ValidateDataStatus;   //定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。


 addInfoInRes ?: boolean;    //可选；默认值：false；是否在响应数据中添加额外的信息； 当值为 true 时，会在失败 或 成功时返回一个数组，数据的中第1个元素就是请求真正的响应数据 或 错误信息，第2个元素是这种格式的对象 : {doneCount:DoneCount,doneCountManager:DoneCountManager,http:HttpRequest}
 doneAgain ?: HttpDoneAgainOptions;    //可选；完成计数的配置对象；如果 loadingDoneAgain 或 requestDoneAgain 未配置，则会采用 doneAgain；
 loadingDoneAgain ?: HttpDoneAgainOptions;   //可选；loading完成计数的配置对象；如果 loadingDoneAgain  未配置，则会采用 doneAgain；
 requestDoneAgain ?: HttpDoneAgainOptions;   //可选；request完成计数的配置对象；如果 requestDoneAgain  未配置，则会采用 doneAgain；


}


interface RequestHandleAddInfo {
  loadText:string;
  showCount:number;
  globalShowCount:number;
  loadingDoneAgain,
  loadingDoneCount:DoneCount;
  loadingDoneCountOnFail:DoneCount;
  loadingDoneCountManager:DoneCountManager;
  requestDoneAgain,
  requestDoneCount:DoneCount;
  requestDoneCountOnFail:DoneCount;
  requestDoneCountManager:DoneCountManager;
  http:HttpRequest
}


interface HttpDoneAgainOptions extends DoneCountProps{
    urlAsDoneCountName:boolean;
    conflictPolicy:ConflictPolicy;
    autoIncrTotalIfRepeat:boolean;
    autoDeleteTarget:AutoDeleteTarget;
    autoDeleteMode:AutoDeleteMode;
    clearDelay:number;
    failDoneAgain: DoneNamesOrNum | HttpDoneAgainOptions;    //可选；当请求失败时附加应用的 完成计数的配置对象，注意：本次请求配置的 完成计数配置对象 也会被应用；

}




interface ReqOptions {

 urlPath ?: string;    //url路径
 method  ?: string;    //请求方式
 data ?: object;    //请求的数据，这些数据将被放入请求体中
 params  ?: object;    //请求的参数，这些参数将会被序列化放入请求的URL后面
 header ?: object;    //请求头对象
 headers  ?: object;    //同 header ，请求头对象
 responseType ?: string ;        //表明服务器返回的数据类型，如：'json','text' 等等
 successPrompt ?: boolean;    //是否启用全局的成功提示；
 failPrompt  ?: boolean;    //是启用用全局的失败提示;
 mainData  ?: boolean;    //当请求成功时，是否返回经过 mainDataGet 处理过的数据；
 showLoading  ?: boolean;    //是否启用加载状态指示；
 loadingDelay  ?: number;    //加载状态指示的延时显示时间，单位：毫秒；默认值：0
 loadText  ?: string;   //加载的提示文本
 dependent ?: boolean;   //设置请求是否依赖 dependentPro
 dependResultHandle ?: DependResultHandle;    //依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
 validateHttpStatus ?: ValidateHttpStatus;    //定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
 validateDataStatus ?: ValidateDataStatus;   //定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。

 addInfoInRes ?: boolean;    //可选；默认值：false；是否在响应数据中添加额外的信息； 当值为 true 时，会在失败 或 成功时返回一个数组，数据的中第1个元素就是请求真正的响应数据 或 错误信息，第2个元素是这种格式的对象 : {doneCount:DoneCount,doneCountManager:DoneCountManager,http:HttpRequest}
 doneAgain ?: HttpDoneAgainOptions;    //可选；完成计数的配置对象；如果 loadingDoneAgain 或 requestDoneAgain 未配置，则会采用 doneAgain；
 loadingDoneAgain ?: HttpDoneAgainOptions;   //可选；loading完成计数的配置对象；如果 loadingDoneAgain  未配置，则会采用 doneAgain；
 requestDoneAgain ?: HttpDoneAgainOptions;   //可选；request完成计数的配置对象；如果 requestDoneAgain  未配置，则会采用 doneAgain；

}





export class HttpRequest {
  /**
   * 创建HTTP请求对象
   * @param httpConfig : Object  HTTP的配置对象，
   *
   * httpConfig 中可配置的字段如下：
   *
   * baseURL : string    基URL
   * method  : string    默认的请求方式
   * publicData : Object | (reqOptions)=>Object  公共的参数 或者是 用来获取公共参数的函数，会对所有请求都追加些参数
   * reqTransforms : [(ReqOptions)=>ReqOptions]  转换请求选项的转换函数数组，用于对reqOptions进行转换，也可以在函数里给数据添加一些公共的参数
   * resTransforms : [(Response,ReqOptions)=>Response]  转换响应的转换函数数组，用于对 response 进行转换；
   * headers  : Object    默认的请求头对象
   * reqOptions.responseType : string         表明服务器返回的数据类型，如：'json','text' 等等
   * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
   * mainDataGet  : (responseData:any)=>mainData:any    如果 mainData 设置为 true，当请求成功时，会返回被 mainDataGet 处理过的数据；
   * successPrompt : boolean    是否启用全局的成功提示；
   * promptHandle : (info:data | error,success:boolean)=>Void    请求成功或者失败的回调函数
   * failPrompt  : boolean    是启用用全局的失败提示;
   * showLoading  : boolean    是否启用加载状态指示；默认值为 true
   * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
   * loadText  : string   加载的提示文本
   * startLoadingHandle : (loadText:string,reqOptions:ReqOptions,{showCount:number,globalShowCount:number,doneCount:DoneCount,doneCountManager:DoneCountManager,http:HttpRequest})=>showCountIncrStep : number | undefined  开始显示 loading 的回调函数；返回 加载状态指示显示计数 loadingShowCount 的 增加量；
   * endLoadingHandle  : (succeed,reqOptions:ReqOptions,resData:ResponseData,{showCount:number,globalShowCount:number,doneCount:DoneCount,doneCountOnFail:DoneCount,doneCountManager:DoneCountManager,http:HttpRequest})=>showCountDecrStep : number | undefined   结束显示 loading 的回调函数；返回 加载状态指示显示计数 loadingShowCount 的 减少量；
   *
   * startRequestHandle : (reqOptions,addInfo:RequestHandleAddInfo)=>Void     请求开始的回调函数
   * endRequestHandle :  (succeed,reqOptions:ReqOptions,resData:ResponseData,addInfo:RequestHandleAddInfo)=>Void    请求结束的回调函数；
   *
   *
   * dependent : boolean   设置请求是否依赖 dependentPro
   * dependentPro : Promise 请求的依赖项，当请求有依赖时，请求会 等到 dependentPro 解决之后触发
   * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
   * 注意：
   * - 当 HandleResult 为 false 时，会取消请求；
   * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
   * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
   * @returns AxiosPromise    请求的 AxiosPromise 对象
   *
   *
   * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   *
   *
   * addInfoInRes ?: boolean    可选；默认值：false；是否在响应数据中添加额外的信息； 当值为 true 时，会在失败 或 成功时返回一个数组，数据的中第1个元素就是请求真正的响应数据 或 错误信息，第2个元素是这种格式的对象 : {doneCount:DoneCount,doneCountManager:DoneCountManager,http:HttpRequest}
   * doneAgain ?: HttpDoneAgainOptions    可选；完成计数的配置对象；如果 loadingDoneAgain 或 requestDoneAgain 未配置，则会采用 doneAgain；
   * loadingDoneAgain ?: HttpDoneAgainOptions   可选；loading完成计数的配置对象；如果 loadingDoneAgain  未配置，则会采用 doneAgain；
   * requestDoneAgain ?: HttpDoneAgainOptions   可选；request完成计数的配置对象；如果 requestDoneAgain  未配置，则会采用 doneAgain；
   *
   * doneAgain.urlAsDoneCountName ?: boolean  可选；默认值：false； 当 DoneCount 选项中没有设置 namesOrNum 、 names 、 doneNum 选项时，是否将 urlPath 的值 作为 names 选项的值；
   *
   *
   *
   *
   * # 类型定义
   *
   * RequestHandleAddInfo = {
        loadText:string,showCount:number,globalShowCount:number,,
        loadingDoneAgain,loadingDoneCount:DoneCount,loadingDoneCountOnFail:DoneCount,loadingDoneCountManager:DoneCountManager,
        requestDoneAgain,requestDoneCount:DoneCount,requestDoneCountOnFail:DoneCount,requestDoneCountManager:DoneCountManager,
        http:HttpRequest}
   *
   *
   *
   * HttpDoneAgainOptions = {
   *    urlAsDoneCountName:boolean,
   *    conflictPolicy:ConflictPolicy,
   *    autoIncrTotalIfRepeat:boolean,
   *    autoDeleteTarget:AutoDeleteTarget
   *    autoDeleteMode:AutoDeleteMode,
   *    clearDelay:number,
   *    failDoneAgain: Names | DoneNum | HttpDoneAgainOptions,    可选；当请求失败时附加应用的 完成计数的配置对象，注意：本次请求配置的 完成计数配置对象 也会被应用；
   *    ...DoneCountProps}
   *
   * ConflictPolicy = "Add" | "Reset" | "Recreate" | "Update"
   * AutoDeleteTarget = "ForcedDone" | "RealDone" | "Done"
   * AutoDeleteMode = "Delay" | "Immediately" | "No"
   */
  constructor(conf:HttpConfig);


  //显示计数：开始

  /**
   * 全局的 加载状态指示的显示计数
   */
  static loadingShowCount:number;


  /**
   * 将 全局的 加载状态指示的显示计数 loadingShowCount 增加 step
   * @param step ? : number 默认值:1; 增加的数量；
   * @returns number 增加后的 显示计数 loadingShowCount 值
   */
  static incrLoadingShowCount(step?:number):number;

  /**
   * 将 全局的 加载状态指示的显示计数 loadingShowCount 减少 step
   * @param step ? : number 默认值:1; 减少的数量；
   * @returns number 减少后的 显示计数 loadingShowCount 值
   */
  static decrLoadingShowCount(step?:number):number



  /**
   * 加载状态指示的显示计数
   */
  loadingShowCount : number;

  /**
   * 将 加载状态指示的显示计数 loadingShowCount 增加 step
   * @param step ? : number 默认值:1; 增加的数量；
   * @returns number 增加后的 显示计数 loadingShowCount 值
   */
  incrLoadingShowCount(step?:number):number;

  /**
   * 将 加载状态指示的显示计数 loadingShowCount 减少 step
   * @param step ? : number 默认值:1; 减少的数量；
   * @returns number 减少后的 显示计数 loadingShowCount 值
   */
  decrLoadingShowCount(step?:number):number;


  //显示计数：结束




  //完成计数：开始



  /**
   * 同时 设置 全局默认的 requestDoneAgain 和 requestDoneAgain 配置
   */
  static doneAgain:DoneAgainOptions;

  /**
   * 同时 设置 默认的 requestDoneAgain 和 requestDoneAgain 配置
   */
  doneAgain:DoneAgainOptions;

  //loading完成计数：开始
  static readonly loadingDoneCountManager:NamedDoneCountManager;

  readonly loadingDoneCountManager:NamedDoneCountManager;


  /**
   *
   * @param httpDoneAgainOpts : HttpDoneAgainOptions
   * @returns {*}
   */
  unsafeDoneAgain_Loading(httpDoneAgainOpts:HttpDoneAgainOptions):NamedDoneCount|Error;


  doneAgain_Loading(httpDoneAgainOpts:HttpDoneAgainOptions):NamedDoneCount;

  /**
   *
   * @param httpDoneAgainOpts : HttpDoneAgainOptions
   * HttpDoneAgainOptions = {...DoneAgainOptions,global:boolean}
   * @returns {*}
   */
  registerDoneCount_Loading(httpDoneAgainOpts:HttpDoneAgainOptions):NamedDoneCount;


  /**
   * 设置 和 获取 全局默认的 loadingDoneAgain 配置
   */
  static loadingDoneAgain:DoneAgainOptions;


  /**
   * 设置 和 获取 默认的 loadingDoneAgain 配置
   */
  loadingDoneAgain:DoneAgainOptions;



  //loading完成计数：结束






  //request完成计数：开始

  static readonly requestDoneCountManager:NamedDoneCountManager;

  readonly requestDoneCountManager:NamedDoneCountManager;




  unsafeDoneAgain_Request(httpDoneAgainOpts:HttpDoneAgainOptions):NamedDoneCount|Error;


  doneAgain_Request(httpDoneAgainOpts:HttpDoneAgainOptions):NamedDoneCount;

  registerDoneCount_Request(httpDoneAgainOpts:HttpDoneAgainOptions):NamedDoneCount;


  /**
   * 设置 和 获取 全局默认的 requestDoneAgain 配置
   */
  static requestDoneAgain:DoneAgainOptions;



  /**
   * 设置 和 获取 默认的 requestDoneAgain 配置
   */
  requestDoneAgain:DoneAgainOptions;





  //request完成计数：结束


  //完成计数：结束










  /**
   * 属性的格式列表
   */
  propFormats :FormatOptions[] | FormatOptions;


  /**
   * 有请求体的请求方式列表
   * @type {string[]}
   */
  haveHttpBodyMethods:string[];


  reqTransforms:ReqTransforms;


  resTransforms:ResTransforms;



  /**
   * 计算属性 validateHttpStatus
   * set : newValue ?: Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   */
  validateHttpStatus:ValidateHttpStatus;


  // dependentPro 请求依赖的 Promise
  dependentPro:Promise<any>;



  /**
   * 请求头的配置对象 headers
   * headers 可配置如下选项：
   * headers.common : Object    配置所有请求公共的请求头字段
   * headers.get : Object    配置 get 请求的请求头字段
   * headers.put : Object    配置 put 请求的请求头字段
   * headers.post : Object    配置 post 请求的请求头字段
   * headers.patch : Object    配置 patch 请求的请求头字段
   * headers.head : Object    配置 head 请求的请求头字段
   * headers.delete : Object    配置 delete 请求的请求头字段
   */
  headers:any;




  /**
   * 设置 headers
   * @param key : string    headers的键
   * @param value : string   值
   * @param methods ? : Method | [Method]   默认值：common，表示对所有的请求方式都有效； key 和 value 被应用到的请求方式的列表；
   */
  setHeaders(key:string, value:string, methods ?:string|string[]):void;


  /**
   * 获取 相应请求方式的 headers
   * @param method ? : Method   默认值：common，表示获取通用的头；
   */
  getHeaders(method?:string):any;

  mainDataGet:MainDataGet;



  baseURL?:string;


  method:string


  authorization:any;


  contentType:string;


  /**
   * 添加公共参数
   * @param reqOptions : ReqOptions
   * @returns ReqOptions
   */
  addPublicData(reqOptions:ReqOptions):ReqOptions;



  /**
   * 合并 完成计数 DoneCount 相关的选项
   * @param reqOptions
   * @private
   */
  protected _mergeDoneAgainOptions(reqOptions:ReqOptions):DoneAgainOptions;


  protected _perfectDoneAgainOptions(doneAgainOpts:DoneAgainOptions,urlPath:string,forLoading?:boolean):DoneAgainOptions;





  /**
   * 发送请求
   * @param reqOptions : Object  请求的选项对象，
   *
   * reqOptions 中可配置的字段如下：
   *
   * urlPath : string    url路径
   * method  : string    请求方式
   * data  : Object    请求的数据，这些数据将被放入请求体中
   * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
   * header | headers  : Object    请求头对象
   * responseType : string         表明服务器返回的数据类型，如：'json','text' 等等
   * successPrompt : boolean    是否启用全局的成功提示；
   * failPrompt  : boolean    是启用用全局的失败提示;
   * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
   * showLoading  : boolean    是否启用加载状态指示；
   * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
   * loadText  : string   加载的提示文本
   * dependent : boolean   设置请求是否依赖 dependentPro
   * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
   * 注意：
   * - 当 HandleResult 为 false 时，会取消请求；
   * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
   * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
   * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   *
   * addInfoInRes ?: boolean    可选；默认值：false；是否在响应数据中添加额外的信息； 当值为 true 时，会在失败 或 成功时返回一个数组，数据的中第1个元素就是请求真正的响应数据 或 错误信息，第2个元素是这种格式的对象 : {doneCount:DoneCount,doneCountManager:DoneCountManager,http:HttpRequest}
   * doneAgain ?: HttpDoneAgainOptions    可选；完成计数的配置对象；如果 loadingDoneAgain 或 requestDoneAgain 未配置，则会采用 doneAgain；
   * loadingDoneAgain ?: HttpDoneAgainOptions   可选；loading完成计数的配置对象；如果 loadingDoneAgain  未配置，则会采用 doneAgain；
   * requestDoneAgain ?: HttpDoneAgainOptions   可选；request完成计数的配置对象；如果 requestDoneAgain  未配置，则会采用 doneAgain；
   *
   * @returns AxiosPromise    请求的 AxiosPromise 对象
   *
   */
  request(reqOptions:ReqOptions):AxiosPromise;

  protected _request(reqOptions:ReqOptions):AxiosPromise


  /**
   * 发送get请求
   * @param options : ReqOptions   get请求的选项对象;
   *
   *
   * options 中可配置的字段如下：
   *
   * urlPath : string    url路径
   * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
   * header | headers  : Object    请求头对象
   * successPrompt : boolean    是否启用全局的成功提示；
   * failPrompt  : boolean    是启用用全局的失败提示;
   * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
   * showLoading  : boolean    是否启用加载状态指示；
   * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
   * loadText  : string   加载的提示文本
   * dependent : boolean   设置请求是否依赖 dependentPro
   * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
   * 注意：
   * - 当 HandleResult 为 false 时，会取消请求；
   * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
   * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
   * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   * @returns AxiosPromise    请求的 AxiosPromise 对象
   *
   */
  get(options:ReqOptions):AxiosPromise;


  /**
   * 发送post请求
   * @param options : ReqOptions
   *
   * options 中可配置的字段如下：
   *
   * urlPath : string    url路径
   * data  : Object    请求的数据，这些数据将被放入请求体中
   * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
   * contentType  : string    请求头的'Content-Type'字段的值
   * header | headers  : Object    请求头对象
   * successPrompt : boolean    是否启用全局的成功提示；
   * failPrompt  : boolean    是启用用全局的失败提示;
   * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
   * showLoading  : boolean    是否启用加载状态指示；
   * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
   * loadText  : string   加载的提示文本
   * dependent : boolean   设置请求是否依赖 dependentPro
   * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
   * 注意：
   * - 当 HandleResult 为 false 时，会取消请求；
   * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
   * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
   * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   *
   * @returns AxiosPromise    请求的 AxiosPromise 对象
   *
   */
  post(options:ReqOptions):AxiosPromise;


  /**
   * 发送 put 请求
   * @param options : ReqOptions
   *
   * options 中可配置的字段如下：
   *
   * urlPath : string    url路径
   * data  : Object    请求的数据，这些数据将被放入请求体中
   * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
   * contentType  : string    请求头的'Content-Type'字段的值
   * header | headers  : Object    请求头对象
   * successPrompt : boolean    是否启用全局的成功提示；
   * failPrompt  : boolean    是启用用全局的失败提示;
   * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
   * showLoading  : boolean    是否启用加载状态指示；
   * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
   * loadText  : string   加载的提示文本
   * dependent : boolean   设置请求是否依赖 dependentPro
   * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
   * 注意：
   * - 当 HandleResult 为 false 时，会取消请求；
   * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
   * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
   * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   *
   * @returns AxiosPromise    请求的 AxiosPromise 对象
   *
   */
  put(options:ReqOptions):AxiosPromise;


  /**
   * 发送 patch 请求
   * @param options : ReqOptions
   *
   * options 中可配置的字段如下：
   *
   * urlPath : string    url路径
   * data  : Object    请求的数据，这些数据将被放入请求体中
   * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
   * contentType  : string    请求头的'Content-Type'字段的值
   * header | headers  : Object    请求头对象
   * successPrompt : boolean    是否启用全局的成功提示；
   * failPrompt  : boolean    是启用用全局的失败提示;
   * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
   * showLoading  : boolean    是否启用加载状态指示；
   * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
   * loadText  : string   加载的提示文本
   * dependent : boolean   设置请求是否依赖 dependentPro
   * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
   * 注意：
   * - 当 HandleResult 为 false 时，会取消请求；
   * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
   * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
   * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   *
   * @returns AxiosPromise    请求的 AxiosPromise 对象
   *
   */
  patch(options:ReqOptions):AxiosPromise;


  /**
   * 发送 delete 请求
   * @param options : ReqOptions   get请求的选项对象;
   *
   *
   * options 中可配置的字段如下：
   *
   * urlPath : string    url路径
   * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
   * header | headers  : Object    请求头对象
   * successPrompt : boolean    是否启用全局的成功提示；
   * failPrompt  : boolean    是启用用全局的失败提示;
   * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
   * showLoading  : boolean    是否启用加载状态指示；
   * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
   * loadText  : string   加载的提示文本
   * dependent : boolean   设置请求是否依赖 dependentPro
   * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
   * 注意：
   * - 当 HandleResult 为 false 时，会取消请求；
   * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
   * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
   * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   * @returns AxiosPromise    请求的 AxiosPromise 对象
   *
   */
  delete(options:ReqOptions):AxiosPromise;


  /**
   * 发送 head 请求
   * @param options : ReqOptions   get请求的选项对象;
   *
   *
   * options 中可配置的字段如下：
   *
   * urlPath : string    url路径
   * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
   * header | headers  : Object    请求头对象
   * successPrompt : boolean    是否启用全局的成功提示；
   * failPrompt  : boolean    是启用用全局的失败提示;
   * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
   * showLoading  : boolean    是否启用加载状态指示；
   * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
   * loadText  : string   加载的提示文本
   * dependent : boolean   设置请求是否依赖 dependentPro
   * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
   * 注意：
   * - 当 HandleResult 为 false 时，会取消请求；
   * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
   * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
   * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   * @returns AxiosPromise    请求的 AxiosPromise 对象
   *
   */
  head(options:ReqOptions):AxiosPromise;


  /**
   * 发送 options 请求
   * @param options : ReqOptions   get请求的选项对象;
   *
   *
   * options 中可配置的字段如下：
   *
   * urlPath : string    url路径
   * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
   * header | headers  : Object    请求头对象
   * successPrompt : boolean    是否启用全局的成功提示；
   * failPrompt  : boolean    是启用用全局的失败提示;
   * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
   * showLoading  : boolean    是否启用加载状态指示；
   * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
   * loadText  : string   加载的提示文本
   * dependent : boolean   设置请求是否依赖 dependentPro
   * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
   * 注意：
   * - 当 HandleResult 为 false 时，会取消请求；
   * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
   * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
   * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
   * @returns AxiosPromise    请求的 AxiosPromise 对象
   *
   */
  options(options:ReqOptions):AxiosPromise;


}


export default HttpRequest;
