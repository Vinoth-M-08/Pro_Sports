package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repo.Pro_Repo;
import com.example.demo.modle.Products;

@Service
public class ApiService {
	@Autowired
	private Pro_Repo productRepository;
	public List<Products> getAllProducts() {
	return productRepository.findAll();
	}
	public Products getProductById(Integer id) {
	return productRepository.findById(id).get();
	}
	public boolean createProduct(Products products) {
	return productRepository.save(products) != null? true:false;
	}
	public Products updateProduct(Integer id, Products product) {
	Products pru = productRepository.findById(id).get();
	pru.setTitle(product.getTitle());
	pru.setDescription(product.getDescription());
	pru.setPrize(product.getPrize());
	pru.setCategory(product.getCategory());
	pru.setRating(product.getRating());
	return productRepository.save(pru);
	}
	public boolean deleteProduct(Integer id) {
	if(productRepository.findById(id).isPresent()){
		productRepository.deleteById(id);
	return true; }
	return false;
	}
}
