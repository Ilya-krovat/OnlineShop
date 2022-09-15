package com.service;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.model.Category;
import com.model.Product;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@JsonSerialize
public class Shop {

    int id=0;

    private List<Product> products = new ArrayList<>();
    private List<Category> categories = new ArrayList<>();

    public List<Product> getAllProducts(){
        return products;
    }

    public void addProduct(Product product){
        product.setId(id);
        id++;
        products.add(product);
    }

    public void editProduct(Product product, int id){
        products.removeIf(prod -> prod.getId()==id);
        products.add(product);
        products.sort(new Comparator<Product>() {
            @Override
            public int compare(Product prod1, Product prod2) {
                return Integer.compare(prod2.getId(), prod1.getId());
            }
        });
        Collections.reverse(products);
    }

    public void deleteProduct(int id){
        products.removeIf(product -> product.getId()==id);
    }

    public List<Product> getProductsByCategory(Category category){
        return products.stream().filter(x -> x.getCategory().equals(category)).collect(Collectors.toList());
    }

    public void addCategory(Category category){
        categories.add(category);
    }

    public void deleteCategory(Category category){
        categories.remove(category);
    }

    public List<Category> getCategories(){
        return categories;
    }

    public Category getCategory(int id){
        return categories.get(id);
    }
}
