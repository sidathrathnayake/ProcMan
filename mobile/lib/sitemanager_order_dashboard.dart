import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile/sitemanager_inventry_menu_card.dart';
import 'sitemanager_menu.dart';
import 'sitemanager_order_menu_card.dart';
import 'sitemanager_navigational_drawer.dart';

class SiteManagerOrderDashboard extends StatefulWidget {
  const SiteManagerOrderDashboard({Key? key}) : super(key: key);

  @override
  _SiteManagerOrderDashboard createState() => _SiteManagerOrderDashboard();
}

final slideImages = [
  'images/slide1.png',
  'images/slide2.png',
  'images/slide3.png',
  'images/slide4.png',
  'images/slide5.png',
];

var scaffoldKey = GlobalKey<ScaffoldState>();

class _SiteManagerOrderDashboard extends State<SiteManagerOrderDashboard> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
        key: scaffoldKey,
        drawer: SitemanagerNavigationalDrawer(),
        appBar: AppBar(
          elevation: 0,
          title: Text('Dashboard1'),
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
                        itemCount: menuOrderDatas.length,
                        itemBuilder: (context, index) => SitemanagerOrderMenuCard(
                              size: size,
                              itemIndex: index,
                              menudata: menuOrderDatas[index],
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
