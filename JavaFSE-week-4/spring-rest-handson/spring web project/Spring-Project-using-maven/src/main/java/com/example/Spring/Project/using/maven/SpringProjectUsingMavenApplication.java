package com.example.Spring.Project.using.maven;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringProjectUsingMavenApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(SpringProjectUsingMavenApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SpringProjectUsingMavenApplication.class, args);
		LOGGER.info("Inside main method of SpringLearnApplication");
	}
}
