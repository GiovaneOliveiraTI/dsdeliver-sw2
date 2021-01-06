package com.sddeliver.delivery.services;

import com.sddeliver.delivery.dtos.OrderDTO;
import com.sddeliver.delivery.entities.Order;
import com.sddeliver.delivery.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll () {
        List<Order> orders = orderRepository.findOrdersWithProducts();
        return orders.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
    }
}
