// 14_i18n.dart
// 主题：国际化与多语言支持
// 本示例演示 Flutter 的国际化基本用法。

import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      locale: Locale('zh', 'CN'),
      supportedLocales: [
        Locale('en', 'US'),
        Locale('zh', 'CN'),
      ],
      localizationsDelegates: [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      home: Scaffold(
        appBar: AppBar(title: Text('国际化示例')),
        body: Center(child: Text('你好，Flutter!')),
      ),
    );
  }
}
// 更完整的国际化请参考官方文档：https://flutter.dev/docs/development/accessibility-and-localization/internationalization 