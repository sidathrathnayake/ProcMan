// ignore: unused_import
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:http/http.dart' as http;
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile/sitemanager_signin.dart';

import 'package:mobile/supplier.dart';
import 'sitemanager_forgotpassword.dart';

class SitemanagerForgotpassword extends StatefulWidget {
  const SitemanagerForgotpassword({Key? key}) : super(key: key);

  @override
  _SitemanagerForgotpasswordState createState() =>
      _SitemanagerForgotpasswordState();
}

class _SitemanagerForgotpasswordState extends State<SitemanagerForgotpassword> {
  final _formKey = GlobalKey<FormState>();

  Future save() async {
    await http.post("http://localhost:5000/user/userforgotpassword",
        body: <String, String>{
          'userEmail': user.userEmail,
        });
    Navigator.push(context,
        new MaterialPageRoute(builder: (context) => SitemanagerSignIn()));
  }

  User user = User("", "", "", "", "", "", "", "");
  Color textfieldcolor = Colors.blue;
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        centerTitle: true,
        title: Text(
          "Forgot Password",
        ),
      ),
      body: SingleChildScrollView(
        child: Container(
          color: Colors.blue,
          height: size.height,
          child: Column(
            children: [
              Container(
                color: Colors.blue,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.center,
                ),
              ),
              Expanded(
                  child: Container(
                      decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(10),
                              topRight: Radius.circular(10))),
                      child: Form(
                        key: _formKey,
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Padding(
                              padding: const EdgeInsets.all(10.0),
                              child: SizedBox(
                                  height: size.height / 3,
                                  width: size.width,
                                  child:
                                      Image.asset("images/forgotpassword.png")),
                            ),
                            Padding(
                              padding:
                                  const EdgeInsets.fromLTRB(16, 30, 16, 20),
                              child: Text(
                                "We will send you a One Time Password to your email.",
                                textAlign: TextAlign.center,
                                style: GoogleFonts.montserrat(
                                    fontWeight: FontWeight.w500,
                                    fontSize: 14,
                                    color: Colors.blue.shade800),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(16.0),
                              child: TextFormField(
                                controller:
                                    TextEditingController(text: user.userEmail),
                                onChanged: (value) {
                                  user.userEmail = value;
                                },
                                validator: (value) {
                                  if (value!.isEmpty) {
                                    return 'Please enter Email';
                                  } else if (RegExp(
                                          r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
                                      .hasMatch(value)) {
                                    return null;
                                  } else {
                                    return 'Please enter valid email!';
                                  }
                                },
                                style: TextStyle(color: Colors.black),
                                decoration: InputDecoration(
                                  prefixIcon: Image.asset("icons/email.png"),
                                  labelText: "Email",
                                  labelStyle: GoogleFonts.montserrat(
                                      fontWeight: FontWeight.w500,
                                      fontSize: 18,
                                      color: textfieldcolor),
                                  fillColor: Colors.blue.shade50,
                                  filled: true,
                                  focusedBorder: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(30.0),
                                    borderSide: BorderSide(
                                      color: Colors.blue,
                                    ),
                                  ),
                                  errorBorder: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(30.0),
                                    borderSide: BorderSide(
                                      color: Colors.deepOrange,
                                    ),
                                  ),
                                  focusedErrorBorder: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(30.0),
                                    borderSide: BorderSide(
                                      color: Colors.deepOrange,
                                    ),
                                  ),
                                  enabledBorder: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(30.0),
                                    borderSide: BorderSide(
                                      color: Colors.transparent,
                                      width: 2.0,
                                    ),
                                  ),
                                ),
                              ),
                            ),
                            Padding(
                              padding:
                                  const EdgeInsets.fromLTRB(16, 20, 16, 20),
                              child: Container(
                                height: 60,
                                width: 400,
                                child: FlatButton(
                                    color: Colors.blue,
                                    shape: RoundedRectangleBorder(
                                        borderRadius:
                                            BorderRadius.circular(30.0)),
                                    onPressed: () {
                                      if (_formKey.currentState!.validate()) {
                                        save();
                                      } else {
                                        print("no");
                                      }
                                    },
                                    child: Text(
                                      "Get OTP",
                                      style: GoogleFonts.workSans(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 24,
                                          color: Colors.white),
                                    )),
                              ),
                            ),
                          ],
                        ),
                      )))
            ],
          ),
        ),
      ),
    );
  }
}
