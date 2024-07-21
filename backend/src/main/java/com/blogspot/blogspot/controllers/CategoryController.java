package com.blogspot.blogspot.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blogspot.blogspot.entities.Category;
import com.blogspot.blogspot.services.category.CategoryServiceImp;


@RestController
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private CategoryServiceImp categoryServiceImp;

    @GetMapping
    public List<Category> index() {
        return this.categoryServiceImp.getAll();
    }

    @GetMapping("{id}")
    public Optional<Category> findById(@PathVariable Long id) {
        return this.categoryServiceImp.getById(id);
    }

    @PostMapping
    public Category store(
        @RequestBody Category category
    ) {
        return this.categoryServiceImp.store(category);
    }
}
