// 10_local_storage.dart
// 主题：本地存储与持久化
// 本示例演示 Flutter 中使用 shared_preferences 进行本地存储。

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: StorageDemo(),
    );
  }
}

class StorageDemo extends StatefulWidget {
  @override
  _StorageDemoState createState() => _StorageDemoState();
}

class _StorageDemoState extends State<StorageDemo> {
  String _value = '';
  Future<void> _save() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setString('key', 'Hello, Storage!');
  }

  Future<void> _load() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      _value = prefs.getString('key') ?? '无数据';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('本地存储')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(_value),
            SizedBox(height: 16),
            ElevatedButton(onPressed: _save, child: Text('保存数据')),
            ElevatedButton(onPressed: _load, child: Text('读取数据')),
          ],
        ),
      ),
    );
  }
}
