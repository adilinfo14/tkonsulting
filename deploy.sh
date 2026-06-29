#!/usr/bin/env bash
# deploy.sh — Build + déploiement TKonsulting vers IONOS
set -e

REMOTE_HOST="212.227.54.111"
REMOTE_USER="root"           # ajuster si besoin
REMOTE_DIR="/var/www/tkonsulting"
LOCAL_DIST="./dist"

echo "==> Build Astro..."
npm run build

echo "==> Création du répertoire distant..."
ssh "${REMOTE_USER}@${REMOTE_HOST}" "mkdir -p ${REMOTE_DIR}"

echo "==> Upload dist/ vers IONOS..."
rsync -avz --delete "${LOCAL_DIST}/" "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}/"

echo "==> Rechargement Nginx..."
ssh "${REMOTE_USER}@${REMOTE_HOST}" "nginx -t && systemctl reload nginx"

echo "==> Déploiement terminé ! https://tkonsulting.fr"
