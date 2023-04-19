set -e

pnpm run build

cd ./build
BUILD_DATE=$(date +"%Y%m%d%H%M")

# create .nojekyll
touch .nojekyll

if [ -z "$GITHUB_TOKEN" ]; then
    # from node
    msg="depoly"
    GIT_URI="git@github.com:tassis/tassis.github.io.git"
else
    # from github action
    GIT_URI="https://tassis:$GITHUB_TOKEN@github.com/tassis/tassis.github.io.git"
    msg="depoly by github workflow"
    git config --global user.name "Saweima"
    git config --global user.email "saweima12@gmail.com"
fi

git init
git add -Af
git commit -m "${msg}"
git push -f $GIT_URI master

echo "FINISH"