import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'sitemanager.dart';

class SitemanagerVerifyFogotpassword extends StatefulWidget {
  const SitemanagerVerifyFogotpassword({ Key? key }) : super(key: key);

  @override
  _SitemanagerVerifyFogotpasswordState createState() => _SitemanagerVerifyFogotpasswordState();
}


User user = User("", "", "", "","", "", "", "");
  Color textfieldcolor = Colors.blue;

class _SitemanagerVerifyFogotpasswordState extends State<SitemanagerVerifyFogotpassword> {
  final _formKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return Scaffold(
      appBar: AppBar(
      elevation: 0,
      centerTitle: true,
      title: Text("Verification",
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
                                  child: Image.asset("images/verifyemail.png")),
                            ),
                            Padding(
                              padding: const EdgeInsets.fromLTRB(16, 30, 16, 20),
                      
                                    child: Text(
                                      "You will get a OTP via email.",
                                      textAlign: TextAlign.center,
                                      style: GoogleFonts.montserrat(
                                          fontWeight: FontWeight.w500,
                                          fontSize: 14,
                                          color: Colors.blue.shade800
                                          ),
                                          
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
                              padding: const EdgeInsets.fromLTRB(16, 20, 16, 20),
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
                                        print("yes");
                                      } else {
                                        print("no");
                                      }
                                    },
                                    child: Text(
                                      "Verify",
                                      style: GoogleFonts.workSans(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 24,
                                          color: Colors.white),
                                    )),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.only(left: 270),
                              child: Row(
                                children: [
                                  InkWell(
                                    onTap: () {
                                      // Navigator.push(
                                      //     context,
                                      //     new MaterialPageRoute(
                                      //         builder: (context) => Signup()));
                                    },
                                    child: Text(
                                      "Resend again ?",
                                      style: GoogleFonts.montserrat(
                                          fontWeight: FontWeight.w700,
                                          fontSize: 14,
                                          color: Colors.blue.shade800),
                                    ),
                                  )
                                ],
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