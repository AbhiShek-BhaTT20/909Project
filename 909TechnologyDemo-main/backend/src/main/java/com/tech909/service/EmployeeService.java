package com.tech909.service;

import java.util.List;

import com.tech909.dto.EmployeeDTO;
import com.tech909.entity.Employee;
import com.tech909.exception.EmployeeException;

public interface EmployeeService {
	 	Integer addEmployee(EmployeeDTO customerDTO) throws EmployeeException;
	    List<EmployeeDTO> getAllEmployees() throws EmployeeException;
	    EmployeeDTO getEmployeeById(Integer id) throws EmployeeException;
	    List<Employee> searchEmployeeRole(String name)throws EmployeeException;
	    String deleteEmployee(Integer id) throws EmployeeException;
		String updateEmployee(EmployeeDTO customerDTO) throws EmployeeException;
	    List<EmployeeDTO> findByAgeAndRole(int minAge,int maxAge,String role); 
}
