# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
sh build.sh

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git config user.name haoyulong
git config user.email 875720242@qq.com
now=$(date +%Y-%m-%d)
git add .
git commit -m'update '${now}

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:haoyulong1112/haoyulong1112.github.io.git

cd -
# https://haoyulong1112.github.io
git add .
git commit -m'update '${now}
git push
