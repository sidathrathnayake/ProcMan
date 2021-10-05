// ignore: unused_import

class Inventry {
  final String id;
  final String item_name;
  final String item_description;
  final String site_name;
  final String item_capacity;
  final String available_quantity;
  final String measuring_unit;
  final String unit_price;

  Inventry({
    required this.id,
    required this.item_name,
    required this.item_description,
    required this.site_name,
    required this.item_capacity,
    required this.available_quantity,
    required this.measuring_unit,
    required this.unit_price,
  });

  factory Inventry.fromJson(Map<String, dynamic> json) {
    return Inventry(
      id : json['id'],
      item_name: json['item_name'],
      item_description: json['item_description'],
      site_name: json['site_name'],
      item_capacity: json['item_capacity'],
      available_quantity: json['available_quantity'],
      measuring_unit: json['measuring_unit'],
      unit_price: json['unit_price'],
    );
  }
}
