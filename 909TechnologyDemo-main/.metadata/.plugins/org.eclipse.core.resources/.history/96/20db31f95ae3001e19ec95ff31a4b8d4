package com.itsolution.controller;

import java.util.ArrayList;
import java.util.List;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import com.itsolution.dto.EmployeeDTO;
import com.itsolution.entity.Employee;
import com.itsolution.exception.ITSolutionException;
import com.itsolution.service.EmployeeService;

@Controller
@RequestMapping(value="/itSolution")
@Validated
@CrossOrigin
public class ITSolutionController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	private Environment environment;
	
	@GetMapping(value="/getEmployee/{id}")
	public ResponseEntity<EmployeeDTO> getemployeeById(@PathVariable Integer id) throws ITSolutionException{
		EmployeeDTO employeeDTO=employeeService.getEmployeeById(id);
		return new ResponseEntity<EmployeeDTO>(employeeDTO,HttpStatus.OK);
	}
	
	@GetMapping(value="/getAllEmployee")
	public ResponseEntity<List<EmployeeDTO>> getAllemployees() throws ITSolutionException{
		List<EmployeeDTO> employeeDTOs=employeeService.getAllEmployees();
		return new ResponseEntity<List<EmployeeDTO>>(employeeDTOs,HttpStatus.OK);
	}
	
	@PostMapping(value="/addEmployee")
	public ResponseEntity<String> addRole(@Valid @RequestBody EmployeeDTO employeeDTO) throws ITSolutionException{
		Integer id=employeeService.addEmployee(employeeDTO);
		String successMessage=environment.getProperty("EMPLOYEE_ADDED_SUCCESS");
		return new ResponseEntity<String>((successMessage+""+id),HttpStatus.CREATED);
	}
	
	 @GetMapping("/employee/filter")
	    public ResponseEntity<List<EmployeeDTO>> filterPersonsByAgeAndRole(
	    		@RequestParam(required = false, defaultValue = "0") int minAge,
	            @RequestParam(required = false, defaultValue = "100") int maxAge,
	            @RequestParam(required = false) String role)  {
		 System.out.println("Inside api");
		 List<EmployeeDTO> filteredemployees = new ArrayList<>();
		 filteredemployees=employeeService.findByAgeAndRole(minAge, maxAge, role);
		 System.out.println(filteredemployees);
	        return new ResponseEntity<List<EmployeeDTO>>(filteredemployees,HttpStatus.OK); 
	    }
	 @PutMapping(value="/editEmployee/{id}")
	 public ResponseEntity<String> updateemployee(@Valid @RequestBody EmployeeDTO employeeDTO,@PathVariable Integer id) throws ITSolutionException{
		 employeeDTO.setId(id);
		 employeeService.updateEmployee(employeeDTO);
		 String success=environment.getProperty("EMPLOYEE_UPDATED_SUCCESS");
		 return new ResponseEntity<String>(success,HttpStatus.OK);
	 }
	 @DeleteMapping(value="/deleteEmployee/{id}")
	 public ResponseEntity<String> deleteemployee(@PathVariable Integer id) throws ITSolutionException{
		 employeeService.deleteEmployee(id);
		 String success=environment.getProperty("EMPLOYEE_DELETE_SUCCESS");
		 return new ResponseEntity<String>(success,HttpStatus.OK);
	 }


}
