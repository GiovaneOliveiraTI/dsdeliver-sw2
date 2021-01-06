package com.sddeliver.delivery.repositories;

import com.sddeliver.delivery.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products "
        + "WHERE obj.status = 0 ORDER BY obj.moment ASC" )
    List<Order> findOrdersWithProducts();
}
