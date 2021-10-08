import 'package:flutter/material.dart';
import 'package:mobile/sitemanager_inventry.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile/sitemanager_order.dart';

void main() {
  runApp(MyApp4());
}

class MyApp4 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SitemanagerViewPending(),
    );
  }
}

class SitemanagerViewPending extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _SitemanagerViewPendingState();
  }
}

class _SitemanagerViewPendingState extends State<SitemanagerViewPending> {
  Future<List<Order>> listDataJSON() async {
    final url = Uri.parse(
        "http://localhost:5000/purchase-order/sm-pending-orders/Maga-02");
    final response = await http.get(url);
    if (response.statusCode == 200) {
      List listData = json.decode(response.body);
      return listData.map((listData) => new Order.fromJson(listData)).toList();
    } else {
      throw Exception("Error");
    }
  }

  Color textfieldcolor = Colors.blue;
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        centerTitle: true,
        title: Text(
          "View All Approved Orders",
        ),
      ),
      body: FutureBuilder<List<Order>>(
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
                    return Container(
                      margin:
                          EdgeInsets.symmetric(horizontal: 20, vertical: 15),
                      height: 160,
                      child: Stack(
                        alignment: Alignment.bottomCenter,
                        children: <Widget>[
                          Container(
                            height: 136,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(10),
                              color: Colors.blue,
                              boxShadow: [
                                BoxShadow(
                                    offset: Offset(0, 15),
                                    blurRadius: 27,
                                    color: Colors.black12)
                              ],
                            ),
                            child: Container(
                              margin: EdgeInsets.only(right: 10),
                              decoration: BoxDecoration(
                                  color: Colors.blue.shade50,
                                  borderRadius: BorderRadius.circular(10)),
                            ),
                          ),Positioned(
                            top: 0,
                            right: 0,
                            child: Container(
                              padding: EdgeInsets.symmetric(horizontal: 20),
                              height: 50,
                              width: 200,
                              child: FlatButton(
                                  color: Colors.blue.shade600,
                                  shape: RoundedRectangleBorder(
                                      borderRadius:
                                          BorderRadius.circular(30.0)),
                                  onPressed: () {
                                  
                                  },
                                  child: Text(
                                    "Edit",
                                    style: GoogleFonts.workSans(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 24,
                                        color: Colors.white),
                                  )),
                            ),
                          ),
                          Positioned(
                              bottom: 0,
                              left: 0,
                              child: SizedBox(
                                height: 136,
                                width: size.width - 200,
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: <Widget>[
                                    Spacer(),
                                    Padding(
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 20),
                                      child: Text(
                                        snapshot.data![currentIndex].item_name,
                                        style: GoogleFonts.acme(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 25,
                                            color: Colors.black),
                                      ),
                                      
                                    ),
                                    Spacer(),
                                  ],
                                ),
                              ))
                        ],
                      ),
                    );
                  });
            }
          }),
    );
  }
}
