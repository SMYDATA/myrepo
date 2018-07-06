package com.smydata.resource.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.smydata.model.FileModel;
import com.smydata.model.Profile;
import com.smydata.model.ResourceDetail;
import com.smydata.model.UploadModel;
import com.smydata.model.User;
import com.smydata.resource.service.FileRepository;
import com.smydata.resource.service.ResourceService;

@RestController
@RequestMapping("/api")
@CrossOrigin
@SessionAttributes("userData")
public class ResourceController {
	
	@Autowired
	private ResourceService resourceService;
	
	@Autowired
	FileRepository fileRepository;
	
	private static Map<Integer,FileModel> filesMap = new HashMap<>();
	
	private static final Logger logger = LoggerFactory.getLogger(ResourceController.class);

	@PostMapping("/file/upload")
	public String uploadMultipartFile(@RequestParam("uploadfile") MultipartFile file) {
		try {
			UploadModel filemode = new UploadModel(file.getOriginalFilename(), file.getContentType(), file.getBytes());
			fileRepository.save(filemode);
			return "File uploaded successfully! -> filename = " + file.getOriginalFilename();
		} catch (Exception e) {
			return "FAIL! Maybe You had uploaded the file before or the file's size > 500KB";
		}
	}
	 
	@GetMapping("/file/all")
	public List<UploadModel> getListFiles() {
		return fileRepository.findAll();
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping("/saveFile")
	public void getUploadFile(@RequestParam("index")String index,@RequestParam("file") MultipartFile file) throws IOException {
		
		logger.info("===>Begin Execution of getUploadFile===>");
		try {
			FileModel fileModel = new FileModel();
			fileModel.setFileName(file.getOriginalFilename());
			fileModel.setFileContent(file.getBytes());
				filesMap.put(Integer.parseInt(index), fileModel);
		} catch(Exception e) {
			logger.error("Error occured while saving attachment and error is:  ", e);
		}
	}
	
	@PostMapping(value ="/saveProfile")
	public ResponseEntity<?> saveResourceDetails(@RequestBody List<ResourceDetail> resources){
		logger.info("===>Begin Execution of saveResourceDetails===>");
		ResponseEntity<?> results = null;
		List<Profile> profiles = null;
//		List<ResourceDetail> resources = null;
//		List<MultipartFile> uploadFiles = null;
		try {
//			ObjectMapper mapper = new ObjectMapper();
//			uploadFiles = mapper.readValue(file, new TypeReference<List<MultipartFile>>() {});
//			resources = mapper.readValue(profile, new TypeReference<List<ResourceDetail>>() {});
			if(resources != null && !resources.isEmpty()) {
				List<Profile> profilesObject = convertResourceToProfileObject(resources);
				profiles = resourceService.saveResourceDetail(profilesObject);
				if(profiles != null && !profiles.isEmpty()) {
					results = new ResponseEntity<>(profiles, HttpStatus.OK);
				} else {
					results = new ResponseEntity<>(profiles, HttpStatus.OK);	
				}
			} else {
				results = new ResponseEntity<>(profiles, HttpStatus.OK);
			}
			
		} catch (Exception e) {
			results = new ResponseEntity<>(profiles, HttpStatus.NOT_FOUND);
			logger.error("Error occured while saving Resource Details and error is:  ", e);
		}
		logger.info("===>End Execution of saveResourceDetails===>");
		return results;
	}
	
	@SuppressWarnings("unchecked")
	private List<Profile> convertResourceToProfileObject(List<ResourceDetail> resources) throws IOException {
		List<Profile> profiles = new ArrayList<>();
		/*Map<Integer,FileModel> filesMap = null;
		HttpSession session = request.getSession();
		if(session!=null) {
			Object object = session.getAttribute("filesMap");
			if(object != null && object instanceof HashMap) {
				filesMap = (Map<Integer, FileModel>) object;
			}
		}*/
				
		for(int i=0;i<resources.size();i++) {
			ResourceDetail resource = resources.get(i);
			Profile profile = new Profile();
			if(filesMap != null && !filesMap.isEmpty()) {
				for(Integer key:filesMap.keySet()) {
					if(key == i) {
						FileModel fileModel = filesMap.get(key);
						profile.setFile(fileModel.getFileContent());
						profile.setFileName(fileModel.getFileName());
						break;
					}
				}
			}
			
			profile.setClient(resource.getClient());
			profile.setComments(resource.getComments());
			profile.setEmployerEmail(resource.getEmployerEmail());
			profile.setEmployerName(resource.getEmployerName());
			profile.setEmployerNumber(resource.getEmployerNumber());
			profile.setResourceAvailability(resource.getResourceAvailability());
			profile.setResourceBillRate(resource.getResourceBillRate());
			profile.setResourceEmail(resource.getResourceEmail());
			profile.setResourceExp(resource.getResourceExp());
			profile.setResourceName(resource.getResourceName());
			profile.setResourceNumber(resource.getResourceNumber());
			profile.setResourceSpec(resource.getResourceSpec());
			profile.setResourceTechnology(resource.getResourceTechnology());
			profile.setResourceVisaType(resource.getResourceVisaType());
			profile.setResourceLocation(resource.getResourceLocation());
			profiles.add(profile);
		}
		return profiles;
		
	}
	@GetMapping("/getProfile")
	public ResponseEntity<?> getProfiles(HttpServletRequest request){
		
		logger.info("===>Begin Execution of getResourceDetails===>");
		ResponseEntity<?> results = null;
		List<Profile> profiles = null;
		User user = null;
		
		try {
			HttpSession session = request.getSession();
			if(session != null) {
				Object obj = session.getAttribute("userData");
				if(obj!=null && obj instanceof User) {
					user = (User) obj;
				}
			}
			if(filesMap != null && !filesMap.isEmpty())
				filesMap.clear();
			
			/*HttpSession session = request.getSession();
			session.removeAttribute("filesMap");*/
			if(user != null) {
				if("admin".equalsIgnoreCase(user.getRole()))
					profiles = resourceService.getResourceDetails();
				else
					profiles = resourceService.getProfilesByMobileNo(user.getMobile());
			}
			profiles = resourceService.getResourceDetails();
			if(profiles != null && !profiles.isEmpty()) {
				results = new ResponseEntity<>(profiles, HttpStatus.OK);
			} else {
				results = new ResponseEntity<>(profiles, HttpStatus.OK);
			}

		} catch (Exception e) {
			results = new ResponseEntity<>(profiles, HttpStatus.NOT_FOUND);
			logger.error("Error occured while getting Resource Details and error is:{}  ", e);
		}
		logger.info("===>End Execution of getResourceDetails===>");
		return results;
	}
}
