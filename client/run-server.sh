cd ../server/
chmod +x gradlew
./gradlew build
cd build/libs
java -jar server-0.0.1-SNAPSHOT.jar