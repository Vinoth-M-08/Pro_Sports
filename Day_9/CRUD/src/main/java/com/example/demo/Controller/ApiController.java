package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.ApiService;
import com.example.demo.modle.Products;
@RestController
public class ApiController {
	@Autowired
	private ApiService apiService;
	@CrossOrigin
	@GetMapping("/get")
	public List<Products> getAllProducts() {
	return apiService.getAllProducts();
	}
	@GetMapping("/{id}")
	public Products getProductById(@PathVariable Integer id) {
	return apiService.getProductById(id);
	}

	@PostMapping("/post")
	public boolean createProducts(@RequestBody Products product) {
	return apiService.createProduct(product);
	}
	@PutMapping("/{id}")
	public Products updateProducts( @RequestBody Products product,@PathVariable Integer id)
	{
	return apiService.updateProduct(id, product);
	}
	@DeleteMapping("/{id}")
	public boolean deleteProducts(@PathVariable Integer id) {
	return apiService.deleteProduct(id);
	}
}
