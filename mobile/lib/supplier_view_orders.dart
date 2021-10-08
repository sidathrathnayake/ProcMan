import 'package:flutter/widgets.dart';
import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'package:mobile/suppliers.dart';

class Supplier_view_orders extends StatefulWidget {
  const Supplier_view_orders({Key? key}) : super(key: key);

  @override
  _Supplier_view_ordersState createState() => _Supplier_view_ordersState();
}

class _Supplier_view_ordersState extends State<Supplier_view_orders> {
  Color textfieldcolor = Colors.blue;
  Dio dio = new Dio();

  // Future<List<Suppliers>> listDataJSON() async {
  //   final url = "http://localhost:5000/inventory/get-all-inventories/Maga-02";

  //   final response = await dio.get(url);

  //   if (response.statusCode == 200) {
  //     List listData = json.decode(response.body);

  //     return listData
  //         .map((listData) => new Inventry.fromJson(listData))
  //         .toList();
  //   } else {
  //     throw Exception("Error");
  //   }
  // }

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        centerTitle: true,
        title: Text(
          "Supply Orders",
        ),
      ),
      body: SingleChildScrollView(
        child: Container(),
      ),
    );
  }
}
