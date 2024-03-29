import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

class AuthService {
  Dio dio = new Dio();

  login(sitemanagerEmail,sitemanagerPassword) async {
    try {
      return await dio.post("http://10.0.2.2:5000/sitemanager/sitemanagerlogin",
          data: {
            'sitemanagerEmail': sitemanagerEmail,
            'sitemanagerPassword': sitemanagerPassword
          }, options: Options(contentType: Headers.jsonContentType)
          
          );
    } on DioError catch (e) {
        Fluttertoast.showToast(
          msg: e.response!.data['msg'],
          toastLength: Toast.LENGTH_SHORT,
          gravity: ToastGravity.CENTER,
          timeInSecForIosWeb: 4,
          backgroundColor: Colors.red,
          textColor: Colors.white,
          fontSize: 16.0);
    }
  }
}
