package com.smydata.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smydata.model.JobModel;
import com.smydata.model.User;
import com.smydata.user.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	JobRepositroy jobRepositroy;

	@Override
	public User getUserDetails(String mobile) {
		return userRepository.findByMobile(mobile);
	}

	@Override
	public User saveUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> getAllUserDetails() {
		return userRepository.findAll();
	}

	@Override
	public List<JobModel> getAllJobs() {
		return jobRepositroy.findAll();
	}

	@Override
	public List<JobModel> saveJobs(List<JobModel> data) {
		return jobRepositroy.saveAll(data);
	}

	@Override
	public User getUserDetailsById(Long id) {
		return userRepository.findByUserId(id);
	}

}
