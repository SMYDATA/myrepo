package com.smydata.resource.controller;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;

import com.smydata.model.FileModel;
import com.smydata.model.Profile;
import com.smydata.model.ResourceDetail;
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

	/*@PostMapping("/file/upload")
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
	}*/
	
	@PostMapping("/saveFile")
	public void getUploadFile(@RequestParam("index")String index,@RequestParam("file") MultipartFile file) throws IOException {
		
		logger.info("===>Begin Execution of getUploadFile===>");
		try {
			if(file !=null) {
				FileModel fileModel = new FileModel();
				fileModel.setFileName(file.getOriginalFilename());
				fileModel.setMimeType(file.getContentType());
				fileModel.setFileContent(file.getBytes());
				filesMap.put(Integer.parseInt(index), fileModel);
			} else
				logger.info("Empty file recievd for index :  "+index);
			
		} catch(Exception e) {
			logger.error("Error occured while saving attachment and error is:  ", e);
		}
	}
	
	@PostMapping(value ="/saveProfile/{userMobile}")
	public ResponseEntity<?> saveResourceDetails(@RequestBody List<ResourceDetail> resources, @PathVariable("userMobile") String userMobile){
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
				List<Profile> profilesObject = convertResourceToProfileObject(resources, userMobile);
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
	
	private List<Profile> convertResourceToProfileObject(List<ResourceDetail> resources, String userMobile) throws IOException {
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
						profile.setFileContent(fileModel.getFileContent());
						profile.setFileName(fileModel.getFileName());
						profile.setMimetype(fileModel.getMimeType());
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
			profile.setUserMobile(userMobile);
			profiles.add(profile);
		}
		return profiles;
		
	}
	@GetMapping("/getProfile/{mobile}/{role}")
	public ResponseEntity<?> getProfiles(@PathVariable("mobile") String mobile, @PathVariable("role") String role, HttpServletRequest request){
		
		logger.info("===>Begin Execution of getResourceDetails===>");
		ResponseEntity<?> results = null;
		List<Profile> profiles = null;
//		User user = null;
		
		try {
//			HttpSession session = request.getSession();
			/*if(session != null) {
				Object obj = session.getAttribute("userData");
				if(obj!=null && obj instanceof User) {
					user = (User) obj;
				}
			}*/
			if(filesMap != null && !filesMap.isEmpty())
				filesMap.clear();
			
			/*HttpSession session = request.getSession();
			session.removeAttribute("filesMap");*/
			if(mobile != null) {
				if("ADMIN".equalsIgnoreCase(role)) {
					profiles = resourceService.getResourceDetails();
					results = new ResponseEntity<>(profiles, HttpStatus.OK);
				} else {
					profiles = resourceService.getProfilesByMobileNo(mobile);
					results = new ResponseEntity<>(profiles, HttpStatus.OK);
				}
					
			}
			/*profiles = resourceService.getResourceDetails();
			if(profiles != null && !profiles.isEmpty()) {
				results = new ResponseEntity<>(profiles, HttpStatus.OK);
			} else {
				results = new ResponseEntity<>(profiles, HttpStatus.OK);
			}*/

		} catch (Exception e) {
			results = new ResponseEntity<>(profiles, HttpStatus.NOT_FOUND);
			logger.error("Error occured while getting Resource Details and error is:{}  ", e);
		}
		logger.info("===>End Execution of getResourceDetails===>");
		return results;
	}
	
	@GetMapping("/fileDownload/{mobile}")
	public ResponseEntity<?> fileDownload(@PathVariable String mobile,HttpServletRequest request,HttpServletResponse response){
		logger.info("===>Begin Execution of fileDownload===>");
		ResponseEntity<?> results = null;
		List<Profile> profiles = null;
		try {
			profiles = resourceService.getProfilesByMobileNo(mobile);
			if(profiles != null && !profiles.isEmpty()) {
				 // set content attributes for the response
				Profile profile = profiles.get(0);
				/* String mimeType= URLConnection.guessContentTypeFromName(profile.getFileName());
			        if(mimeType==null){
			            System.out.println("mimetype is not detectable, will take default");
			            mimeType = "application/octet-stream";
			        }
			        logger.info("===>mimeType::"+mimeType);*/
				/*response.reset();
		        response.setContentType(profile.getMimetype());
		        response.setContentLength(profile.getFileContent().length);*/
		        
		        // set headers for the response
		        String headerKey = "Content-Disposition";
		        String headerValue = String.format("attachment; filename=\"%s\"",profile.getFileName());
//		        response.setHeader(headerKey, headerValue);
		        /*response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
		        response.setHeader("Pragma", "no-cache");
		        response.setHeader("Expires", "0");
		        response.setHeader("Content-disposition", "attachment;filename="+profile.getFileName());
		        response.getOutputStream().write(profile.getFileContent());
*/
//	            response.getOutputStream().flush();
//	            response.getOutputStream().close();
//		        FileCopyUtils.copy(profile.getFileContent(), response.getOutputStream());
		        HttpHeaders headers = new HttpHeaders();
		        //headers.add(headerKey, "attachment;filename="+profile.getFileName());
		        headers.add(headerKey, headerValue);
		        headers.add(HttpHeaders.CACHE_CONTROL, "no-cache, no-store, must-revalidate");
//		        headers.add(HttpHeaders.CONTENT_TYPE, profile.getMimetype());
		        headers.add(HttpHeaders.PRAGMA,"no-cache");
		        headers.add(HttpHeaders.EXPIRES,"0");
//		        ByteArrayInputStream resource = new ByteArrayInputStream(profile.getFileContent());
		        results =  ResponseEntity.ok().headers(headers).contentLength(profile.getFileContent().length).contentType(MediaType.parseMediaType(profile.getMimetype())).body(profile.getFileContent());
			}
		} catch (Exception e) {
//			results = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			logger.error("Error occured while downloading file and error is:{}  ", e);
		}
		logger.info("===>End Execution of fileDownload===>");
		return results;
	}
}
