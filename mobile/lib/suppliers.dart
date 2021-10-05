// ignore: unused_import
class Suppliers {
  late final String supplierName;
  late final String supplierEmail;
  late final String supplierPhone;
  late final String itemName;
  late final String itemPrice;
  late final String itemScale;
  late final String totalItemCount;
  late final String totalSpend;
  late final String supplierRating;
  late final String supplierPassword;

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

  factory Suppliers.fromJsonOne(dynamic json) {
    return Suppliers(
      supplierName: json['userId'] as String,
      supplierEmail: json['id'] as String,
      supplierPhone: json['title'] as String,
      itemName: json['itemName'] as String,
      itemPrice: json['itemPrice'] as String,
      itemScale: json['itemScale'] as String,
      totalItemCount: json['totalItemCount'] as String,
      totalSpend: json['totalSpend'] as String,
      supplierRating: json['supplierRating'] as String,
      supplierPassword: json['supplierPassword'] as String,
    );
  }
}
