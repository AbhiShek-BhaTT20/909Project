package com.tech909.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.tech909.dto.EmployeeDTO;
import com.tech909.entity.Employee;
import com.tech909.exception.EmployeeException;

public interface EmployeeRepository extends CrudRepository<Employee,Integer> {

	List<Employee> findByName(String name);
	 Employee findByEmail(String email) throws EmployeeException;
	 List<Employee> findByAgeBetween(int minAge, int maxAge);
	 @Query(value = "SELECT * FROM employee WHERE age BETWEEN :minAge AND :maxAge AND (:role IS NULL OR role = :role)", nativeQuery = true)
	    List<Employee> findByAgeAndRole(@Param("minAge") int minAge, @Param("maxAge") int maxAge, @Param("role") String role);
	 

}
