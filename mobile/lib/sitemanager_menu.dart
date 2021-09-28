// ignore: unused_import

class SitemanagerMenuData{

  final String dash_title, dash_image, dash_url;

  SitemanagerMenuData({required this.dash_title, required this.dash_image, required this.dash_url});
}

List<SitemanagerMenuData> menuDatas = [
  SitemanagerMenuData(
    dash_title: "Account Balance",
    dash_image: "images/accbal.png",
    dash_url: "AccountBalance()",
  ),
  SitemanagerMenuData(
    dash_title: "Transfer Services",
    dash_image: "images/montra.png",
    dash_url: "TransferServices()",
  ),
  SitemanagerMenuData(
    dash_title: "Bill Payments",
    dash_image: "images/billpay.png",
    dash_url: "BillPayments()",
  ),
  SitemanagerMenuData(
    dash_title: "Cheque Services",
    dash_image: "images/cheser.png",
    dash_url: "ChequeServices()",
  ),
  SitemanagerMenuData(
    dash_title: "Settings",
    dash_image: "images/settings.png",
    dash_url: "Settings()",
  ),
];
