import 'package:flutter/material.dart';
import 'package:mobile/sitemanager_create_inventry.dart';
import 'package:mobile/sitemanager_create_order.dart';
import 'package:mobile/sitemanager_dashboard.dart';
import 'package:mobile/sitemanager_inventry_dashboard.dart';
import 'package:mobile/sitemanager_order_dashboard.dart';
import 'package:mobile/sitemanager_signin.dart';
import 'package:mobile/supplier_dashboard.dart';
import 'package:mobile/supplier_signin.dart';

// import 'supplier_signin.dart';

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
      home: SupplierDashboard(),
    );
  }
}
