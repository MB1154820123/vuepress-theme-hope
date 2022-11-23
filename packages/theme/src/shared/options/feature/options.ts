import type {
  BlogLocaleConfig,
  BlogLocaleData,
  BlogLocaleOptions,
  PaginationLocaleData,
} from "./blog.js";
import type {
  EncryptConfig,
  EncryptLocaleData,
  EncryptOptions,
} from "./encrypt.js";

export interface FeatureLocaleData {
  /**
   * Blog related i18n config
   *
   * 博客相关多语言配置
   */
  blogLocales: BlogLocaleData;

  /**
   * Pagination related i18n config
   *
   * 分页相关多语言配置
   */
  paginationLocales: PaginationLocaleData;

  /**
   * Encrypt related i18n config
   *
   * 加密相关多语言配置
   */
  encryptLocales: EncryptLocaleData;
}

export interface FeatureLocaleOptions {
  /**
   * Blog feature options
   *
   * 博客功能配置
   */
  blog?: BlogLocaleOptions;
}

export interface FeatureLocaleConfig {
  blog: BlogLocaleConfig;
}

/**
 * @kind root
 */
export interface FeatureOptions {
  /**
   * Add This 的公开 ID
   *
   * Public ID for add this
   */
  addThis?: string;

  /**
   * Encrypt config
   *
   * 加密配置
   */
  encrypt?: EncryptOptions;
}

export interface FeatureConfig {
  /**
   * Blog feature options
   *
   * 博客功能配置
   */
  // for config size consideration, blog options can be held in root and merged in client side
  blog: BlogLocaleConfig;

  /**
   * Encrypt config
   *
   * 加密配置
   */
  encrypt: EncryptConfig;
}
