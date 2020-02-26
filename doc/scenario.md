## Introduction
这个项目的主要目的有三个: 一是用于实践typescript, 二是实践SVG绘图, 三是做一个App用于跟踪自己的花销——因为最近生活费比较拮据

## Demand analysis & UI design
根据自己的需求，也就是用户需求，版本1必须包括的功能有:
1. 记录当天花销，一天可以有多条记录。在记录的时候可以选择花销大类，比如食物，生活用品，每个用不同颜色表示。当然也要能写备注。简单来说就是实现对记录的增删改。然后根据大类显示饼图(消费占比图), 显示总支出。
2. 可以根据时间范围显示消费占比图，用折线图根据时间范围显示支出变化图。

设计第一版的UI: 一进来界面就显示当天花销, 可以导航到周支出折线图。可以点按钮，在弹出的modal里新增花销记录。

我用drawio做了一个大概的UI: ![在视频里上图]()

下面开始编码

## Coding

### Run the template project

首先要能让APP跑起来，我用的是expo-cli，两个命令: 
1. expo init CostTracker --template expo-template-bare-typescript
2. cd CostTracker & expo start --web

打开浏览器，选择用web浏览器运行项目, 可以看到运行成功了，现在就可以在上面进行改动了

### Finish the first component

先从第一个页面开始做:

因为我打算用redux，所以简单介绍下，首先，怎么用redux是取决于开发者的，官方并没有给出最好的实践方案，但是我打算使用基于container & component的代码组织方案, 因为这样目录结构看起来比较舒服, 而且渲染和逻辑分离，代码会非常清晰。

因为渲染组件是不知道redux的存在的，所以可以暂时不引入redux，先把第一component写好并且用模拟数据展示出来。

分析整体UI结构, 大概生成这样的代码结构:

```
-Button(周支出折线图)
+View
 -View(左边的饼图)
 -View(右边的支出信息)
+View(今日支出列表)
 -Item 1
 -Item 2
 -...
-Button(新增按钮, 绝对定位)
```

分析输入, 可以发现唯一的输入是今日支出列表，因为其他的饼图显示以及总金额，都是可以运算得出的。
因此将今日支出列表命名为todayCostItems.

开始编码。完成了第一个component，可是没有提供todayCostItems以至于报错了, 我不打算在这里提供mock数据，因为component&container模式导致一个功能分为了两个部分 ,这样的报错可以提醒自己container还没有完成.

所以现在要开始TodayCostAnalysisContainer.tsx的编码。因为在contianer部分就需要对接redux，现在先用mock数据让代码能够正确运行，随后再引入redux.

在编码container的时候，我发现如果不提供todayCostItems，vs会报错，这真是十分惊喜。

总之先完成了首页的伪渲染，开始决定下一个开发目标。

整理一下现在的TODO:

- [ ] 1. Introduce redux into the code.
- [ ] 2. Introduce react native navigation.
- [ ] 3. Complete next component of the weekly cost analysis using line chart.
- [ ] 4. Complete modal of creating cost item.
- [ ] 5. Figue out how to store data in react native or can I use sqlite to store data?
- [ ] 6. Try to refactor the code of adding type description.

我会先解决第四个任务，但是这个是要依赖数据存储的，也就是依赖第五点，所以我会花一点时间去search第五点.

## Finish the second component of creating new item
