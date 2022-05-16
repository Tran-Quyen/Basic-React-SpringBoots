package com.springboost.test_react.controller;

import com.springboost.test_react.model.Employee;
import com.springboost.test_react.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import javax.annotation.PostConstruct;

@Controller
public class initDataController
{
	@Autowired
	private EmployeeService employeeService;
	@PostConstruct
	public void initData()
	{
//		employeeService.save(new Employee(1,"John","Wick","john@gmail.com"));
//		employeeService.save(new Employee(2,"Tony","Shark","tony@gmail.com"));
	}
}
