#!/usr/bin/env zsh
set -o errexit -o nounset -o pipefail

MEDIGY_PUBL_CONTENT_GITLAB=$(echo ${CI_SERVER_URL} | cut -d/ -f3-)
MEDIGY_PUBL_CONTENT_GITLAB_REPO=${MEDIGY_PUBL_CONTENT_GITLAB}/medigy-presentation-content/feeds/healthcare-it-miniflux-rss
   
apt install -y python3-pip autoconf libtool
update-alternatives --install /usr/bin/python python /usr/bin/python3 1
cd support/content-generator
/usr/bin/pip3 --disable-pip-version-check --no-cache-dir install -r requirements.txt
OUTPUT_DIRECTORY="../../content-cicd"
rm -rf ${OUTPUT_DIRECTORY}
make generate MEDIGY_PUBL_ENV=production
git clone https://${GIT_USERNAME}:${GIT_WRITE_ACCESS_TOKEN}@${MEDIGY_PUBL_CONTENT_GITLAB_REPO} /srv
rm -rf /srv/content-cicd
mv ${OUTPUT_DIRECTORY} /srv/
cd /srv
git add .
git -c user.email=medigy-ci-user@dummy.medigy.com -c user.name='medigy-ci-user' commit -m "Update miniflux feed data files" || echo skip-non-zero-error-return
git push -o ci.skip -u origin master 
