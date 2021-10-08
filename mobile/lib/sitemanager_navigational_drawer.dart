import 'package:flutter/material.dart';
import 'package:mobile/sitemanager_dashboard.dart';
import 'package:mobile/sitemanager_signin.dart';

class SitemanagerNavigationalDrawer extends StatelessWidget {
  const SitemanagerNavigationalDrawer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final paddings = EdgeInsets.symmetric(horizontal: 16);
    Size size = MediaQuery.of(context).size;
    return Drawer(
      child: Material(
        color: Colors.blue.shade50,
        child: ListView(
          padding: paddings,
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 16),
              child: SizedBox(
                height: size.height / 5,
                width: size.width,
                child: Image.asset('images/splash.png'),
              ),
            ),
            SizedBox(
              height: 5,
            ),
            buildMenuItem(
              text: 'Sign Out',
              icon: Icons.logout,
              onClicked: () => selectedItem(context, 0),
            ),
          ],
        ),
      ),
    );
  }

  Widget buildMenuItem({
    required String text,
    required IconData icon,
    VoidCallback? onClicked,
  }) {
    final color = Colors.blue.shade900;
    final hoverColor = Colors.blue;
    return ListTile(
      leading: Icon(icon, color: color),
      title: Text(
        text,
        style: TextStyle(color: color),
      ),
      hoverColor: hoverColor,
      onTap: onClicked,
    );
  }

  void selectedItem(BuildContext context, int index) {
    Navigator.of(context).pop();
    switch (index) {
      case 0:
        Navigator.of(context).push(MaterialPageRoute(
          builder: (context) => SitemanagerSignIn(),
        ));
        break;
    }
  }
}
