package com.smydata.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name= "profile")
public class Profile implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -3915856921669737260L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="profile_id")
	private Long profileId;
	@Column(name="resource_name")
	private String resourceName;
	@Column(name="resource_email")
	private String resourceEmail;
	@Column(name="resource_number")
	private String resourceNumber;
	@Column(name="resource_technology")
	private String resourceTechnology;
	@Column(name="resource_spec")
	private String resourceSpec;
	@Column(name="resource_exp")
	private String resourceExp;
	@Column(name="resource_visa_type")
	private String resourceVisaType;
	@Column(name="resource_location")
	private String resourceLocation;
	@Column(name="resource_bill_rate")
	private String resourceBillRate;
	@Column(name="resource_availability")
	private String resourceAvailability;
	@Column(name="client")
	private String client;
	@Column(name="client_location")
	private String clientLocation;
	@Column(name="employer_name")
	private String employerName;
	@Column(name="employer_email")
	private String employerEmail;
	@Column(name="employer_number")
	private String employerNumber;
	@Column(name="comments")
	private String comments;
	@Column(name="file_name")
	private String fileName;
	@Column(name="file_content")
	@Lob
	byte[] fileContent;
	 @Column(name = "mimetype")
	private String mimetype;
	@Column(name="user_mobile")
	private String userMobile;
	@Column(name="job_id")
	private String jobId;
	@Column(name="read_only")
	private boolean readOnly;
	
	public Profile() {
		super();
	}

	public Long getProfileId() {
		return profileId;
	}

	public void setProfileId(Long profileId) {
		this.profileId = profileId;
	}

	public boolean isReadOnly() {
		return readOnly;
	}

	public void setReadOnly(boolean readOnly) {
		this.readOnly = readOnly;
	}

	public String getClientLocation() {
		return clientLocation;
	}

	public void setClientLocation(String clientLocation) {
		this.clientLocation = clientLocation;
	}

	public String getJobId() {
		return jobId;
	}

	public void setJobId(String jobId) {
		this.jobId = jobId;
	}

	public String getUserMobile() {
		return userMobile;
	}

	public void setUserMobile(String userMobile) {
		this.userMobile = userMobile;
	}

	public byte[] getFileContent() {
		return fileContent;
	}

	public void setFileContent(byte[] fileContent) {
		this.fileContent = fileContent;
	}

	public String getMimetype() {
		return mimetype;
	}

	public void setMimetype(String mimetype) {
		this.mimetype = mimetype;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getResourceName() {
		return resourceName;
	}
	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}
	public String getResourceEmail() {
		return resourceEmail;
	}
	public void setResourceEmail(String resourceEmail) {
		this.resourceEmail = resourceEmail;
	}
	public String getResourceNumber() {
		return resourceNumber;
	}
	public void setResourceNumber(String resourceNumber) {
		this.resourceNumber = resourceNumber;
	}
	public String getResourceTechnology() {
		return resourceTechnology;
	}
	public void setResourceTechnology(String resourceTechnology) {
		this.resourceTechnology = resourceTechnology;
	}
	public String getResourceSpec() {
		return resourceSpec;
	}
	public void setResourceSpec(String resourceSpec) {
		this.resourceSpec = resourceSpec;
	}
	public String getResourceExp() {
		return resourceExp;
	}
	public void setResourceExp(String resourceExp) {
		this.resourceExp = resourceExp;
	}
	public String getResourceVisaType() {
		return resourceVisaType;
	}
	public void setResourceVisaType(String resourceVisaType) {
		this.resourceVisaType = resourceVisaType;
	}
	public String getResourceLocation() {
		return resourceLocation;
	}
	public void setResourceLocation(String resourceLocation) {
		this.resourceLocation = resourceLocation;
	}
	public String getResourceBillRate() {
		return resourceBillRate;
	}
	public void setResourceBillRate(String resourceBillRate) {
		this.resourceBillRate = resourceBillRate;
	}
	public String getResourceAvailability() {
		return resourceAvailability;
	}
	public void setResourceAvailability(String resourceAvailability) {
		this.resourceAvailability = resourceAvailability;
	}
	public String getClient() {
		return client;
	}
	public void setClient(String client) {
		this.client = client;
	}
	public String getEmployerName() {
		return employerName;
	}
	public void setEmployerName(String employerName) {
		this.employerName = employerName;
	}
	public String getEmployerEmail() {
		return employerEmail;
	}
	public void setEmployerEmail(String employerEmail) {
		this.employerEmail = employerEmail;
	}
	public String getEmployerNumber() {
		return employerNumber;
	}
	public void setEmployerNumber(String employerNumber) {
		this.employerNumber = employerNumber;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	
}
