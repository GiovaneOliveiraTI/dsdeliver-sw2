package com.sddeliver.delivery.repositories;

import com.sddeliver.delivery.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
