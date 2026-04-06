# Simple Blog

这是一个使用原生 HTML/CSS/JS 实现的简单博客示例。

## 本地预览

```bash
cd simple-blog
python3 -m http.server 8000
```

打开浏览器访问：`http://localhost:8000`

## 自动部署（GitHub Pages）

仓库已添加 GitHub Actions 工作流：`.github/workflows/deploy-simple-blog.yml`。

### 开启方式

1. 进入 GitHub 仓库页面。
2. 打开 **Settings → Pages**。
3. 在 **Build and deployment** 中选择 **Source: GitHub Actions**。
4. 推送代码到 `master` 分支（修改 `simple-blog` 目录）或手动触发该工作流。

部署成功后，页面地址通常为：

`https://<你的 GitHub 用户名>.github.io/<仓库名>/`

> 注意：该项目是纯静态站点，发布内容就是 `simple-blog` 目录下的文件。
