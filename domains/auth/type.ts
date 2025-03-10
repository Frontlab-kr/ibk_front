import type { UserOutVo } from '~/api-client';

export interface LoginForm {
  userId: string;
  userPwd: string;
}

export interface UserInfo extends UserOutVo{

}
