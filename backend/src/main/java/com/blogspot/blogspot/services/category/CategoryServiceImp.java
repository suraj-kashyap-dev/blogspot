package com.blogspot.blogspot.services.category;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blogspot.blogspot.entities.Category;
import com.blogspot.blogspot.repositories.CategoryRepository;

@Service
public class CategoryServiceImp implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> getAll() {
        return this.categoryRepository.findAll();
    }

    @Override
    public Optional<Category> getById(Long id) {
        return this.categoryRepository.findById(id);
    }

    @Override
    public Category store(Category category) {
        return this.categoryRepository.save(category);
    }

    @Override
    public void delete(Long id) {
        this.categoryRepository.deleteById(id);
    }
}
