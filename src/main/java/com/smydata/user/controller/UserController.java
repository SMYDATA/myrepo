package com.smydata.user.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.smydata.model.JobModel;
import com.smydata.model.User;
import com.smydata.model.util.SmydataConstants;
import com.smydata.user.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin
//@SessionAttributes("userData")
public class UserController implements SmydataConstants {

	@Autowired
	private UserService userService;
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@GetMapping("/test")
	private String test() {
		return "success";
	}
	
	/**
	 * Create account and updating user status
	 * @param user
	 * @param blocked
	 * @return
	 */
	@PostMapping("/registerUser/{blocked}")
	public ResponseEntity<?> saveUser(@RequestBody User user, @PathVariable("blocked") boolean blocked){
		
		logger.info("===>Begin Execution of saveUser===>");
		ResponseEntity<?> results = null;
		List<String> messages = new ArrayList<>();
		String message = "";
		
		try {
			if (!blocked) {
				message = validateUser(user);//validate User if already exist
			} else {
				message = SUCCESS;
			}
			
			if(message != null && message.equalsIgnoreCase(SUCCESS)) {
				if(user != null) {
					logger.info("===>validation of User [{}] is success===>",user.getMobile());
					if (!blocked) {
						if ("2142262796".equalsIgnoreCase(user.getMobile())
								|| "2142262797".equalsIgnoreCase(user.getMobile())
								|| "9440717763".equalsIgnoreCase(user.getMobile())
								|| "7799663951".equalsIgnoreCase(user.getMobile()))
							user.setRole(ADMIN);
						else
							user.setRole(USER);
					}
					
					User savedUser = userService.saveUser(user);
					if(savedUser != null) {
						messages.add(message);
						results = new ResponseEntity<>(messages, HttpStatus.OK);
					} else {
						messages.add("Failed to create account, please try again later!!");
						results = new ResponseEntity<>(messages, HttpStatus.OK);
					}
				} else {
					messages.add("Failed to create account, please try again later!!");
					results = new ResponseEntity<>(messages, HttpStatus.OK);
				}
				
			} else {
				if(message != null && !message.trim().isEmpty())
					messages.add(message);
				logger.info("===>validation of User [{}] is failed===>",user.getMobile());
				results = new ResponseEntity<>(messages, HttpStatus.OK);
			}
		}
		catch(Exception e){
			messages.add("Unexpected error occured while creating user,please try again later!!");
			results = new ResponseEntity<>(messages, HttpStatus.NOT_FOUND);
			logger.error("Error occured while saving for user [{}] and error is:{}  ", user != null ? user.getMobile() : "UNKNOWN", e);
		}
		
		logger.info("===>End Execution of saveUser===>");
		return results;
	}
	
	/**
	 * login User verification
	 * @param user
	 * @param request
	 * @return
	 */
	@PostMapping("/loginUser")
	public ResponseEntity<?> loginUser(@RequestBody User user, HttpServletRequest request) {
		logger.info("===>Begin Execution of loginUser method===>");
		ResponseEntity<?> results = null;
		User userData = null;

		try {
			if (user != null) {
				logger.info("===>loginUser mobile::" + user.getMobile());
				userData = userService.getUserDetails(user.getMobile());
				if (userData != null) {
					if (userData.getMobile() != null && userData.getMobile().equalsIgnoreCase(user.getMobile())
							&& userData.getPassword() != null
							&& userData.getPassword().equalsIgnoreCase(user.getPassword())) {
						results = new ResponseEntity<>(userData, HttpStatus.OK);
					} else {
						results = new ResponseEntity<>(HttpStatus.OK);
					}
				} else {
					userData = null;
					results = new ResponseEntity<>(userData, HttpStatus.OK);
				}
			} else {
				results = new ResponseEntity<>(userData, HttpStatus.OK);
			}
		} catch (Exception e) {
			results = new ResponseEntity<>(userData, HttpStatus.NOT_FOUND);
			logger.error("Error occured while login and error is:{}  ", e);
		}
		logger.info("===>End Execution of loginUser method===>");
		return results;
	}
	
	@PostMapping("/editUser")
	public ResponseEntity<?> editUser(@RequestBody User user) {
		logger.info("===>Begin Execution of editUser method===>");
		ResponseEntity<?> results = null;
		User userData = null;
		

		try {
			if (user != null) {
				logger.info("===>editUser ID[{}]::", user.getUserId());
				User userDataFromDb = userService.getUserDetailsById(user.getUserId());
				if (userDataFromDb != null) {
					userDataFromDb.setEmail(user.getEmail());
					userDataFromDb.setUserName(user.getUserName());
					userData = userService.saveUser(userDataFromDb);
					if(userData != null) {
						logger.info("===>User data updated successfully===>");
						results = new ResponseEntity<>(userData, HttpStatus.OK);
					} else {
						userData = null;
						results = new ResponseEntity<>(userData, HttpStatus.OK);
					}
				} else {
					logger.info("===>Records not found for user mobile[{}]===>",user.getMobile());
					userData = null;
					results = new ResponseEntity<>(userData, HttpStatus.OK);
				}
			} else {
				results = new ResponseEntity<>(userData, HttpStatus.OK);
			}
		} catch (Exception e) {
			results = new ResponseEntity<>(userData, HttpStatus.NOT_FOUND);
			logger.error("Error occured while updating user data and error is:{}  ", e);
		}
		logger.info("===>End Execution of editUser method===>");
		return results;
	}
	
	@GetMapping("/getUsers")
	public ResponseEntity<?> getUserDetails() {
		logger.info("===>Begin Execution of loginUser method===>");
		ResponseEntity<?> results = null;
		List<User> userData = null;

		try {
				userData = userService.getAllUserDetails();
				if (userData != null && !userData.isEmpty()) {
						results = new ResponseEntity<>(userData, HttpStatus.OK);
				} else {
					results = new ResponseEntity<>(userData, HttpStatus.OK);
				}
		} catch (Exception e) {
			results = new ResponseEntity<>(userData, HttpStatus.NOT_FOUND);
			logger.error("Error occured while getting All UserDetails and error is:{}  ",e);
		}
		return results;
	}
	
	@GetMapping("/getJobs")
	public ResponseEntity<?> getJobDetails() {
		logger.info("===>Begin Execution of getJobDetails method===>");
		ResponseEntity<?> results = null;
		List<JobModel> jobs = null;

		try {
				jobs = userService.getAllJobs();
				if (jobs != null && !jobs.isEmpty()) {
						results = new ResponseEntity<>(jobs, HttpStatus.OK);
				} else {
					logger.info("===>Jobs not found===>");
					results = new ResponseEntity<>(jobs, HttpStatus.OK);
				}
		} catch (Exception e) {
			results = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			logger.error("Error occured while getting All job Details and error is:{}  ",e);
		}
		logger.info("===>End Execution of getJobDetails method===>");
		return results;
	}
	
	@PostMapping("/addJob")
	public ResponseEntity<?> saveJobDetails(@RequestBody List<JobModel> jobsModel) {
		logger.info("===>Begin Execution of saveJobDetails method===>");
		ResponseEntity<?> results = null;
		List<JobModel> jobs = null;

		try {
				if (jobsModel != null && !jobsModel.isEmpty()) {
					Calendar currenttime = Calendar.getInstance();
					JobModel model = jobsModel.get(0);
					model.setCreateDate(new Date((currenttime.getTime()).getTime()));
					jobsModel.set(0, model);
					jobs = userService.saveJobs(jobsModel);
					if (jobs != null && !jobs.isEmpty()) {
						results = new ResponseEntity<>(jobs, HttpStatus.OK);
					} else {
						results = new ResponseEntity<>(jobs, HttpStatus.OK);
					}
					
				} else {
					logger.info("===>Received empty data from UI===>");
					results = new ResponseEntity<>(jobsModel, HttpStatus.OK);
				}
		} catch (Exception e) {
			results = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			logger.error("Error occured while saving jobs info and error is:{}  ",e);
		}
		logger.info("===>End Execution of saveJobDetails method===>");
		return results;
	}
	
	private String validateUser(User user) {
		String message = SUCCESS;
		if (user != null) {
			User userData = userService.getUserDetails(user.getMobile());
			if (userData != null) {
				if (userData.getMobile() != null && userData.getMobile().equalsIgnoreCase(user.getMobile())) {
					message = "Mobile number already registered,please use different mobile for creating account";
				} 
			}
		}
		return message;
	}
	
}
