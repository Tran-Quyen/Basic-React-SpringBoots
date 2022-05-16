package com.springboost.test_react.service;

import com.springboost.test_react.model.Employee;
import com.springboost.test_react.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface EmployeeService
{
	List<Employee> getAll();

	Employee save(Employee employee);

	Employee save(long id, Employee employee);

	Employee getById(long id);

	Employee deleteById(long id);
}
