package com.smydata.user.service;

import java.util.List;

import com.smydata.model.JobModel;
import com.smydata.model.User;

public interface UserService {
	User getUserDetails(String mobile);
	User getUserDetailsById(Long id);
	List<User> getAllUserDetails();
	User saveUser(User user);
	List<JobModel> getAllJobs();
	List<JobModel> saveJobs(List<JobModel> data);
}
