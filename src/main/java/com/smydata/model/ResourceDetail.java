package com.smydata.model;

public class ResourceDetail {
	
	private String resourceName;
	private String resourceEmail;
	private String resourceNumber;
	private String resourceTechnology;
	private String resourceSpec;
	private String resourceExp;
	private String resourceVisaType;
	private String resourceLocation;
	private String resourceBillRate;
	private String resourceAvailability;
	private String client;
	private String clientLocation;
	private String employerName;
	private String employerEmail;
	private String employerNumber;
	private String comments;
	private boolean readOnly;
	private String jobId;
	
	public ResourceDetail() {
		super();
	}
	
	public String getJobId() {
		return jobId;
	}

	public void setJobId(String jobId) {
		this.jobId = jobId;
	}

	public String getClientLocation() {
		return clientLocation;
	}

	public void setClientLocation(String clientLocation) {
		this.clientLocation = clientLocation;
	}

	public boolean isReadOnly() {
		return readOnly;
	}

	public void setReadOnly(boolean readOnly) {
		this.readOnly = readOnly;
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
