declare module "logger" {
  // 基础变量
  export declare const LOG_LEVELS: object;
  /**
   * uselogger
   */
  export declare function useLogger(name?: string, options?: object): object;

  declare const logger: object;
  /**
   * 默认导出
   */
  export default logger;
}
