@echo off
cd ../server/
call ./gradlew build
cd build/libs
java -jar server-0.0.1-SNAPSHOT.jar