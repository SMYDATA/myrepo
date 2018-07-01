package com.smydata.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="mobile_number")
	private String mobile;
	@Column(name="user_name")
	private String userName;
	@Column(name="email")
	private String email;
	@Column(name="password")
	private String password;
	@Column(name="role")
	private String role;
	
	public User() {
		super();
	}

	
	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
