1. modules里面是管理员页面中的页面模板包括头部的中大活动图片，底部的中大活动二维码图片以及一个个活动模块；
2. collection.html是推送页面模板，收集模板；
3. index.html是发布活动的首页；
4. login.html是管理员页面登录页面；
5. manage.html是中大活动的推送页面入口；
6. publish.html是发布活动页面

**修改和增添的部分：**

1. 增加了example.html，通过example.html可以看到静态效果；
2. 其他的静态页面功能还是像上面一样，不过内部有部分进行了修改；
3. collection.html里面增加了部分增加模板的部分（用注释进行了说明）
4. 增加了activityList.html在modules里面用来作为“今日活动”的各个校区的活动列表模块；
5. header.html里面增加了今日活动部分，通过在header.html里面引用activityList.html模板；
6. 增加了school.html模块，内部是各个校区的活动模块，首先是校区，然后是引入各个校区的活动（在activityItem.html里面的模板），然后再是查看更多活动；
7. collection.html汇总所有模块，从最开始的header.html，到school.html再到footer.html；
8. 增加了manage.js以及修改了collection.css；

**功能说明：**

1. 页面右侧悬挂编辑按钮，点击编辑按钮可以对整个页面进行编辑；
2. 在编辑状态下，可以分别对每一个活动进行上下移动以及删除；
3. 确认之后提交到后台；

**注意：**

1.  删除之后如果某一个校区的活动数量为零则需要删除该校区；在编辑过程中可以自己删除
2.  往后移或者往前移动时，如果是最前面的一个或者最后面的一个的情况；在最前面一个和最后面一个不要删除即可
3.  确认的之后直接提交上去；

**后台接口**
1. button确认的提交；