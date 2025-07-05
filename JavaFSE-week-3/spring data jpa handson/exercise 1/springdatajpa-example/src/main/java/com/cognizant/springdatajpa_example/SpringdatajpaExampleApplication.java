package com.cognizant.springdatajpa_example;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.springdatajpa_example.model.Country;
import com.cognizant.springdatajpa_example.service.CountryService;


@SpringBootApplication
public class SpringdatajpaExampleApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringdatajpaExampleApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(SpringdatajpaExampleApplication.class, args);
        countryService = context.getBean(CountryService.class);

        testGetAllCountries();
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End");
    }
}
