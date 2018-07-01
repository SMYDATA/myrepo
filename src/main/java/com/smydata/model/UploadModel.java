package com.smydata.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="file_model")
public class UploadModel {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id")
	private Long id;
	
	@Column(name = "name")
	private String name;
    
    @Column(name = "mimetype")
	private String mimetype;
	
	@Lob
    @Column(name="pic")
    private byte[] pic;
		
	public UploadModel() {
		// TODO Auto-generated constructor stub
	}

	public UploadModel(String name, String mimetype, byte[] pic) {
		super();
		this.name = name;
		this.mimetype = mimetype;
		this.pic = pic;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMimetype() {
		return mimetype;
	}

	public void setMimetype(String mimetype) {
		this.mimetype = mimetype;
	}

	public byte[] getPic() {
		return pic;
	}

	public void setPic(byte[] pic) {
		this.pic = pic;
	}
	

}
