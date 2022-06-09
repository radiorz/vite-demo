declare module "logger" {
  // 基础变量
  export declare const LOG_LEVELS: object;
  /**
   * uselogger
   */
  export declare function useLogger(name?: string, options?: object): object;
  /**
   * 不使用默认导出了
   */
  export declare const logger: object;
}
