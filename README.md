# THU-MARS-Web

Preview: http://101.6.96.177:9526/

TODO:
- [ ] add SSL certificate
- [ ] show CI/CD on github

## Usage

将修改的内容push到主分支之后，网站会自动加载修改的内容，一分钟之后Preview会更新，github对服务器的访问超时或者服务器对github的访问超时都会导致Preview无法及时更新。


### 文字修改
例如，当需要修改下图中的Multimedia的介绍时，在main.js中找到overview_of_research_directions→content，修改对应的值即可。

> 如果内容中包含引号，需要在引号前添加转义字符 '\'

### 图片修改
例如，当需要修改下图中的Multimedia的图片时，将想要的图片放在images目录下，然后在main.js中找到overview_of_research_directions→image，将对应的值修改为图片的文件名。

![img_1.png](img.png)
