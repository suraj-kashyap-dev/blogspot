package com.blogspot.blogspot.services.category;

import com.blogspot.blogspot.entities.Category;
import com.blogspot.blogspot.repositories.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    public List<Category> getAll();
    public Optional<Category> getById(Long id);
    public Category store(Category category);
    public void delete(Long id);
}
