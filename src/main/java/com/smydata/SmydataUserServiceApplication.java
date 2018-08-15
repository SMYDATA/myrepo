package com.smydata;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class SmydataUserServiceApplication extends SpringBootServletInitializer {

	private static final Logger logger = LoggerFactory.getLogger(SmydataUserServiceApplication.class);
	public static void main(String[] args) {
		logger.info("===>Start of Asterittech Application===>");
		SpringApplication.run(SmydataUserServiceApplication.class, args);
		logger.info("===>End of Asterittech Application===>");
	}
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(SmydataUserServiceApplication.class);
	}
}
