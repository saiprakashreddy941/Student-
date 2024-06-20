package com.nishasoni.studentmngmntsystem.repository;

import com.nishasoni.studentmngmntsystem.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
