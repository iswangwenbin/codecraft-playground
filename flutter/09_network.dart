// 09_network.dart
// 主题：网络请求与数据处理
// 本示例演示 Flutter 中使用 http 包进行网络请求。

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: NetworkDemo(),
    );
  }
}

class NetworkDemo extends StatefulWidget {
  @override
  _NetworkDemoState createState() => _NetworkDemoState();
}

class _NetworkDemoState extends State<NetworkDemo> {
  String _data = '暂无数据';
  Future<void> fetchData() async {
    final response = await http
        .get(Uri.parse('https://jsonplaceholder.typicode.com/todos/1'));
    if (response.statusCode == 200) {
      setState(() {
        _data = json.decode(response.body)['title'];
      });
    } else {
      setState(() {
        _data = '请求失败';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('网络请求')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(_data),
            SizedBox(height: 16),
            ElevatedButton(
              onPressed: fetchData,
              child: Text('获取数据'),
            ),
          ],
        ),
      ),
    );
  }
}
