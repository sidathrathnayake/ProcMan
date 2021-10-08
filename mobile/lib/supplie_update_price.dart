import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:dio/dio.dart';
import 'package:mobile/suppliers.dart';

void main() {
  runApp(updatePrice());
}

class updatePrice extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Suppier_update_price(),
    );
  }
}

class Suppier_update_price extends StatefulWidget {
  const Suppier_update_price({Key? key}) : super(key: key);

  @override
  _Suppier_update_priceState createState() => _Suppier_update_priceState();
}

class _Suppier_update_priceState extends State<Suppier_update_price> {
  Dio dio = new Dio();

  Suppliers thisSupplier = new Suppliers(
      supplierName: "",
      supplierEmail: "",
      supplierPhone: "",
      itemName: "",
      itemPrice: "",
      itemScale: "",
      totalItemCount: "",
      totalSpend: "",
      supplierRating: "",
      supplierPassword: "");

  Future fetchSupplier() async {
    print("HelloX");
    final url = "http://localhost:5000/get-supplier/abc@gmail.com";
    final response = await dio.get(url);
    if (response.statusCode == 200) {
      //print(response.data);
      var tagObjsJson = jsonDecode(response.data)['data'];
      print(tagObjsJson);
    } else {
      throw Exception("Error");
    }
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    fetchSupplier();
  }

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
