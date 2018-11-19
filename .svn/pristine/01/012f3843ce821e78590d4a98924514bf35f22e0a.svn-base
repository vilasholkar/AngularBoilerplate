import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }
  public APIBaseURL = 'http://192.168.100.110:8529/_db/eMall_v1/';
  public imageBaseUrl = 'http://192.168.100.41:8529/_db/eMall_v1/file/';
  public imageConfig = {
    IMG_NOT_FOUND: 'assets/images/no-image-found.jpg',
    DEFAULT_SHOP: 'assets/images/default-shop.png',
    DEFAULT_WIDTH: 250,
    DEFAULT_HEIGHT: 250
  };

  public APIConfig = {
    LOGIN: 'eMall/POS/login',
    LOGOUT: 'eMall/POS/logout',
  };

  public tokenConfig = {
    AUTH_TOKEN: 'AUTHTOKEN',
    USER_INFO: 'USERINFO',
  };

  public errMsgConfig = {
    UNKNOWN_ERROR: 'Some Error Occured.'
  };
}
