### npm install 出现npm ERR! cb() never called!错误
+ 原因可能是开了代理。。。。。。。。。。
+ 解决方案
    + 首先要以管理员模式打开cmd清除你的npm缓存 : npm cache clean -f
    + 清除完缓存后，安装最新版本的Node helper： npm install -g n
    + 如果上一步报错 npm install -g n --force
    + ok
    + 如果报错可能需要进一步清除npm代理配置，百度

### github中文件夹无法打开
+ 原因在子文件夹中多push了一次
+ 删除子文件夹下的git文件重新同步一次试试？？？
+ 但愿我没有机会验证这个接法