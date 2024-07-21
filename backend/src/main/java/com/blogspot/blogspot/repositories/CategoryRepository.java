package com.blogspot.blogspot.repositories;

import com.blogspot.blogspot.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
