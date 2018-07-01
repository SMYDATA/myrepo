package com.smydata.user.service;

import java.util.List;

import com.smydata.model.User;

public interface UserService {
	User getUserDetails(String mobile);
	List<User> getAllUserDetails();
	User saveUser(User user);
}
