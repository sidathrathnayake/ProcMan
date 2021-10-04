// ignore: unused_import
class Order {
  String order_id;
  String item_name;
  String supplier_name;
  String site_name;
  String priority;
  String measuring_unit;
  String required_quantities;
  String note;
  String status;
  String delivery_address;
  String total_amount;
  String damaged;
  String supplier_note;

  Order(
    this.order_id,
    this.item_name,
    this.supplier_name,
    this.site_name,
    this.priority,
    this.required_quantities,
    this.measuring_unit,
    this.note,
    this.status,
    this.delivery_address,
    this.total_amount,
    this.damaged,
    this.supplier_note
  );
}
