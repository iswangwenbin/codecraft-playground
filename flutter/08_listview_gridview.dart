// 08_listview_gridview.dart
// 主题：列表与滚动视图（ListView、GridView 等）
// 本示例演示 Flutter 中 ListView 和 GridView 的用法。

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: ListGridDemo(),
    );
  }
}

class ListGridDemo extends StatelessWidget {
  final items = List.generate(20, (i) => 'Item $i');
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('列表与滚动视图')),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              itemCount: items.length,
              itemBuilder: (context, index) =>
                  ListTile(title: Text(items[index])),
            ),
          ),
          Divider(),
          Expanded(
            child: GridView.count(
              crossAxisCount: 3,
              children: List.generate(
                  9,
                  (i) => Card(
                        color: Colors.amber,
                        child: Center(child: Text('Grid $i')),
                      )),
            ),
          ),
        ],
      ),
    );
  }
}
