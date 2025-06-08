// 13_platform_channel.dart
// 主题：Flutter 与原生平台交互（Platform Channels）
// 本示例演示如何通过 MethodChannel 与原生通信。

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  static const platform = MethodChannel('com.example.channel');
  String _nativeMsg = '尚未获取';

  Future<void> _getNativeMessage(BuildContext context) async {
    String result;
    try {
      result = await platform.invokeMethod('getNativeMessage');
    } on PlatformException catch (e) {
      result = '调用失败: \\${e.message}';
    }
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(result)));
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Platform Channel')),
        body: Center(
          child: ElevatedButton(
            onPressed: () => _getNativeMessage(context),
            child: Text('获取原生消息'),
          ),
        ),
      ),
    );
  }
}
// 注意：需在原生端实现 getNativeMessage 方法，具体请查阅官方文档。 