package com.cognizant.springdatajpa_example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.springdatajpa_example.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {
}
