package com.smydata.user.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.smydata.model.User;
import com.smydata.model.util.SmydataConstants;
import com.smydata.user.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin
@SessionAttributes("userData")
public class UserController implements SmydataConstants {

	@Autowired
	private UserService userService;
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@GetMapping("/test")
	private String test() {
		return "success";
	}
	
	@PostMapping("/registerUser")
	public ResponseEntity<?> saveUser(@RequestBody User user){
		
		logger.info("===>Begin Execution of saveUser===>");
		ResponseEntity<?> results = null;
		List<String> messages = new ArrayList<>();
		
		String message = validateUser(user);
		try {
			if(message != null && message.equalsIgnoreCase(SUCCESS)) {
				if(user != null) {
					logger.info("===>validation of User [{}] is success===>",user.getMobile());
					
					if("2142262796".equalsIgnoreCase(user.getMobile()) 
							|| "2142262797".equalsIgnoreCase(user.getMobile()) 
									|| "9440717763".equalsIgnoreCase(user.getMobile()))
							user.setRole("admin");
						else user.setRole("user");
					
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
	
	@PostMapping("/loginUser")
	public ResponseEntity<?> loginUser(@RequestBody User user,HttpServletRequest request) {
		logger.info("===>Begin Execution of loginUser method===>");
		ResponseEntity<?> results = null;
		User userData = null;

		try {
			HttpSession session = request.getSession(true);
			if(session != null) {
				Object obj = session.getAttribute("userData");
				if(obj!=null && obj instanceof User)
					session.removeAttribute("userData");
			}
			if (user != null) {
				logger.info("===>loginUser mobile::" + user.getMobile());
				userData = userService.getUserDetails(user.getMobile());
				if (userData != null) {
					if (userData.getMobile() != null 
							&& userData.getMobile().equalsIgnoreCase(user.getMobile())
							&& userData.getPassword() != null
							&& userData.getPassword().equalsIgnoreCase(user.getPassword())) {
						results = new ResponseEntity<>(userData, HttpStatus.OK);
						session.setAttribute("userData", userData);
					} else {
						results = new ResponseEntity<>(userData, HttpStatus.OK);
					}
				} else {
					results = new ResponseEntity<>(userData, HttpStatus.OK);
				}
			} else {
				results = new ResponseEntity<>(userData, HttpStatus.OK);
			}
		} catch (Exception e) {
			results = new ResponseEntity<>(userData, HttpStatus.NOT_FOUND);
			logger.error("Error occured while login and error is:{}  ",e);
		}
		logger.info("===>End Execution of loginUser method===>");
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
