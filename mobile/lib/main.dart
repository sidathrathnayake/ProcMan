import 'package:flutter/material.dart';
import 'package:mobile/sitemanager_dashboard.dart';
import 'package:mobile/sitemanager_forgotpassword.dart';
import 'package:mobile/sitemanager_resetpassword.dart';
import 'package:mobile/sitemanager_signin.dart';
import 'package:mobile/sitemanager_verify_forgotpassword.dart';
import 'package:mobile/supplier_dashboard.dart';
import 'package:mobile/supplier_forgotpassword.dart';
import 'package:mobile/supplier_resetpassword.dart';
import 'package:mobile/supplier_verify_forgotpassword.dart';

import 'supplier_signin.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'ProcMan',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: SupplierVerifyFogotpassword(),
    );
  }
}

