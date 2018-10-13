FROM gradle:4.8.1-jdk8 as compile
WORKDIR /usr/app/src/

COPY . .

USER root
RUN chown -R gradle /usr/app/src
USER gradle
RUN gradle clean
RUN ./gradlew build
RUN ls -Rl
FROM openjdk:8-jre
WORKDIR /usr/app/app/
COPY --from=compile "/usr/app/src/build/libs/Dashboard-0.0.1-SNAPSHOT.jar" .
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "/usr/app/app/Dashboard-0.0.1-SNAPSHOT.jar"]
