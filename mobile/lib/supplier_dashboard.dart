import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:google_fonts/google_fonts.dart';

import 'supplier_menu.dart';
import 'supplier_menu_card.dart';
import 'supplier_navigational_drawer.dart';

class SupplierDashboard extends StatefulWidget {
  const SupplierDashboard({Key? key}) : super(key: key);

  @override
  _SupplierDashboardState createState() => _SupplierDashboardState();
}

final slideImages = [
  'images/slide6.png',
  'images/slide7.png',
  'images/slide8.png',
  'images/slide9.png',
  'images/slide10.png',
];

var scaffoldKey = GlobalKey<ScaffoldState>();

class _SupplierDashboardState extends State<SupplierDashboard> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
        key: scaffoldKey,
        drawer: SupplierNavigationalDrawer(),
        appBar: AppBar(
          elevation: 0,
          title: Text('Dashboard'),
          centerTitle: true,
          leading: IconButton(
            icon: Image.asset("icons/pagetop.png"),
            onPressed: () {
              scaffoldKey.currentState!.openDrawer();
            },
          ),
        ),
        body: Container(
            height: size.height,
            child: Column(
              children: [
                Container(
                  color: Colors.blue,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.center,
                  ),
                ),
                Center(
                    child: CarouselSlider.builder(
                        itemCount: slideImages.length,
                        itemBuilder: (context, index, realIndex) {
                          final slideImage = slideImages[index];
                          return buildImage(slideImage, index);
                        },
                        options: CarouselOptions(
                          autoPlay: true,
                          viewportFraction: 1,
                          autoPlayInterval: Duration(seconds: 3),
                          height: size.height / 4,
                        ))),
                Expanded(
                  child: Stack(children: <Widget>[
                    Container(
                      decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.only(
                            topLeft: Radius.circular(10),
                            topRight: Radius.circular(10),
                          )),
                    ),
                    SizedBox(),
                    ListView.builder(
                        itemCount: menuDatas.length,
                        itemBuilder: (context, index) => SupplierMenuCard(
                              size: size,
                              itemIndex: index,
                              menudata: menuDatas[index],
                            ))
                  ]),
                )
              ],
            )));
  }

  buildImage(String slideImage, int index) => Container(
        margin: EdgeInsets.symmetric(horizontal: 5, vertical: 5),
        width: double.infinity,
        decoration: BoxDecoration(borderRadius: BorderRadius.circular(16)),
        child: Image.asset(
          slideImage,
          fit: BoxFit.cover,
        ),
      );
}
