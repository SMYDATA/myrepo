package com.smydata.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="job_detail")
public class JobModel implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -4991247567467759753L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="job_id")
	private Long jobId;
	@Column(name="technology")
	private String resourceTechnology;
	@Column(name="experience")
	private int resourceExp;
	@Column(name="visaType")
	private String resourceVisaType;
	@Column(name="description")
	private String description;
	@Column(name="comments")
	private String comments;
	@Column(name="create_date")
	private Date createDate;
	
	public JobModel() {
		super();
	}
	
	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Long getJobId() {
		return jobId;
	}

	public void setJobId(Long jobId) {
		this.jobId = jobId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getResourceTechnology() {
		return resourceTechnology;
	}

	public void setResourceTechnology(String resourceTechnology) {
		this.resourceTechnology = resourceTechnology;
	}

	public String getResourceVisaType() {
		return resourceVisaType;
	}

	public void setResourceVisaType(String resourceVisaType) {
		this.resourceVisaType = resourceVisaType;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public int getResourceExp() {
		return resourceExp;
	}

	public void setResourceExp(int resourceExp) {
		this.resourceExp = resourceExp;
	}

	
}
