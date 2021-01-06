package com.sddeliver.delivery.repositories;

import com.sddeliver.delivery.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
