@echo off
echo Starting npm install... > setup_log.txt
call npm install >> setup_log.txt 2>&1
echo npm install finished with code %errorlevel% >> setup_log.txt

echo Starting prisma generate... >> setup_log.txt
call npx --yes prisma generate >> setup_log.txt 2>&1
echo prisma generate finished with code %errorlevel% >> setup_log.txt

echo Starting prisma db push... >> setup_log.txt
call npx --yes prisma db push >> setup_log.txt 2>&1
echo prisma db push finished with code %errorlevel% >> setup_log.txt

echo Starting setupAdmin... >> setup_log.txt
call npx --yes tsx scripts/setupAdmin.ts >> setup_log.txt 2>&1
echo setupAdmin finished with code %errorlevel% >> setup_log.txt

echo All setup steps completed! >> setup_log.txt
