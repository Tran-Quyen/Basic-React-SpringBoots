package com.springboost.test_react.service;

import com.springboost.test_react.exception.ResourceNotFoundException;
import com.springboost.test_react.model.Employee;
import com.springboost.test_react.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService
{
	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public List<Employee> getAll()
	{
		return employeeRepository.findAll();
	}

	@Override
	public Employee save(Employee employee)
	{
		return employeeRepository.save(employee);
	}

	@Override
	public Employee save(long id, Employee employeeEdit)
	{
		Employee employee = getById(id);
		employee.setFirstName(employeeEdit.getFirstName());
		employee.setLastName(employeeEdit.getLastName());
		employee.setEmailId(employeeEdit.getEmailId());

		employeeRepository.save(employee);
		return employee;
	}

	@Override
	public Employee getById(long id)
	{
		return employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));
	}

	@Override
	public Employee deleteById(long id)
	{
		Employee employee = getById(id);
		employeeRepository.delete(employee);
		return employee;
	}
}
