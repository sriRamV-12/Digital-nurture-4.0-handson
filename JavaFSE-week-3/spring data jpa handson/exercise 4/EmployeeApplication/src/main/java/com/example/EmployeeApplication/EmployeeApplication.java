package com.example.EmployeeApplication;

import com.example.EmployeeApplication.model.Employee;
import com.example.EmployeeApplication.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeApplication implements CommandLineRunner {

	@Autowired
	private EmployeeService employeeService;

	public static void main(String[] args) {
		SpringApplication.run(EmployeeApplication.class, args);
	}

	@Override
	public void run(String... args) {
		Employee emp = new Employee();
		emp.setName("John Doe");
		emp.setDepartment("IT");
		employeeService.addEmployee(emp);
		System.out.println("Employee added: " + emp.getId());
	}
}
