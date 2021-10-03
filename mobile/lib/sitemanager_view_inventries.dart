//abc// ignore: unused_import

import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

import 'package:http/http.dart' as http;
import 'package:mobile/sitemanager_inventry.dart';

import 'package:mobile/sitemanager_order.dart';
import 'package:mobile/sitemanager_order_dashboard.dart';

// class SitemanagerViewInventries extends StatefulWidget {
//   const SitemanagerViewInventries({Key? key}) : super(key: key);

//   @override
//   _SitemanagerViewInventriesState createState() =>
//       _SitemanagerViewInventriesState();
// }

void main() {
  runApp(MyApp1());
}

class MyApp1 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SitemanagerViewInventries(),
    );
  }
}

class SitemanagerViewInventries extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _SitemanagerViewInventriesState();
  }
}


class _SitemanagerViewInventriesState extends State<SitemanagerViewInventries> {
  Future<List<Inventry>> listDataJSON() async {
    final url = "http://localhost:5000/inventory/get-all-inventories/Maga-02";
    final response = await http.get(url);
    if (response.statusCode == 200) {
      List listData = json.decode(response.body);
      return listData
          .map((listData) => new Inventry.fromJson(listData))
          .toList();
    } else {
      throw Exception("Error");
    }
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Fetch Data/Json'),
      ),
      body: FutureBuilder<List<Inventry>>(
          future: listDataJSON(),
          builder: (context, snapshot) {
            if (snapshot.data == null) {
              return Center(
                child: CircularProgressIndicator(),
              );
            } else {
              return new ListView.builder(
                  itemCount: snapshot.data!.length,
                  padding: EdgeInsets.all(10),
                  itemBuilder: (BuildContext context, int currentIndex) {
                    return Column(
                      children: [
                        Row(
                          children: [
                            Container(
                              margin: EdgeInsets.only(left: 10.0),
                              width: 280.0,
                              child: Text(
                                snapshot.data![currentIndex].item_name,
                                style: TextStyle(
                                  fontSize: 20.0,
                                ),
                                overflow: TextOverflow.ellipsis,
                              ),
                            ),
                            Container(
                              margin: EdgeInsets.only(left: 10.0),
                              width: 280.0,
                              child: Text(
                                snapshot.data![currentIndex].site_name,
                                style: TextStyle(
                                  fontSize: 20.0,
                                ),
                                overflow: TextOverflow.ellipsis,
                              ),
                            ),
                          ],
                        ),
                        Divider(),
                      ],
                    );
                  });
            }
          }),
    );
  }
}

