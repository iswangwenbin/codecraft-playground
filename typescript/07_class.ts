// 07_class.ts
// 主题：类（class）与面向对象编程
// 本示例演示 TypeScript 中类的定义、继承和访问修饰符。

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak();
