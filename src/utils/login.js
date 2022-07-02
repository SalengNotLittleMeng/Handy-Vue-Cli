import config from "../config/config";
/**判断用户是否登录
 * @returns {string}
 */
export function isAuthenticated() {
  return !localStorage.getItem(config.tokenName) == "";
}
