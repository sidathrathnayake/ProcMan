// ignore: unused_import
class Order {
  final String order_id;
  final String item_name;
  final String supplier_name;
  final String site_name;
  final String priority;
  final String measuring_unit;
  final String required_quantities;
  final String note;
  final String status;
  final String delivery_address;
  final String total_amount;
  final String damaged;
  final String supplier_note;

  Order(
      {required this.order_id,
      required this.item_name,
      required this.supplier_name,
      required this.site_name,
      required this.priority,
      required this.required_quantities,
      required this.measuring_unit,
      required this.note,
      required this.status,
      required this.delivery_address,
      required this.total_amount,
      required this.damaged,
      required this.supplier_note});

  factory Order.fromJson(Map<String, dynamic> json) {
    return Order(
      order_id: json['order_id'],
      item_name: json['item_name'],
      supplier_name: json['supplier_name'],
      site_name: json['site_name'],
      priority: json['priority'],
      required_quantities: json['required_quantities'],
      measuring_unit: json['measuring_unit'],
      note: json['note'],
      status: json['status'],
      delivery_address: json['delivery_address'],
      total_amount: json['total_amount'],
      damaged: json['damaged'],
      supplier_note: json['supplier_note'],
    );
  }
}
