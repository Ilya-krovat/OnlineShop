package com.controllers;

import com.model.Product;
import com.service.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/products")
public class MainController {

    @Autowired
    private Shop shop;

    @GetMapping
    public List<Product> getProducts(){
        return shop.getAllProducts();
    }

    @PostMapping
    public List<Product> addProduct(@RequestBody Product product){
        shop.addProduct(product);
        return shop.getAllProducts();
    }

    @PostMapping("/{id}")
    public List<Product> editProduct(@RequestBody Product product, @PathVariable String id){
        shop.editProduct(product,Integer.parseInt(id));
        return shop.getAllProducts();
    }

    @DeleteMapping("/{id}")
    public List<Product> deleteProduct(@PathVariable String id){
        shop.deleteProduct(Integer.parseInt(id));
        return shop.getAllProducts();
    }
}
