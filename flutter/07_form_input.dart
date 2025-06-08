// 07_form_input.dart
// 主题：表单与输入框
// 本示例演示 Flutter 中表单和输入框的用法。

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: FormDemo(),
    );
  }
}

class FormDemo extends StatefulWidget {
  @override
  _FormDemoState createState() => _FormDemoState();
}

class _FormDemoState extends State<FormDemo> {
  final _formKey = GlobalKey<FormState>();
  String _name = '';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('表单与输入框')),
      body: Padding(
        padding: EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: InputDecoration(labelText: '姓名'),
                onSaved: (value) => _name = value ?? '',
                validator: (value) =>
                    value == null || value.isEmpty ? '请输入姓名' : null,
              ),
              SizedBox(height: 16),
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(content: Text('Hello, $_name!')));
                  }
                },
                child: Text('提交'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
