package com.tech909.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tech909.dto.EmployeeDTO;
import com.tech909.entity.Employee;
import com.tech909.exception.EmployeeException;
import com.tech909.repository.EmployeeRepository;
import com.tech909.service.EmployeeService;

@Service("employeeService")
@Transactional
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public Integer addEmployee(EmployeeDTO employeeDTO) throws EmployeeException {
		Employee employee=employeeRepository.findByEmail(employeeDTO.getEmail());
		boolean isemployeeEmailNotAvailable=(employee==null);
		if(isemployeeEmailNotAvailable) {
			Employee employee1=new Employee();
			employee1.setAge(employeeDTO.getAge());
			employee1.setEmail(employeeDTO.getEmail());
			employee1.setGender(employeeDTO.getGender());
			employee1.setName(employeeDTO.getName());
			employee1.setPassword(employeeDTO.getPassword());
			employee1.setPhoneNumber(employeeDTO.getPhoneNumber());
			employee1.setRole(employeeDTO.getRole());
			Employee employeeSave=employeeRepository.save(employee1);
			return employeeSave.getId();
		}
		else {
			throw new EmployeeException("EMPLOYEE_EMAIL_ALREADY_IN_DB");
		}
	}

	@Override
	public List<EmployeeDTO> getAllEmployees() throws EmployeeException {
		Iterable<Employee> employees= employeeRepository.findAll();
		List<EmployeeDTO> employees2=new ArrayList<EmployeeDTO>();
		employees.forEach(employee->{
			EmployeeDTO cust=new EmployeeDTO();
			cust.setAge(employee.getAge());
			cust.setEmail(employee.getEmail());
			cust.setGender(employee.getGender());
			cust.setId(employee.getId());
			cust.setName(employee.getName());
			cust.setPhoneNumber(employee.getPhoneNumber());
			cust.setPassword(employee.getPassword());
			cust.setRole(employee.getRole());
			employees2.add(cust);
		});
		if(employees2.isEmpty()){
			throw new EmployeeException("EMPLOYEE_NOT_FOUND");
		}
		return employees2;
	}

	@Override
	public EmployeeDTO getEmployeeById(Integer id) throws EmployeeException {
		Optional<Employee> optional=employeeRepository.findById(id);
		Employee employee=optional.orElseThrow(()-> new EmployeeException("EMPLOYEE_NOT_FOUND"));
		EmployeeDTO cust=new EmployeeDTO();
		cust.setAge(employee.getAge());
		cust.setEmail(employee.getEmail());
		cust.setGender(employee.getGender());
		cust.setId(employee.getId());
		cust.setName(employee.getName());
		cust.setPhoneNumber(employee.getPhoneNumber());
		cust.setPassword(employee.getPassword());
		cust.setRole(employee.getRole());
		return cust;
	}

	@Override
	public List<Employee> searchEmployeeRole(String name) throws EmployeeException {
		List<Employee> employee=employeeRepository.findByName(name);
		return employee;
	}

	@Override
	public String updateEmployee(EmployeeDTO employeeDTO) throws EmployeeException {
		Optional<Employee> optional=employeeRepository.findById(employeeDTO.getId());
		Employee employee=optional.orElseThrow(()-> new EmployeeException("EMPLOYEE_NOT_FOUND"));
		employee.setAge(employeeDTO.getAge());
		employee.setEmail(employeeDTO.getEmail());
		employee.setGender(employeeDTO.getGender());
		employee.setName(employeeDTO.getName());
		employee.setPassword(employeeDTO.getPassword());
		employee.setPhoneNumber(employeeDTO.getPhoneNumber());
		employee.setRole(employeeDTO.getRole());
		return "updateSuccessfully";
	}

	@Override
	public String deleteEmployee(Integer id) throws EmployeeException {
		Optional<Employee> optional=employeeRepository.findById(id);
		Employee employee=optional.orElseThrow(()-> new EmployeeException("EMPLOYEE_NOT_FOUND"));
		employeeRepository.delete(employee);
		return "deleteSuccessfully";
	}

	@Override
	public List<EmployeeDTO> findByAgeAndRole(int minAge, int maxAge, String role) {
		minAge = minAge == 0 ? 0 : minAge;
        maxAge = maxAge == 0 ? 100 : maxAge;
        List<EmployeeDTO> filteredEmployees = new ArrayList<>();
        
        if (role == null || role.isEmpty()) {
            List<Employee> employees = employeeRepository.findByAgeBetween(minAge, maxAge);
            for (Employee employee : employees) {
                EmployeeDTO employeeDTO = prepareDTO(employee);
                filteredEmployees.add(employeeDTO);
            }
        } else {
            List<Employee> employees = employeeRepository.findByAgeAndRole(minAge, maxAge, role);
            for (Employee employee : employees) {
                EmployeeDTO employeeDTO = prepareDTO(employee);
                filteredEmployees.add(employeeDTO);
            }
        }
        
        System.out.println(filteredEmployees);
        return filteredEmployees;
    }
	
	private EmployeeDTO prepareDTO(Employee employee) {
	    EmployeeDTO employeeDTO = new EmployeeDTO();
	    employeeDTO.setAge(employee.getAge());
	    employeeDTO.setRole(employee.getRole());
	    employeeDTO.setName(employee.getName());
	    employeeDTO.setEmail(employee.getEmail());
	    employeeDTO.setPhoneNumber(employee.getPhoneNumber());
	    employeeDTO.setGender(employee.getGender());
	    return employeeDTO;
	}


	}


	
	

