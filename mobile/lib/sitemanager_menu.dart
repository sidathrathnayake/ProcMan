// ignore: unused_import

class SitemanagerMenuData{

  final String dash_title, dash_image, dash_url;

  SitemanagerMenuData({required this.dash_title, required this.dash_image, required this.dash_url});
}

class SitemanagerInventryMenuData{

  final String dash_title, dash_image, dash_url;

  SitemanagerInventryMenuData({required this.dash_title, required this.dash_image, required this.dash_url});
}

class SitemanagerOrderMenuData{

  final String dash_title, dash_image, dash_url;

  SitemanagerOrderMenuData({required this.dash_title, required this.dash_image, required this.dash_url});
}

List<SitemanagerMenuData> menuDatas = [
  SitemanagerMenuData(
    dash_title: "Inventries",
    dash_image: "images/accbal.png",
    dash_url: "SiteManagerInventryDashboard()",
  ),
  SitemanagerMenuData(
    dash_title: "Order Purchases",
    dash_image: "images/montra.png",
    dash_url: "TransferServices()",
  ),
  SitemanagerMenuData(
    dash_title: "Update Quantity",
    dash_image: "images/billpay.png",
    dash_url: "BillPayments()",
  ),
];
List<SitemanagerInventryMenuData> menuInventryDatas = [
  SitemanagerInventryMenuData(
    dash_title: "View All Inventries",
    dash_image: "images/accbal.png",
    dash_url: "SiteManagerInventryDashboard()",
  ),
  SitemanagerInventryMenuData(
    dash_title: "Add An Inventry",
    dash_image: "images/montra.png",
    dash_url: "TransferServices()",
  ),
];

List<SitemanagerOrderMenuData> menuOrderDatas = [
  SitemanagerOrderMenuData(
    dash_title: "View All Orders",
    dash_image: "images/accbal.png",
    dash_url: "SiteManagerInventryDashboard()",
  ),
  SitemanagerOrderMenuData(
    dash_title: "Make A Purchase",
    dash_image: "images/montra.png",
    dash_url: "TransferServices()",
  ),
  SitemanagerOrderMenuData(
    dash_title: "Ammend A Purchase",
    dash_image: "images/montra.png",
    dash_url: "TransferServices()",
  ),
];
