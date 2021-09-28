// ignore: unused_import

class SupplierMenuData{

  final String dash_title, dash_image, dash_url;

  SupplierMenuData({required this.dash_title, required this.dash_image, required this.dash_url});
}

List<SupplierMenuData> menuDatas = [
  SupplierMenuData(
    dash_title: "Account Balance",
    dash_image: "images/accbal.png",
    dash_url: "AccountBalance()",
  ),
  SupplierMenuData(
    dash_title: "Transfer Services",
    dash_image: "images/montra.png",
    dash_url: "TransferServices()",
  ),
  SupplierMenuData(
    dash_title: "Bill Payments",
    dash_image: "images/billpay.png",
    dash_url: "BillPayments()",
  ),
  SupplierMenuData(
    dash_title: "Cheque Services",
    dash_image: "images/cheser.png",
    dash_url: "ChequeServices()",
  ),
  SupplierMenuData(
    dash_title: "Settings",
    dash_image: "images/settings.png",
    dash_url: "Settings()",
  ),
];
