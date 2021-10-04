// ignore: unused_import
class Suppliers {
  final String supplierName;
  final String supplierEmail;
  final String supplierPhone;
  final String itemName;
  final String itemPrice;
  final String itemScale;
  final String totalItemCount;
  final String totalSpend;
  final String supplierRating;
  final String supplierPassword;

  Suppliers(
      {required this.supplierName,
      required this.supplierEmail,
      required this.supplierPhone,
      required this.itemName,
      required this.itemPrice,
      required this.itemScale,
      required this.totalItemCount,
      required this.totalSpend,
      required this.supplierRating,
      required this.supplierPassword});

  factory Suppliers.fromJson(Map<String, dynamic> json) {
    return Suppliers(
      supplierName: json['userId'],
      supplierEmail: json['id'],
      supplierPhone: json['title'],
      itemName: json['itemName'],
      itemPrice: json['itemPrice'],
      itemScale: json['itemScale'],
      totalItemCount: json['totalItemCount'],
      totalSpend: json['totalSpend'],
      supplierRating: json['supplierRating'],
      supplierPassword: json['supplierPassword'],
    );
  }
}
