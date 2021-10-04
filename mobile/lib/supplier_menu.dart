// ignore: unused_import

class SupplierMenuData{

  final String dash_title, dash_image, dash_url;

  SupplierMenuData({required this.dash_title, required this.dash_image, required this.dash_url});
}

List<SupplierMenuData> menuDatas = [
  SupplierMenuData(
    dash_title: "New Orders",
    dash_image: "images/sup1.png",
    dash_url: "AccountBalance()",
  ),
  SupplierMenuData(
    dash_title: "Delivery History",
    dash_image: "images/sup2.png",
    dash_url: "TransferServices()",
  ),
  SupplierMenuData(
    dash_title: "Profile",
    dash_image: "images/sup3.png",
    dash_url: "BillPayments()",
  ),
];
