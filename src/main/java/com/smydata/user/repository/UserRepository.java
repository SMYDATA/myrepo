package com.smydata.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.model.User;

public interface UserRepository extends JpaRepository<User,String> {
	User findByMobile(String mobileNumber);
}
