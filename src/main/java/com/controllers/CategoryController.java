package com.controllers;

import com.model.Category;
import com.service.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private Shop shop;

    @GetMapping
    public List<Category> getCategories(){
        return shop.getCategories();
    }

    @PostMapping
    public void addCategory(Category category){
        shop.addCategory(category);
    }

    @DeleteMapping
    public void deleteCategory(Category category){
        shop.deleteCategory(category);
    }

    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable String id){
        return  shop.getCategory(Integer.parseInt(id));
    }
}
