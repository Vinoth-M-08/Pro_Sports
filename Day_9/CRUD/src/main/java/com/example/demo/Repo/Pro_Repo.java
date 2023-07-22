package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modle.Products;


public interface Pro_Repo extends JpaRepository<Products, Integer> {

}
