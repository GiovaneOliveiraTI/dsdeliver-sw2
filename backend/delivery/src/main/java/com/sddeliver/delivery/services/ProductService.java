package com.sddeliver.delivery.services;

import com.sddeliver.delivery.dtos.ProductDTO;
import com.sddeliver.delivery.entities.Product;
import com.sddeliver.delivery.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<ProductDTO> findAll () {
        List<Product> products = productRepository.findAllByOrderByNameAsc();
        return products.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());


    }
}
